module.exports = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    synchronize: true,
    migrations: [
        "./dist/data/migrations/*.js"
    ],
    entities: [
        "./dist/models/entity/*.js"
    ],
    cli: {
        migrationsDir: "./src/data/migrations"
    },
    extra: {
        ssl: true
    }
}