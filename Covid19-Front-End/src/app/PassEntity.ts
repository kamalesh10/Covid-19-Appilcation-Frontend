import { Time } from '@angular/common';

export class PassEntity{
    constructor(
       public name: string,
       public phno: number,
       public address: string,
       public reason: string,
       public vhno: number,
       public destination: string
    ){}
}

export class DocEntity{
    constructor(
       public name: string,
       public age: number,
       public address: string,
       public appointmentdatetime: any
    ){}
}