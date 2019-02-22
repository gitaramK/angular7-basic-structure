import { HomeRoutingModule } from './home-routing.module';

describe('HomeRoutingModuleModule', () => {
  let homeRoutingModuleModule: HomeRoutingModule;

  beforeEach(() => {
    homeRoutingModuleModule = new HomeRoutingModule();
  });

  it('should create an instance', () => {
    expect(HomeRoutingModule).toBeTruthy();
  });
});
