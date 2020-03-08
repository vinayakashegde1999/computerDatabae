const assert = require("assert")
// const REST = require('../../lib/helper/REST');



Feature("Get reRequest to Computer database")

Scenario("Get all the computer database" ,async(I) =>{
   let computers=  await I.sendGetRequest("http://computer-database.herokuapp.com/computers");
   console.log(computers);

});


