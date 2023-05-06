module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOSTNAME', 'app-3d271fbb-b6d4-4a45-a545-442090945263-do-user-13945258-0.b.db.ondigitalocean.com'), // Update this line
      port: env.int('DATABASE_PORT', 25060),
      database: env('DATABASE_NAME', 'gcf-ms'),
      user: env('DATABASE_USERNAME', 'gcf-ms'),
      password: env('DATABASE_PASSWORD', 'AVNS_PfMJrbKCQBIBvUfgR0r'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        ca: env('DATABASE_CA'),
      },
    },
    debug: false,
  },
});
