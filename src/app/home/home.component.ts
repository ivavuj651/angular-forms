import {Component} from '@angular/core';
import {Employee} from '../models/employee.model';
import {FormPoster} from '../services/form-poster.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages=[];
  model=new Employee('','',true,'w2','default');
  hasPrimaryLanguageError=false;
  startDate:Date;
  startTime:Date;
  onOffSwitch:any="off";
  radioModel="Left";
  postRating=5;

constructor(private formPoster:FormPoster){
  this.formPoster.getLanguages().subscribe(
    data=>this.languages=data.languages,
    err=>console.log('error',err)
  );
}

firstNameToUpperCase(value:string){
  if(value.length>0)
    this.model.firstName=value.charAt(0).toUpperCase()+value.slice(1);
    else 
     this.model.firstName=value;
  
}

validatePrimaryLanguage(value){
  if(value==='default') this.hasPrimaryLanguageError=true;
  else this.hasPrimaryLanguageError=false;
  //console.log('lang'+this.model.primaryLanguage);
}

submitForm(form:NgForm){
  if(this.hasPrimaryLanguageError) return;



  this.formPoster.postEmployeeForm(this.model).subscribe(
    data=>console.log('succes:',data),
    err=>console.log('error',err)
  );
}

hover(value){
  console.log("hover" +value);
}

leave(value){
  console.log("leave" +value);
}

}

