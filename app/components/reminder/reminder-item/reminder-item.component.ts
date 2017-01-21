import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Remind } from '../../../shared/remind.model';

@Component({
    selector: 'reminder-item',
    templateUrl: './app/components/reminder/reminder-item/reminder-item.component.html',
    styleUrls: ['./app/components/reminder/reminder-item/reminder-item.component.css']
})
export class ReminderItemComponent {
    @Input() remind: Remind;
    @Output() toggled: EventEmitter<Remind>;
    @Output() deleted: EventEmitter<Remind>;

    constructor() {
        this.toggled = new EventEmitter<Remind>();
        this.deleted = new EventEmitter<Remind>();
    }

    toggle() {
        this.remind.done = !this.remind.done;
        this.toggled.emit(this.remind);
    }

    delete() {
        this.deleted.emit(this.remind);
    }

    getDate() {
        return new Date(Number(this.remind.remindDate)).toDateString();
    }
}