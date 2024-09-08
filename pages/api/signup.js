/**
 * @param {import("next/types").NextApiRequest} req
 * @param {import("next/types").NextApiResponse} res */

export default function handler(req, res) {
    req.body;
    res.status(200).json({ message: 'Hello from Next.js!' })
}