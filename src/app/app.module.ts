import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieApiServiceService } from './service/movie-api-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { LoginComponent } from './pages/login/login.component';


function InitKeycloakService(keycloak: KeycloakService) {

  return async () =>
    await keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'MyRealm',
        clientId: 'cloneflixclient',
      },
      initOptions: {
        onLoad: 'login-required'
        , "checkLoginIframe": false
      },
    });
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    KeycloakAngularModule
  ],
  providers: [MovieApiServiceService
    , 
     {
      provide: APP_INITIALIZER,
      useFactory: InitKeycloakService,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
