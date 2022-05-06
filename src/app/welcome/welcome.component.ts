import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

 welcomeMessage:string ="WelcomeComponent message";

  constructor() { }

  ngOnInit(): void {
  }

}
