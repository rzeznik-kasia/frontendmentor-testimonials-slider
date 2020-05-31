import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';

@NgModule({
  exports:[FooterComponent],
  declarations: [FooterComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}