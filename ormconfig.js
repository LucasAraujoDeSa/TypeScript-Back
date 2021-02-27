module.exports = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    synchronize: true,
    migrations: [
        "./src/data/migrations/*.ts"
    ],
    entities: [
        "./src/models/entity/*.ts"
    ],
    cli: {
        migrationsDir: "./src/data/migrations"
    }
}