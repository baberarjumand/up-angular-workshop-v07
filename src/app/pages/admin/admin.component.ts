import { UserAuthService } from './../../services/user-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(public userAuthService: UserAuthService) {}

  ngOnInit(): void {}
}
