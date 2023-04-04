const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('test1', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});


let connectDB = async() => {    //async hàm bất đồng bộ cần thời gian để có kết quả trả về 
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectDB;
