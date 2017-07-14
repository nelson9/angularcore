export interface IContact {
    name: string;
    email: string;
    subject: string;
    message: string;
}
export class Contact implements IContact {
    constructor(public name: string, public email: string, public subject: string, public message: string) {
    }
} 