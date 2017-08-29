import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TaskProvider } from './../../providers/task/task';

/**
 * Generated class for the CreateTaskPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-task',
  templateUrl: 'create-task.html',
})
export class CreateTaskPage {

  public newTask = { title: '', priority: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams, public taskProvider: TaskProvider) {
  }

  public createTask(): void {
    if (this.newTask.title && this.newTask.priority) {
      this.taskProvider.addNewTask(this.newTask);
      this.navCtrl.pop();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateTaskPage');
  }

}
