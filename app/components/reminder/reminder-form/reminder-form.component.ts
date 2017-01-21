import { Component, Output, EventEmitter } from '@angular/core';

import { Remind } from '../../../shared/remind.model';

@Component({
    selector: 'reminder-form',
    templateUrl: './app/components/reminder/reminder-form/reminder-form.component.html',
    styleUrls: ['./app/components/reminder/reminder-form/reminder-form.component.css']
})
export class ReminderFormComponent {
    @Output() created: EventEmitter<Remind>;

    constructor() {
        this.created = new EventEmitter<Remind>();
    }

    create(title: string) {
        if (title) {
            let remind = new Remind(title, String(new Date().getTime()), false);
            this.created.emit(remind);
        }
    }
}