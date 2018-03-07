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

  public sector: { [key: string]: any } = {
    value: null,
    description: null
  };

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

  onSelectionChange(entry): void {
    // clone the object for immutability
    this.sector = Object.assign({}, this.sector, entry);
  }

}
