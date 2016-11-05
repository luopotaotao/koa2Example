/**
 * Created by tt on 2016/11/5.
 */
const Sequelize = require('sequelize');


var config = {
    database: 'test', // 使用哪个数据库
    username: 'root', // 用户名
    password: 'admin', // 口令
    host: 'localhost', // 主机名
    port: 3306 // 端口号，MySQL默认3306
};
var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

var Pet = sequelize.define('pet', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(10),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    version: Sequelize.BIGINT
});

Pet.sync({force:true});  //TODO remove this if init db is not needed


module.exports = {
    Pet:Pet
}