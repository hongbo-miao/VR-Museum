import { browser, element, by } from 'protractor';

export class VrMuseumPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('vm-app h1')).getText();
  }
}
