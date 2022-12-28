import { Component,OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:any []=[]
  user:any={}
  color:any
  
 
 
 
 
 constructor(private api:ApiService){}

  ngOnInit():void{
    this.getUsers()
   
  }
 
 getUsers(){
  this.api.AllUsers().subscribe((data:any)=>{
   
    
this.users=data.users

this.getRandomUser()
 
})
 }

 getRandomUser(){
  var index=Math.floor(Math.random()*(this.users.length)+1)
  this.user=this.users[index]
  console.log(this.user);
  
   
  document.body.style.backgroundColor = this.user.eyeColor ;
  
  
 }



}
