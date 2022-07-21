export class Location {
    public _id: string;
    public id: string;
    public code: string;
    public latitude: number;
    public longitude: number;
    public name: string;
    constructor(id: string, code: string, latitude: number, longitude: number, name: string) {
        this.id = id;
        this.code = code;
        this.latitude = latitude;
        this.longitude = longitude;
        this.name = name;
    }
    }