/*
  Goal: Review code and identify issues.
  Must Support:
  - ES6
 */
import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { ServerMapReferenceNames } from './server-map-reference-names';
import { Injectable } from '@angular/core';

@Component({
  selector: 'see-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})


export class NavBarComponent  {
  constructor() {
    var navList = [
      {value: 'Inventory Maintenance', routerLink: ''},
      {value: 'Batch Maintenance Jobs', routerLink: '/batch-maintenance'},
      {value: 'HPMS', routerLink: '/hpms'},
      {value: 'Traffic Stations', routerLink: '/traffic-stations'},
      {value: 'Data Warehouse', routerLink: '/data-warehouse'},
      {value: 'Administration', routerLink: '/administration'},
    ]

    this.navs = navList;
  }
  selectedNav: String = 'Inventory Maintenance';

  setNav(nav) {
    this.selectedNav = nav.value;
  }

  handleSignOut() {
    console.log('handleSignOut TODO');
  }
}
