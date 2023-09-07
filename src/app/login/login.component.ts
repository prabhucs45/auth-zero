import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document,public auth: AuthService) { }

  ngOnInit(): void {
  }

}
