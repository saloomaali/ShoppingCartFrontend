import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  emailId = ""
  password = ""

  constructor(private api:ApiService, private route:Router){}

  readValue=()=>{

    let data:any = {"emailId":this.emailId, "password":this.password}

    this.api.userLogin(data).subscribe(
      (response:any)=>{

        if(response.length == 0){

          alert("Invalid username or password")
          window.location.reload()
          
        }
        else{
          this.route.navigate(['/cardProduct'])
        }
      }
    )


  }

  

}
