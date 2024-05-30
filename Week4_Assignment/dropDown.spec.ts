import{chromium,test} from "@playwright/test"

test(`Drop Down using <Select>`, async({page}) =>{

  
    await page.goto("http://leaftaps.com/opentaps/control/main");

  // await page.locator("#username").fill("demosalesmanager");   


  await page.fill("#username", "demosalesmanager");//Selectors
  await page.fill("#password", "crmsfa")//Selectors
  // Click the Login button
await page.click(".decorativeSubmit");  //Selectors

// Click CRM/SFA
await page.locator("text=CRM/SFA").click();   
// Click Leads
await page.getByRole('link', { name: 'Leads' }).click();


// Click Create Lead
await page.getByRole('link', {name: 'Create Lead'}).click();


// Enter company name
await page.locator("input[class='inputBox']").nth(0).fill("Testleaf"); 

// Enter firstname
await page.locator("input[name='firstName']").last().fill("Jyothi");


//Enter lastname
await page.locator("#createLeadForm_lastName").fill("lek");


//Select the Source dropdown
//Locate the dropdown by value in source field
await page.selectOption("#createLeadForm_dataSourceId", {label:"Direct Mail"});


//Get the values in the dropdown
const dropdown = page.locator("#createLeadForm_dataSourceId>option");//child
const dropdownCount = await dropdown.count();
console.log(`No. of items source: ${dropdownCount}`);


for (let index = 0; index < dropdownCount; index++) {
console.log(await dropdown.nth(index).innerText()); 

}


await page.selectOption("#createLeadForm_marketingCampaignId", {value:"DEMO_MKTG_CAMP"})
//await page.waitForTimeout(3000);

const dropdown1 = page.locator("#createLeadForm_marketingCampaignId>option");//child
const dropdownCount1 = await dropdown1.count();
console.log(`No. of items: ${dropdownCount1}`);

for (let index = 0; index < dropdownCount1; index++) {
  console.log(await dropdown1.nth(index).innerText()); 
  
  }




//Select Country dropdown
await page.selectOption("#createLeadForm_generalCountryGeoId", {label:"India"});
//await page.waitForTimeout(3000);
await page.selectOption("#createLeadForm_industryEnumId", {index:6});
await page.selectOption("#createLeadForm_ownershipEnumId", {index:1})
//Select Currency dropdown
await page.selectOption("#createLeadForm_currencyUomId", {value:"INR"})
//await page.waitForTimeout(3000);

await page.selectOption("#createLeadForm_generalStateProvinceGeoId", {label:"Alabama"})
//await page.waitForTimeout(3000);


const dropdown2 = page.locator("#createLeadForm_generalStateProvinceGeoId>option");//child
const dropdownCount2 = await dropdown2.count();
console.log(`No. of items: state ${dropdownCount2}`);

for (let index = 0; index < dropdownCount2; index++) {
  console.log(await dropdown2.nth(index).innerText()); 
  
  }

//Click Create Lead
await page.locator("[name='submitButton']").click({timeout:15000});


// To check the status
const status = await page.locator("#viewLead_statusId_sp").innerText({timeout:40000});
console.log(`The status is ${status}`);
await page.waitForTimeout(3000);

})