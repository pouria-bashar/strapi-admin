module.exports = {
  apps: [
    {
      name: 'strapi-admin', // Your project name
      cwd: '/home/bitnami/strapi-admin', // Path to your project
      script: 'npm', // For this example we're using npm, could also be yarn
      args: 'start', // Script to start the Strapi server, `start` by default
      env: {
        APP_KEYS: '',
        API_TOKEN_SALT: '',
        ADMIN_JWT_SECRET: '',
        JWT_SECRET: '',
        NODE_ENV: 'production',
        DATABASE_HOST: 'strapi-db.c6oitpp1tkds.ap-southeast-2.rds.amazonaws.com',
        DATABASE_PORT: '5432',
        DATABASE_NAME: 'postgres', // DB name under 'Configuration' tab
        DATABASE_USERNAME: '', // default username
        DATABASE_PASSWORD: '',
      },
    },
  ],
};