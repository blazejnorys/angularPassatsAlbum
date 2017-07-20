import { BnAppPage } from './app.po';

describe('bn-app App', () => {
  let page: BnAppPage;

  beforeEach(() => {
    page = new BnAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
