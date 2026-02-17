import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({
      message: 'Welcome to BuilderHub API',
      version: '0.1.0',
      endpoints: {
        health: '/api/health',
        roadmap: '/api/roadmap',
        projects: '/api/projects',
      },
    });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: 'Method not allowed' });
  }
}
