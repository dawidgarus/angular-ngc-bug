import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
	imports: [
		RouterModule.forRoot([]),
	],
	declarations: [	AppComponent ],
	exports: [ AppComponent ],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
