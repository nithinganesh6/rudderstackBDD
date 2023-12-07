import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class LoginPage {
  private base: PlaywrightWrapper;
  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    userInput: "#text-input-email",
    passwordInput: "#text-input-password",
    loginBtn: "//button/span[text()='Log in']"
  };

  async enterUserName(user: string) {
    await this.page.locator(this.Elements.userInput).fill(user);
  }
  async enterPassword(Password: string) {
    await this.page.locator(this.Elements.passwordInput).fill(Password);
  }

  async clickLoginButton() {
    await this.page.locator(this.Elements.loginBtn).click();
  }

  async loginUser(user: string, password: string) {
    await this.enterUserName(user);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }
}
