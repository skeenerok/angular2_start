import { Component, OnInit } from '@angular/core';

import { IRemind, Remind } from '../../shared/remind.model';
import { RemindService } from '../../shared/remind.service';
import { ReminderFormComponent } from './reminder-form/reminder-form.component';
import { ReminderListComponent } from './reminder-list/reminder-list.component';

@Component({
    selector: 'reminders',
    templateUrl: './app/components/reminder/reminders.component.html',
    styleUrls: ['./app/components/reminder/reminders.component.css'],
    directives: [ReminderFormComponent, ReminderListComponent]
})
export class RemindersComponent implements OnInit {
    reminds: IRemind[];
    remindService: RemindService;
    errorMessage:any;

    constructor(remindService: RemindService) {
        this.reminds = [];
        this.remindService = remindService;
    }

    ngOnInit() {
        this.remindService.getReminds().then(reminds => this.reminds = reminds);
    }

    onRemindCreated(remind: IRemind): void {
        this.remindService.addRemind(remind).then(remind => this.addRemind(remind));
    }

    onRemindToggled(remind: IRemind): void {
        this.remindService.saveRemind(remind).then(remind => {});
    }

    onRemindDeleted(remind: IRemind): void {
        this.remindService.deleteRemind(remind).then(remind => this.deleteRemind(remind));
    }

    private addRemind(remind: IRemind): void {
        this.reminds.push(remind);
    }

    private deleteRemind(remind: IRemind): void {
        let index = this.reminds.indexOf(remind);

        if (index > -1) {
            this.reminds.splice(index, 1);
        }
    }
}