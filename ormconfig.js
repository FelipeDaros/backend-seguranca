module.exports = {
  type: 'postgres',
  url: 'postgres://fbgqqust:l_uPcK7QN0O5MLSUg6RzfJYOhJUtAheJ@motty.db.elephantsql.com/fbgqqust',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
