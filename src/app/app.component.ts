import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  
    <h1>This is template property using backtick sign</h1>
    <h1>This is template property using backtick sign</h1>
    <h1>This is template property using backtick sign</h1>
    <h1>This is template property using backtick sign</h1>
    <h1>This is template property using backtick sign</h1>
    <h1>This is template property using backtick sign</h1>

  `,
  styles:['h1{color:red}']
})
export class AppComponent {
  title:string = 'Guys how are you';
  firstName:string = 'SUN';
}

// Main.ts --> AppModule--> AppComponent
