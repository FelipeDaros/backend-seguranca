module.exports = {
  type: 'sqlite',
  database: './src/db.sql',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
