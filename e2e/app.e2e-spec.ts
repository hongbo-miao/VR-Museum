import { VrMuseumPage } from './app.po';

describe('vr-museum App', function() {
  let page: VrMuseumPage;

  beforeEach(() => {
    page = new VrMuseumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
