import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { Global } from './../core/global';

import { Record } from './../core/record.model';
import { Address } from './../core/address.model';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.css']
})

export class AccessibilityComponent implements OnInit {
 
  public record: Record;
  public records: Array<Record>;

  public address: Address;
  public addresses: Array<Address>;

  public currentRecord: string;
  
  constructor (private router: Router,
		           private global: Global) { }

  ngOnInit() {

    this.global.path = this.router.url;
    this.record = new Record({});
    this.address = new Address({});
  }

  onSubmit(newForm: NgForm): void {
    //
    this.currentRecord = JSON.stringify(this.record);
    console.log(JSON.stringify(this.record));
    //
    newForm.reset();
  }

  getFocus(eleId: string): void {       
    document.getElementById(eleId).focus();
  }

  onChangeTab(eleId: string): void {

    let contactDetail = document.getElementById('contactDetail');
    let contactAddress = document.getElementById('contactAddress');
    let contactProfile = document.getElementById('contactProfile');
    
    contactDetail.classList.remove('active');
    contactAddress.classList.remove('active');
    contactProfile.classList.remove('active');

    let ele = document.getElementById(eleId);
    ele.classList.add('active');
  }
}
