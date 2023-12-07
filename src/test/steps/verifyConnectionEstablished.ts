import { Given, Then, When } from "@cucumber/cucumber";


import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import LandingPage from "../../pages/LandingPage";
import LoginPage from "../../pages/LoginPage";


 let loginPage: LoginPage;
 let landingPage: LandingPage;
  Given('Login to application', async function () {
    await fixture.page.goto(process.env.BASEURL);
    loginPage = new LoginPage(fixture.page);
    await loginPage.loginUser(process.env.USERNAME, process.env.PASSWORD);
  });

  When('navigate to Connections page', async function () {
    landingPage= new LandingPage(fixture.page);
    await landingPage.clickOnConnectionTab();
   
  });


  Then('verify  connection exists between source and destination', async function () {
      expect(await landingPage.isSourceVisible()).toBe(true);
      expect(await landingPage.isDestinationVisible()).toBe(true);
  });

