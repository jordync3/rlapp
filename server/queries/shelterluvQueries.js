const auth = require('../azure-auth/ShelterLuvAuth')


module.exports = {

  getDailyReportTable(responseObj, dates){
    auth.SHELTERLUV.query
                    (`                   
                    SELECT FORMAT(CAST(dbo.fn_ConvertToDateTime([Time]) as date),'MM-dd-yyyy') as Date
                    ,t2.Name
                    ,case when t2.Type = 'Rabbit, Domestic' then 'Rabbit'
                      else t2.Type
                      end as Species
                    ,t2.Breed
                    ,ROUND(CAST(t2.Age as float)/12,1) as Age
                    ,t2.Sex
                    ,t1.[Type]
                    ,t1.[Subtype]
                    ,case when t1.type = 'Intake.FosterReturn'then 'Returned From Foster'
                        when t1.type = 'Outcome.Foster'then 'Out to Foster'
                        else t2.status
                        end as Status
                    ,t1.[User],
                    CASE WHEN t1.Type in ('Intake.AdoptionReturn','Intake.BornInCare','Intake.FeralWildlife','Intake.OwnerSurrender','Intake.Stray','Intake.Transfer', 'Intake.Service') THEN 'Intake'
                    WHEN t1.Type in ('Outcome.Adoption','Outcome.Euthanasia','Outcome.FeralWildlife','Outcome.ReturnToOwner','Outcome.Transfer','Outcome.UnassistedDeathInCustody') THEN 'Outcome'
                    WHEN t1.Type in ('Outcome.Foster','Intake.FosterReturn') THEN 'Foster'
                    END as OutcomeType,
                    CASE WHEN t1.Type in ('Intake.AdoptionReturn','Intake.BornInCare','Intake.FeralWildlife','Intake.OwnerSurrender','Intake.Stray','Intake.Transfer', 'Intake.Service') THEN t1.type
                    WHEN t1.Type in ('Outcome.Adoption','Outcome.Euthanasia','Outcome.FeralWildlife','Outcome.ReturnToOwner','Outcome.Transfer','Outcome.UnassistedDeathInCustody', 'Outcome.Service') THEN t1.type
                    WHEN t1.Type in ('Outcome.Foster','Intake.FosterReturn') THEN t2.Status
                    END as Outcome
                            FROM [ShelterLuv].[dbo].[EventsData] t1
                            INNER JOIN AnimalData t2
                            on AssociatedRecords0Id = t2.InternalID
                            WHERE CONVERT(date, dbo.fn_ConvertToDateTime([Time]) , 112) >= DATEADD(m,-1,CONVERT(date,GETDATE(),112))
                    AND CONVERT(date, dbo.fn_ConvertToDateTime([Time]) , 112) <= DATEADD(d,-1,CONVERT(date,GETDATE(),112))
                    ORDER by FORMAT(CAST(dbo.fn_ConvertToDateTime([Time]) as date),'MM-dd-yyyy'), name, species ASC
                  `)
    .then(function (docs) {
      

        responseObj.json(docs[0])
    })
    .catch(function (err) {
        console.log(err)
    });
  },

  getDailyReportBarChart(responseObj, dates){
    auth.SHELTERLUV.query
                    (`                   
                    SELECT FORMAT(CAST(dbo.fn_ConvertToDateTime([Time]) as date),'MM-dd-yyyy') as Date
                    ,SUM(case when t2.Type = 'Rabbit, Domestic' then  1 ELSE 0 END ) as 'Rabbit'
                    ,SUM(case when t2.Type = 'Cat' then  1 ELSE 0 END ) as 'Cat'
                    ,SUM(case when t2.Type = 'Dog' then  1 ELSE 0 END ) as 'Dog'
                  FROM [ShelterLuv].[dbo].[EventsData] t1
                  INNER JOIN AnimalData t2 
                  on AssociatedRecords0Id = t2.InternalID
                  WHERE CONVERT(date, dbo.fn_ConvertToDateTime([Time]) , 112) >= '`+dates[0]+`'
                  AND CONVERT(date, dbo.fn_ConvertToDateTime([Time]) , 112) <= '`+dates[1]+`'
                  group by FORMAT(CAST(dbo.fn_ConvertToDateTime([Time]) as date),'MM-dd-yyyy')
                  ORDER by FORMAT(CAST(dbo.fn_ConvertToDateTime([Time]) as date),'MM-dd-yyyy') DESC
                  `)
    .then(function (docs) {
      

        responseObj.json(docs[0])
    })
    .catch(function (err) {
        console.log(err)
    });
  },


}