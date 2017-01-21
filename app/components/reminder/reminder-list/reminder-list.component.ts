import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IRemind } from '../../../shared/remind.model';
import { ReminderItemComponent } from '../reminder-item/reminder-item.component';

@Component({
    selector: 'reminder-list',
    templateUrl: './app/components/reminder/reminder-list/reminder-list.component.html',
    styleUrls: ['./app/components/reminder/reminder-list/reminder-list.component.css'],
    directives: [ReminderItemComponent]
})
export class ReminderListComponent {
    @Input() reminds: IRemind[];
    @Output() toggled: EventEmitter<IRemind>;
    @Output() deleted: EventEmitter<IRemind>;
    
    constructor() {
        this.toggled = new EventEmitter<IRemind>();
        this.deleted = new EventEmitter<IRemind>();
    }

    get sortedReminds(): IRemind[] {
        return this.reminds
            .map(remind => remind)
            .sort((a, b) => {
                if (a.title > b.title) return 1;
                else if (a.title < b.title) return -1;
                else return 0;
            })
            .sort((a, b) => {
                if (a.done && !b.done) return 1;
                else if (!a.done && b.done) return -1;
                else return 0;
            });
    }

    onRemindToggled(remind: IRemind): void {
        this.toggled.emit(remind);
    }

    onRemindDeleted(remind: IRemind): void {
        this.deleted.emit(remind);
    }
}