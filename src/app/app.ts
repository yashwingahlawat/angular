import { NgFor, NgIf } from '@angular/common';
import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule,NgIf,NgFor],
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
  users=["yashwin",'hlo','d1w','cwasxdx','cewqadxs','qcwadsx']
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
  // count:WritableSignal<number|string>=signal(20)
  // preCal:Signal<number>=computed(()=>10)
  // constructor(){
  //   effect(()=>console.log(this.count()))
  // }
  // setData(){
    // this.count.set(this.count()+10)
    // this.x+=10
    // if(typeof this.count()=='number')this.count.set('ok')
    // else this.count.set(20)
  // }
  // x:WritableSignal<number>=signal(10)
  // y:WritableSignal<number>=signal(20)
  // z:Signal<number>=computed(()=>this.x()+this.y())
  // updateVal(){
  //   console.log(this.z())
  //   this.x.set(100)
  //   console.log(this.z())
  // }
  // name=""
  // taskList:{id:number,task:string}[]=[]
  // addTask(task:string){
  //   this.taskList.push({id:this.taskList.length,task})
  //   this.name=""
  // }
  // deleteTask(id:number){
  //   this.taskList=this.taskList.filter(val=>val.id!=id)
  // }
  // bgColor='red'
  // fontSize='50px'
  // zome=false
  // fontSizeSmall='50px'
  // fontSizeBig='100px'
  // changeZoom(){
  //   this.zome=!this.zome
  // }
  check=false
  login=true
}
