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
        onBlur_textarea(eventData:any){} 
      input_textarea(eventData:any){} 
      focus_textarea(eventData:any){} 
    ngOnInit(){
  }
 

   
}
export class UidomainModel{
  textarea: string; }
