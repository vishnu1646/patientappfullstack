import { Component } from '@angular/core';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent {
  patientname=""
  phnum=""
  docname=""

  readValues=()=>{
    let data:any={patientname:this.patientname,phnum:this.phnum,docname:this.docname}

  }

}
