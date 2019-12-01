const prefix = process.env.MONGODB_URL_PREFIX;
const db_username = process.env.DB_USERNAME;
const db_host = process.env.DB_HOST;
const db_name = process.env.DB_NAME;
const db_password = process.env.DB_PASSWORD;
const db_permission_setting = process.env.DB_PERMISSION_SETTING;

module.exports = {
    databaseUrl: prefix+db_username+':'+db_password+db_host+db_name+db_permission_setting
};
