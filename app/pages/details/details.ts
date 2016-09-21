import { NavController, NavParams } from 'ionic-angular';
import { GitHubService } from './../../services/github';
import { Component } from '@angular/core';

/*
  Generated class for the DetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/details/details.html',
  providers: [GitHubService]
})
export class DetailsPage {
  public readme = '';
  public repo;

  constructor(private navCtrl: NavController, private github:GitHubService, private navParams: NavParams) {
    this.repo = navParams.get('repo');
    this.github.getDetails(this.repo).subscribe(
      data => this.readme = data.text(),
      err => {
        if(err.status == 404){
          this.readme = 'No readme for this repo';
        } else {
          console.log(err);
        }
      },
      () => console.log("Done!")
    );
  }
}
