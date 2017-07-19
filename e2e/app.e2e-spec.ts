import { OnlineBankPage } from './app.po';

describe('online-bank App', () => {
  let page: OnlineBankPage;

  beforeEach(() => {
    page = new OnlineBankPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
