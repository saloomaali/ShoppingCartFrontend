import { Component } from '@angular/core'
import { ApiService } from '../api.service'

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {

        name = ""
        address = ""
        phnNo = ""
        emailId = ""
        password = ""
        username = ""

        constructor(private api:ApiService){}

        readValue=()=>{
          let data:any = {
    
            "name" : this.name,
            "address" : this.address,
            "phnNo" : this.phnNo,
            "emailId" : this.emailId,
            "password" : this.password,
            "username" : this.username
          }

          this.api.addUser(data).subscribe(

            (response:any)=>{

              if (response.length == 0) {
                alert("User Registered Successfully")
                
              } 
            }
          )

        }

}
