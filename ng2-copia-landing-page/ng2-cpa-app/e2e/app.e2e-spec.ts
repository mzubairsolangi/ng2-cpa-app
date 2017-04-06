import { Ng2CopiaLandingPagePage } from './app.po';

describe('ng2-copia-landing-page App', () => {
  let page: Ng2CopiaLandingPagePage;

  beforeEach(() => {
    page = new Ng2CopiaLandingPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
