import { Component, Input, OnInit } from '@angular/core';
import { NavLink } from '@ticket-booking/shared/models';

@Component({
  selector: 'bmc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {

  @Input() navLinks: NavLink[] = [];

}
