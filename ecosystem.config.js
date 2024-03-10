module.exports = {
    apps : [{
        name   : "pbapi",
        script : "pnpm start",
        env_production: {
            NODE_ENV: "production",
            POCKETBASE_URL: "http://10.114.0.3"
        }
    }]
}