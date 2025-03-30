export class BookSessionFormDetails{
    constructor(
        public id: string,
        public fullName: string,
        public email: string,
        public phoneNumber: string,
        public course: string,
        public sessionDate: string,
        public sessionTime: string,
        public message: string,
        public date: string
    ){}
}