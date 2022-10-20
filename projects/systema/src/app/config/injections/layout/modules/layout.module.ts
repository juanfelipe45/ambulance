import { LAYOUT_TOKEN } from '../tokens/layout.token';
import { iLayout } from "../interfaces/layout.interface";
import { ModuleWithProviders, NgModule } from "@angular/core";

@NgModule()
export class LayoutModule {
  public static forRoot(config: iLayout): ModuleWithProviders<LayoutModule> {
    return {
      ngModule: LayoutModule,
      providers: [
        {provide: LAYOUT_TOKEN, useValue: config}
      ]
    };
  }
}
