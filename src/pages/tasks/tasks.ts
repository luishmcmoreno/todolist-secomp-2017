import { TaskProvider } from './../../providers/task/task';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TasksPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

  public tasks;

  constructor(public navCtrl: NavController, public navParams: NavParams, public taskProvider: TaskProvider) {
  }

  ionViewDidLoad() {
    this.tasks = this.taskProvider.tasks;
  }
}
