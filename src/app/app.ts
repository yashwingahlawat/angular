import { Component, effect, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected title = 'yashwin';
  // factorial(val:number):number {
  //   if(val<=1)return 1;
  //   return val*this.factorial(val-1)
  // }
  // clickFun(val:number):any{
  //   console.log('Calling fact')
  //   console.log(this.factorial(val),'ok 2nd')
  // }
  // count=0
  // handleIncrement(){
  //   this.count++
  // }
  // handleDecrement(){
  //   this.count--
  // }
  // handleReset(){
  //   this.count=0
  // }
  // handleCounter(val:string){
  //   if(val=='sub' && this.count>0)this.count--;
  //   else if(val=='add')this.count++;
  //   else this.count=0;
  // }
  // handleEvent(event:Event){
  //   console.log(`event called ${event.type}`)
  //   // console.log((event.target as Element).classList)
  //   console.log((event.target as HTMLInputElement).value)
  // }
  // name=""
  // displayName=""
  // handleChange(event:Event){
  //   this.name=(event.target as HTMLInputElement).value
  // }
  // x=true
  // handleHide(){
  //   this.x=!this.x
  // }
  // handleClick(){
  //   this.displayName=this.name
  // }
  // handleSetName(){
  //   this.name='Yashwin'
  // }
  // email=""
  // handleEmail(val:string){
  //   this.email=val  
  // }
  // users=["yashwin",'hlo','d1w']
  // students=[
  //   {
  //     name:'yashwin',
  //     age:21
  //   },
  //   {
  //     name:'3ecw',
  //     age:61
  //   },
  //   {
  //     name:'yashcaxwin',
  //     age:16
  //   },
  //   {
  //     name:'acw',
  //     age:40
  //   }
  // ]
  // studentName(val:string){
  //   console.log(val);
  // }
  // handleEmailChange(event:Event)
  count=signal(20)
  x=10
  constructor(){
    effect(()=>console.log(this.count()))
  }
  setData(){
    this.count.set(this.count()+10)
    this.x+=10
  }
}
