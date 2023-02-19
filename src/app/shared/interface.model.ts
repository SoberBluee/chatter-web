

/**
 * HAVE LOGGED IN USER SET AS GLOBAL USER 
 * ALL USER CONTACTS WILL BE RETRIEVED ON LOGIN,
 * ALL MESSAGES WITH A USER WILL LOAD WHEN THE MESSAGES PAGE IS VISITED
 */

export interface JsonResponse{
    data: any;
    message: string;
    status: number;
}

export interface CurrentUser{
    id: number;
    user_name: string;
    first_name: string;
    sur_name: string;
    email: string;
    phone_number: number;
    lastOnline: Date;
    status: string;
    email_verified_at: Date;
    post_id: number;
    message_id: number;
    messages: Message[];
    friend_list: CurrentUser[];
    created_at: Date;
    updated_at: Date;
}

/**
 * USER
 * contact_id = foreign key
 * 
 * USER CONTACTS
 * id = primary key
 */
export interface UserContacts{
    id: number;
    email: string;
    phone_number: string;
    address:{
        house_number: number;
        street_address: string;
        post_code: string;
        country: string;
    }
}

/**
 * USER
 * posts_id forign key
 * 
 * 
 * id = primary key 
 */

export interface Posts{
    title: string;
    img?: string;
    body: string;
}

/**
 * Posts
 * comment_id = forign key
 * 
 * 
 * id = primary key 
 */
export interface Comment{
    id: number;
    comment: string;
}

export interface MessageResponse{
    id: number;
    sender: boolean;
    user_sender_id: number;
    user_reciever_id: number;
    message: string;
    created_at: Date;
    updated_at: Date;
}

export interface Message extends MessageResponse{
    isSender: boolean;
}

export interface JsonResponse{
    data: any,
    message: string,
    status: number;
}