import type { NextApiHandler } from "next";
import axios, { AxiosError } from "axios";

const handler: NextApiHandler = async (req, res) => {
  const { path, ...rest } = req.query;
  const url = process.env.KOMIKU_API_URL;
  if (!url) {
    res.status(500).json({ code: 500, error: "KOMIKU_API_URL is not defined" });
    return;
  }
  if (!path) {
    res.status(400).json({ code: 400, error: "path is not defined" });
    return;
  }
  try {
    const response = await axios.get(
      `${url}${Array.isArray(path) ? path.join("/") : path}`,
      {
        params: rest,
      }
    );
    return res.json({ ...response.data });
  } catch (error) {
    return res.status((error as AxiosError).response?.status || 500).json({
      code: (error as AxiosError).response?.status,
      error: (error as AxiosError).response?.data,
    });
  }
};

export default handler;
