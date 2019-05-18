import { Component, OnInit } from '@angular/core';

/*
  create username label
  create username text field

  create password label
  create password text field

  create submit button


  concepts needed to learn...

  how to user ng form api

  how to use recommended angular http api
*/
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    
    // build object to send to back end.

    // submit http request to backend

    // clear form

    console.log('form: ', form);

  }
}
