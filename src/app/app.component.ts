import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/homepage', icon: 'home' },
    { title: 'Profile', url: '/profile', icon: 'person' },
    { title: 'Navigation', url: '/folder/Navigation', icon: 'navigate' },
    { title: 'Booth List', url: '/booth', icon: 'list' },
    { title: 'History', url: '/history', icon: 'archive' },
  ];

  constructor(public authservice: AuthService, private navCtrl: NavController) { }

  logoutButton() {
    this.authservice.userLogout();

    this.navCtrl.navigateRoot('/login');
  }
}
