interface Login{
    email: string;
    password: string;
    privLevel: number;
}

interface Register{
    firstname: string;
    surname: string;
    phoneNumber: number;
    email: string;
    password: string;
}

export {Login, Register}