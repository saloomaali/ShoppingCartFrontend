import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  username = ""
  password = ""

  
  constructor(private route:Router){}
  


  readValue=()=>{
    let data:any = {"username":this.username,"password":this.password}

    console.log(data)
    
    

    if (this.username == "admin" && this.password == "1234") {

      this.route.navigate(['/add'])
      

      
    } else {

      alert("Invalid Username or Password")
      
    }
  }
}
