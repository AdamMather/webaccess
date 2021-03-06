import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { Global } from './../core/global';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})

export class PortalComponent implements OnInit {

  constructor(
    private router: Router,
    private global: Global) { }

  ngOnInit() {

    this.global.path = this.router.url;
  }

}
