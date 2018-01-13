module.exports = {
    api_name: 'PitstopKL',
    api_version: '1.0.0',
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'dev',
    base_url: process.env.BASE_URL || 'http://localhost:3000',
    database: {
        uri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pitstop'
    }
};