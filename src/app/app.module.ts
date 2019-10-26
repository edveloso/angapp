import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaService } from './pessoa.service';
import { PessoasComponent } from './pessoas/pessoas.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PessoasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule   
  ],
  providers: [HttpClientModule, PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
