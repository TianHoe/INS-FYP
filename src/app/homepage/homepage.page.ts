import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {
  j:any[] = [];
  auth = getAuth();

  constructor(private actionSheet: ActionSheetController, 
    private dataService: DataService,
    private alertCtrl: AlertController) { }

  openJudge(j: any) { }

  // async addJudge() {
  //   const alert = await this.alertCtrl.create({
  //     header: 'Add Judge',
  //     inputs: [
  //       {
  //         name: 'name',
  //         placeholder: 'John Doe',
  //         type: 'text'
  //       },
  //       {
  //         name: 'contactnum',
  //         placeholder: '01123456789',
  //         type: 'text'
  //       },
  //       {
  //         name: 'email',
  //         placeholder: 'john.doe@gmail.com',
  //         type: 'text'
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel'
  //       },
  //       {
  //         text: 'Add',
  //         handler: (res) => {
  //           this.dataService.addJudge({name: res.name, email: res.email, contactnum: res.contactnum});
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }

  async presentActionSheet() {
    const actionSheet = await this.actionSheet.create({
      header: 'Test Action Sheet',
      mode: 'md',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'trash',
          handler: () => {
            console.log('You clicked me!');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  ngOnInit() {
  }

}
