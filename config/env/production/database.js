module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'app-61c55e84-6cf9-4115-bab1-0dbec2befe86-do-user-13945258-0.b.db.ondigitalocean.com'),
      port: env.int('DATABASE_PORT', 25060),
      database: env('DATABASE_NAME', 'gcf-db'),
      user: env('DATABASE_USERNAME', 'gcf-db'),
      password: env('DATABASE_PASSWORD', 'AVNS_R0gI5H0ofyXbsAxrdE2'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        ca: env('DATABASE_CA')
      },
    },
    debug: false,
  },
});
