import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-carcd-product',
  templateUrl: './carcd-product.component.html',
  styleUrls: ['./carcd-product.component.css']
})
export class CarcdProductComponent {

  

constructor(private api:ApiService){

  api.fetchProducts().subscribe(
    (response:any)=>{

      this.searchData = response
    }
  )
}

   name = ""
   searchData:any=[]

   readValue=()=>{

    let data:any = {"name" : this.name}

    this.api.searchProduct(data).subscribe(
      (response:any)=>{

        
        if (response.length == 0) {

          alert("No such product found")
          
        } else {

          data = []
          this.searchData = response
          
        }

      })
    
   }

}
