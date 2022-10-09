const Sequelize = require('sequelize');




       
      async function main() {

        // dbConnect('SA', 'Player9.1')
        dbConnect('admin', 'admin')

      }
       
      main();
      
    
    
    function dbConnect(username,password){

      const SHELTERLUV = new Sequelize('Duelbits', username, password, {
        dialect: 'mssql',
        host: 'localhost',
        dialectOptions: {
          options:{
            encrypt:true,
            trustServerCertificate: true
          },
        },
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
      
      });
      
      SHELTERLUV
        .authenticate()
        .then(() => {
          console.log('Connection has been established successfully to Lynx.');
        })
        .catch(err => {
          console.error('Unable to connect to the database:', err);
        });
      

        module.exports.SHELTERLUV = SHELTERLUV
   }





