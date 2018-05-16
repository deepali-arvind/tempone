/**
 * Created by: MetaMagic
 * Date: 16/05/2018
 * Organization: MetaMagic	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'uidomain',
  templateUrl: 'uidomain.component.html'
})
export class UidomainComponent implements OnInit{
  uidomainModel:UidomainModel;
 
  constructor(private http: HttpClient) {
    this.uidomainModel=new UidomainModel();
       }
          onBlur_firstname(eventData:any){} 
      input_firstname(eventData:any){} 
      focus_firstname(eventData:any){} 
        onBlur_lastname(eventData:any){} 
      input_lastname(eventData:any){} 
      focus_lastname(eventData:any){} 
        onBlur_phonenumber(eventData:any){} 
      input_phonenumber(eventData:any){} 
      focus_phonenumber(eventData:any){} 
        onBlur_email(eventData:any){} 
      input_email(eventData:any){} 
      focus_email(eventData:any){} 
        onBlur_address(eventData:any){} 
      input_address(eventData:any){} 
      focus_address(eventData:any){} 
        onClick_save(eventData:any){} 
    ngOnInit(){
  }
 

   
}
export class UidomainModel{
  firstname: string;  lastname: string;  phonenumber: number;  email: string;  address: string; }
