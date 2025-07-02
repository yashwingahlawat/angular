import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'yashwin';
  factorial(val:number):number {
    if(val<=1)return 1;
    return val*this.factorial(val-1)
  }
  clickFun(val:number):any{
    console.log('Calling fact')
    console.log(this.factorial(val),'ok 2nd')
  }
}
