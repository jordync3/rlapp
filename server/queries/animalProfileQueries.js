const auth = require('../azure-auth/ShelterLuvAuth')


module.exports = {


  getAPAnimals(responseObj, dates){
    auth.SHELTERLUV.query
                    (`                   
                    SELECT  [AdoptionFeeGroupDiscount]
                    ,[AdoptionFeeGroupId]
                    ,[AdoptionFeeGroupName]
                    ,[AdoptionFeeGroupPrice]
                    ,[AdoptionFeeGroupTax]
                    ,[Age]
                    ,[Altered]
                    ,[AssociatedPersonFirstName]
                    ,[AssociatedPersonLastName]
                    ,[AssociatedPersonOutDateUnixTime]
                    ,[AssociatedPersonRelationshipType]
                    ,[Attributes]
                    ,[Attributes0AttributeName]
                    ,[Attributes0InternalID]
                    ,[Attributes0Publish]
                    ,[Attributes1AttributeName]
                    ,[Attributes1InternalID]
                    ,[Attributes1Publish]
                    ,[Attributes10AttributeName]
                    ,[Attributes10InternalID]
                    ,[Attributes10Publish]
                    ,[Attributes11AttributeName]
                    ,[Attributes11InternalID]
                    ,[Attributes11Publish]
                    ,[Attributes12AttributeName]
                    ,[Attributes12InternalID]
                    ,[Attributes12Publish]
                    ,[Attributes13AttributeName]
                    ,[Attributes13InternalID]
                    ,[Attributes13Publish]
                    ,[Attributes14AttributeName]
                    ,[Attributes14InternalID]
                    ,[Attributes14Publish]
                    ,[Attributes15AttributeName]
                    ,[Attributes15InternalID]
                    ,[Attributes15Publish]
                    ,[Attributes16AttributeName]
                    ,[Attributes16InternalID]
                    ,[Attributes16Publish]
                    ,[Attributes2AttributeName]
                    ,[Attributes2InternalID]
                    ,[Attributes2Publish]
                    ,[Attributes3AttributeName]
                    ,[Attributes3InternalID]
                    ,[Attributes3Publish]
                    ,[Attributes4AttributeName]
                    ,[Attributes4InternalID]
                    ,[Attributes4Publish]
                    ,[Attributes5AttributeName]
                    ,[Attributes5InternalID]
                    ,[Attributes5Publish]
                    ,[Attributes6AttributeName]
                    ,[Attributes6InternalID]
                    ,[Attributes6Publish]
                    ,[Attributes7AttributeName]
                    ,[Attributes7InternalID]
                    ,[Attributes7Publish]
                    ,[Attributes8AttributeName]
                    ,[Attributes8InternalID]
                    ,[Attributes8Publish]
                    ,[Attributes9AttributeName]
                    ,[Attributes9InternalID]
                    ,[Attributes9Publish]
                    ,[Breed]
                    ,[Color]
                    ,[CoverPhoto]
                    ,[CurrentLocation]
                    ,[CurrentLocationTier1]
                    ,[CurrentLocationTier2]
                    ,[CurrentLocationTier3]
                    ,[CurrentLocationTier4]
                    ,[CurrentWeightPounds]
                    ,[DOBUnixTime]
                    ,[Description]
                    ,[ID]
                    ,[InFoster]
                    ,[InternalID]
                    ,[LastIntakeUnixTime]
                    ,[LastUpdatedUnixTime]
                    ,[LitterGroupId]
                    ,[Microchips]
                    ,[Microchips0Id]
                    ,[Microchips0ImplantUnixTime]
                    ,[Microchips0Issuer]
                    ,[Microchips1Id]
                    ,[Microchips1ImplantUnixTime]
                    ,[Microchips1Issuer]
                    ,[Microchips2Id]
                    ,[Microchips2ImplantUnixTime]
                    ,[Microchips2Issuer]
                    ,[Microchips3Id]
                    ,[Microchips3ImplantUnixTime]
                    ,[Microchips3Issuer]
                    ,[Name]
                    ,[Pattern]
                    ,[Photos]
                    ,CASE WHEN Photos0 = '' THEN 'https://www.shelterluv.com/sites/default/files/animal_pics/1224/2021/09/16/08/20210916080016.png' ELSE Photos0 END as Photos0
                    ,[Photos1]
                    ,[Photos2]
                    ,[Photos3]
                    ,[Photos4]
                    ,[Photos5]
                    ,[Photos6]
                    ,[Photos7]
                    ,[Photos8]
                    ,[PreviousIds]
                    ,[PreviousIds0IdValue]
                    ,[PreviousIds0IssuingShelter]
                    ,[PreviousIds0Type]
                    ,[PreviousIds1IdValue]
                    ,[PreviousIds1IssuingShelter]
                    ,[PreviousIds1Type]
                    ,[PreviousIds2IdValue]
                    ,[PreviousIds2IssuingShelter]
                    ,[PreviousIds2Type]
                    ,[PreviousIds3IdValue]
                    ,[PreviousIds3IssuingShelter]
                    ,[PreviousIds3Type]
                    ,[Sex]
                    ,[Size]
                    ,[Status]
                    ,[Type]
                    ,[Videos]
                    ,[Videos0EmbedUrl]
                    ,[Videos0ThumbUrl]
                    ,[Videos0VideoId]
                    ,[Videos0YoutubeUrl]
                    ,[Videos1EmbedUrl]
                    ,[Videos1ThumbUrl]
                    ,[Videos1VideoId]
                    ,[Videos1YoutubeUrl]
                    from AnimalData where  status in (
                      'Available'
                      ,'Available - In Treatment'
                      ,'Behavior'
                      --,'Custody Confirmation'
                      --,'Deceased'
                      ,'Emergency Board'
                      ,'Evidence--Municipal Police'
                      ,'Foster -  Available'
                      ,'Foster - Behavior Hold'
                      ,'Foster - Confiscate'
                      ,'Foster - Hold Notify'
                      ,'Foster - Medical Hold'
                      ,'Foster - Permanent'
                      ,'Foster - To Adopt'
                      ,'Foster - WUO'
                      ,'Foster--Emergency Board'
                      ,'Foster--Hospice'
                      ,'Foster-Evidence Hold'
                      --,'Healthy In Home'
                      ,'Hold - Bite Q'
                      ,'Hold - Confiscate'
                      ,'Hold - Notify'
                      ,'Hold - Possible Adopt'
                      ,'Medical'
                      ,'New Intake'
                      --,null
                      --,'Released to Colony / Wild'
                      --,'Service Out'
                      --,'Transferred Out'
                      --,'Transferred Out -- Pending Acceptance'
                      )
                      ORDER BY Name ASC
                                            
                  `)
    .then(function (docs) {
      

        responseObj.json(docs[0])
    })
    .catch(function (err) {
        console.log(err)
    });
  },



  
  getAPNotes(responseObj, id){
    auth.SHELTERLUV.query
                    (`                   
                    SELECT [Attributes0AttributeName] as Attributes0
                    ,[Attributes1AttributeName] as Attributes1
                    ,[Attributes2AttributeName] as Attributes2
                    ,[Attributes3AttributeName] as Attributes3
                    ,[Attributes4AttributeName] as Attributes4
                    ,[Attributes5AttributeName] as Attributes5
                    ,[Attributes6AttributeName] as Attributes6
                    ,[Attributes7AttributeName] as Attributes7
                    ,[Attributes8AttributeName] as Attributes8
                    ,[Attributes9AttributeName] as Attributes9
                    ,[Attributes10AttributeName] as Attributes10
                    ,[Attributes11AttributeName] as Attributes11
                    ,[Attributes12AttributeName] as Attributes12
                    ,[Attributes13AttributeName] as Attributes13
                    ,[Attributes14AttributeName] as Attributes14
                    ,[Attributes15AttributeName] as Attributes15
                    ,[Attributes16AttributeName] as Attributes16
                FROM [ShelterLuv].[dbo].[AnimalData]       
                WHERE InternalID = '${id}'       
                  `)
    .then(function (docs) {
      

        responseObj.json(docs[0])
    })
    .catch(function (err) {
        console.log(err)
    });
  },

  getAPEvents(responseObj, id){
    auth.SHELTERLUV.query
                    (`                   
                  
                    SELECT FORMAT(CAST(dbo.fn_ConvertToDateTime([Time]) as date),'MM-dd-yyyy') as Date
                    ,t1.*
					          ,CASE WHEN CONCAT(t3.Firstname,' ',t3.Lastname) = ' ' THEN t4.Name ELSE CONCAT(t3.Firstname,' ',t3.Lastname) end as Owner
                            FROM [ShelterLuv].[dbo].[EventsData] t1
                            INNER JOIN AnimalData t2
                            on AssociatedRecords0Id = t2.InternalID
							              left join PeopleData t3
                            on t1.AssociatedRecords1Id = t3.InternalID
                            left join PartnersData t4
                            on t1.AssociatedRecords1Id = t4.InternalID
                            WHERE t2.InternalID = '${id}'  
                    ORDER by FORMAT(CAST(dbo.fn_ConvertToDateTime([Time]) as date),'MM-dd-yyyy') ASC                       
                  `)
    .then(function (docs) {
      

        responseObj.json(docs[0])
    })
    .catch(function (err) {
        console.log(err)
    });
  },


}