interface Login{
    email: string;
    password: string;
    privLevel: number;
}

interface Register{
    firstname: string;
    surname: string;
    phoneNumber: string;
    email: string;
    password: string;
}

interface UpdatedUser{
    firstname?: string;
    surname?: string;
    phoneNumber?:  number;
    email?: string;
    password?: string;
}

export {Login, Register, UpdatedUser}