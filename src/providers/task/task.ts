import { Injectable } from '@angular/core';

/*
  Generated class for the TaskProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TaskProvider {

  public tasks = [];

  constructor() {
  }

  public addNewTask(task): void {
    this.tasks.push(task);
  }

}
