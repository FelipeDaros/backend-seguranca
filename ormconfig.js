module.exports = {
  type: 'postgres',
  url: 'postgres://puenlhol:UbJXkq9NgFGKrr_iTeAiI-SnRw5vgWBk@fanny.db.elephantsql.com/puenlhol',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
