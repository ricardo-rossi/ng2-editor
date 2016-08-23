import { Ng2EditorPage } from './app.po';

describe('ng2-editor App', function() {
  let page: Ng2EditorPage;

  beforeEach(() => {
    page = new Ng2EditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
