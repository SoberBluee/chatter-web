interface Login{
    email: string;
    password: string;
}

interface Register{
    user_name: string;
    firstname: string;
    surname: string;
    phone_number: string;
    email: string;
    password: string;
}


/**
 * don't need
 */
interface UpdatedUser{
    firstname?: string;
    surname?: string;
    phoneNumber?:  number;
    email?: string;
    password?: string;
}

export {Login, Register, UpdatedUser}