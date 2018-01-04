import { MyDeployAppPage } from './app.po';

describe('my-deploy-app App', function() {
  let page: MyDeployAppPage;

  beforeEach(() => {
    page = new MyDeployAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
