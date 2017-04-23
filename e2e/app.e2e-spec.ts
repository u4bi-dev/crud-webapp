import { SnsPage } from './app.po';

describe('sns App', () => {
  let page: SnsPage;

  beforeEach(() => {
    page = new SnsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
