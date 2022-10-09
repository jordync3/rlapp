const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize('ShelterLuv', 'admin', 'admin', {
  dialect: 'mssql',
  host: 'localhost',
  dialectOptions: {
    options:{
      encrypt:true
    },
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully to Monitoring.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  module.exports = {


  getExampleData(responseObj, date){
    sequelize.query
                    (`
                    SELECT top 1 * FROM AnimalData WHERE Type = 'Dog'
                    
                  `)
    .then(function (docs) {

        responseObj.json(docs[0])
    })
    .catch(function (err) {
        console.log(err)
    });
  },

}