import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

// To be accessible across app
const config = {}; 

config.port = process.env.PORT || 4000;

config.db_username = process.env.DB_USERNAME;
config.db_password = process.env.DB_PASSWORD;
config.db_name = process.env.DB_NAME;
config.db_host = process.env.DB_HOST;
config.db_port = process.env.DB_PORT;

config.jwt_encryption = process.env.JWT_ENCRYPTION;
config.jwt_expiration = process.env.JWT_EXPIRATION || 604800;

config.facebook_id = process.env.FACEBOOK_ID;
config.facebook_secret = process.env.FACEBOOK_SECRET;

config.google_id = process.env.GOOGLE_ID;
config.google_secret = process.env.GOOGLE_SECRET

config.frontend_dev_url = process.env.FRONTEND_DEV_URL;
config.frontend_prod_url = process.env.FRONTEND_PROD_URL;

export default config;
