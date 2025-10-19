var corsOptions = {
  origin: [
    process.env.FRONTEND_URL,
    "https://shoshanat-front.vercel.app",
    "http://localhost:3000",
    "http://localhost:5173"
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}

module.exports = corsOptions;
