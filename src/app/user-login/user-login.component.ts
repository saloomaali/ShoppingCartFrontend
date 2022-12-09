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

        if(response.status == "success"){

          let userId  = response.userId
          console.log(userId)
          localStorage.setItem("userInformation", userId)
          this.route.navigate(['/cardProduct'])
         
          
        }
        else{
          console.log(response.status)
          alert("Invalid username or password")

          window.location.reload()
          
          
        }
      }
    )


  }

  

}
