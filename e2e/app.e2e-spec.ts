import { AccordionPage } from './app.po';

describe('accordion App', function() {
  let page: AccordionPage;

  beforeEach(() => {
    page = new AccordionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
