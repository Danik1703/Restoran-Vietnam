import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformHelper } from  '@natec/mef-dev-platform-connector';
import { HomepageComponent } from './homepage/homepage.component';
//const routes: Routes = [];
const  routes: Routes = PlatformHelper.updatePluginsRoutes([
  {
    path:"",
    children:[
        {
            path:"",
            redirectTo:"test",
            pathMatch:"full",
        },
        {
            path:"test",
            component:  HomepageComponent
        }
    ]
}
]);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
