var corsOptions = {
  origin: [
    // process.env.FRONTEND_URL,
    // "https://shoshanat-front.vercel.app"
    "*"
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}

module.exports = corsOptions;
