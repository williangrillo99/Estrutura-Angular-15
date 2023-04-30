import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent, RegisterComponent } from './modules/account';

@NgModule({
    imports: [
    BrowserModule, 
    AppRoutingModule],

    declarations:[
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }