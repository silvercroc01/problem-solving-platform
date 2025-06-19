const dotenv = require('dotenv')

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  DEV_DB_URL: process.env.DEV_DB_URL,
  NODE_ENV: process.env.NODE_ENV || "development"
}
