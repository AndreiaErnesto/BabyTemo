module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'babytemp',
    user: process.env.DB_USER || 'babytemp',
    password: process.env.BD_PASS || 'babytemp',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.POST || 'localhost',
      storage:'./babytemp.sqlite'
    }
  }
}