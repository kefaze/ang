import { Component, OnInit } from '@angular/core';

import { UnsaveGuard } from '../loginGuard/unsave.guard'

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  saveState: boolean = false

  constructor(private unsaveGuard: UnsaveGuard) { }


  save() {
    this.saveState = true
    this.unsaveGuard.changeSaveState()
  }


  ngOnInit() {
  }

}
