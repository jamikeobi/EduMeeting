export class ContactFormDetails{
    constructor(
        public id: string,
        public fullName: string,
        public email: string,
        public phoneNumber: string,
        public subject: string,
        public message: string,
        public date: string
    ){}
}