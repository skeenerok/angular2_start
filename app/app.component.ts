import { Component } from '@angular/core';

import { Remind } from './shared/remind.model';
import { RemindService } from './shared/remind.service';
import { RemindersComponent } from './components/reminder/reminders.component';

@Component({
    selector: 'remind-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [RemindersComponent],
    providers: [RemindService]
})
export class AppComponent {
    title: string;

    constructor() {
        this.title = 'List of reminders';
    }
}