export interface IRemind {
    id?: number;
    title: string;
    remindDate: string;
    done: boolean;
    getTitle(): string;
    getDate(): string;
    isDone(): boolean;
}

export class Remind implements IRemind {
    id: number;
    title: string;
    remindDate: string;
    done: boolean;

    public getTitle(): string{
        return this.title;
    }

    public getDate(): string{
        return new Date(Number(this.remindDate)).toDateString();
    }

    public isDone(): boolean{
        return this.done;
    }
    constructor( title: string, date: string, done:boolean,id?:number) {
        this.id = id;
        this.title = title;
        this.remindDate = date;
        this.done = done;
    }
}