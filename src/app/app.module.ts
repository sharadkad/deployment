import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table'
import { SlickCarouselModule } from '../../node_modules/ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsidelogoComponent } from './asidelogo/asidelogo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SliderComponent } from './slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoxsliderComponent } from './boxslider/boxslider.component';
import { LogosliderComponent } from './logoslider/logoslider.component';
import { BoxsliderTwoComponent } from './boxslider-two/boxslider-two.component';
import { TableComponent } from './table/table.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { TournamentComponent } from './tournament/tournament.component';
import { PerformanceComponent } from './performance/performance.component';
import { GameComponent } from './game/game.component';
import { LeagueComponent } from './league/league.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsidelogoComponent,
    DashboardComponent,
    SliderComponent,
    BoxsliderComponent,
    LogosliderComponent,
    BoxsliderTwoComponent,
    TableComponent,
    PlayerDetailsComponent,
    TournamentComponent,
    PerformanceComponent,
    GameComponent,
    LeagueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCarouselModule.forRoot(),
    SlickCarouselModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
