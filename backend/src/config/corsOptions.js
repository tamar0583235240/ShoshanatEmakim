var corsOptions = {
  origin: [
    process.env.FRONTEND_URL,
    "https://shoshanatemakim.onrender.com"
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}

module.exports = corsOptions;