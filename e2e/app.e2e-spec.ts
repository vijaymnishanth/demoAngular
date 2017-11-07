import { AngularHeroProjectPage } from './app.po';

describe('angular-hero-project App', function() {
  let page: AngularHeroProjectPage;

  beforeEach(() => {
    page = new AngularHeroProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
