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

  public values: string;


  constructor(private router: Router,
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

  onKey(this: any, event: any): void {

    if (event.keyCode == 13) {
      let attId = event.srcElement.getAttribute('id');

      switch (attId) {
        case 'errMsg_fnReq':
        case 'errMsg_fnMinLgt':
        case 'errMsg_fnMaxLgt': {
          this.getFocus('firstName');
          break;
        }
        case 'errMsg_lnReq':
        case 'errMsg_lnMinLgt':
        case 'errMsg_lnMaxLgt': {
          this.getFocus('lastName');
          break;
        }
        case 'errMsg_emReq':
        case 'errMsg_emInv': {
          this.getFocus('emailAddress');
          break;
        }
        case 'errMsg_tlReq':
        case 'errMsg_tlInv': {
          this.getFocus('landline');
          break;
        }
        case 'errMsg_mbReq':
        case 'errMsg_mbInv': {
          this.getFocus('mobile');
          break;
        }
        case 'errMsg_a1Req': {
          this.getFocus('addrLine1');
          break;
        }
        case 'errMsg_a2Req': {
          this.getFocus('addrLine2');
          break;
        }
        case 'errMsg_ctReq': {
          this.getFocus('city');
          break;
        }
        case 'errMsg_cyReq': {
          this.getFocus('county');
          break;
        }
        case 'errMsg_pcReq':
        case 'errMsg_pcInv': {
          this.getFocus('postcode');
          break;
        }
        case 'errMsg_wsReq':
        case 'errMsg_wsInv': {
          this.getFocus('website');
          break;
        }
      }
    }

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
