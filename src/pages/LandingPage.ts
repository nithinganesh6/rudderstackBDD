import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class LandingPage {
  private base: PlaywrightWrapper;
  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    connections: "//span[text()='Connections']",
    source: "#sources-list",
    destination: "#destinations-list"
  };


  async clickOnConnectionTab(){
      await this.page.locator(this.Elements.connections).click();
  }

  async isSourceVisible() {
    return await this.page.locator(this.Elements.source).isVisible();
}

  async isDestinationVisible() {
    return await this.page.locator(this.Elements.destination).isVisible();
}

 
}
