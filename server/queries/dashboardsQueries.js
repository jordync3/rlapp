const auth = require('../azure-auth/ShelterLuvAuth')


var database_map = (process.env.isProd) ? 'ui_dashboard_mapping' : 'ui_dashboard_mapping'
var database_dashboards = (process.env.isProd) ? 'ui_dashboards' : 'ui_dashboards'

module.exports = {

  getDashboards(responseObj, groups, query){



    var searchQueryMaker = ''

    if(query){
      searchQueryMaker  = `WHERE t1.dashboard like '%`+query+`%'`
    }
    
    

    auth.SHELTERLUV.query
                    (`              
                    SELECT DISTINCT t1.dashboard,t1.title,t1.description
                    FROM ui_dashboards t1
                    `+searchQueryMaker+` 
                    
                  `)
    .then(function (docs) {

        responseObj.json(docs[0])
    })
    .catch(function (err) {
        console.log(err)
    });
  },


  appLog(responseObj, user, type){

    auth.SHELTERLUV.query
                    (`                   
                    INSERT INTO AppLog VALUES  ('`+user+`','`+type+`', GETDATE())
                  `)
    .then(function (docs) {

        responseObj.sendStatus(200)
    })
    .catch(function (err) {
        console.log(err)
    });
  },







}