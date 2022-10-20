import type { NextApiHandler } from "next";
import axios, { AxiosError } from "axios";
import redis from "../../../../lib/redis";

const handler: NextApiHandler = async (req, res) => {
  const { path, ...rest } = req.query;
  const url = process.env.KOMIKU_API_URL;
  if (!url)
    return res
      .status(500)
      .json({ code: 500, error: "KOMIKU_API_URL is not defined" });
  if (!path)
    return res.status(400).json({ code: 400, error: "path is not defined" });
  const key = `${
    Array.isArray(path) ? path.join("/") : path
  }?${new URLSearchParams(rest as Record<string, string>).toString()}`;
  try {
    const cached = await redis.get(key);
    if (cached)
      return res.status(200).json({ fromCache: true, ...JSON.parse(cached) });
    const response = await axios.get(
      `${url}${Array.isArray(path) ? path.join("/") : path}`,
      {
        params: rest,
      }
    );
    await redis.set(key, JSON.stringify(response.data), "EX", 3600, "NX");
    return res.json(response.data);
  } catch (error) {
    return res.status((error as AxiosError).response?.status || 500).json({
      code: (error as AxiosError).response?.status,
      error: (error as AxiosError).response?.data,
    });
  }
};

export default handler;
