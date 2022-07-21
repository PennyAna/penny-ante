export class User {
    public _id: string;
    public id: string;
    public name: string;
    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}