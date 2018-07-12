import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InstallComponent } from './install/install.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { GridComponent } from './grid/grid.component';
import { FlexComponent } from './flex/flex.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'install', component: InstallComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tooltip', component: TooltipComponent },
  { path: 'grid', component: GridComponent },
  { path: 'flex', component: FlexComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: 'notfound' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstallComponent,
    AboutComponent,
    NotfoundComponent,
    NavbarComponent,
    TooltipComponent,
    GridComponent,
    FlexComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
