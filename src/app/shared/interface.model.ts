

/**
 * HAVE LOGGED IN USER SET AS GLOBAL USER 
 * ALL USER CONTACTS WILL BE RETRIEVED ON LOGIN,
 * ALL MESSAGES WITH A USER WILL LOAD WHEN THE MESSAGES PAGE IS VISITED
 */
export interface User{
    id: number;
    messages_id: number;
    contact_id: number;
    posts_id: number;
    username: string;
    firstname: string;
    surname: string;
    _session_token: string;
    _token_expiration: Date;
    addedUsers?: Number[];   
    status: string, 
    lastOnline: Date,
    profile_picture?: string;
    liked_posts: number[];
}

export interface CurrentUesr{
    id: number;
    user_name: string;
    first_name: string;
    sur_name: string;
    email: string;
    phone_number: number;
    email_verified_at: Date;
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

/**
 * 
 * message id above is the primary key of message content
 * one message id can be associated with multiple messages
 */
export interface MessageContent{
    user_message_id: number;
    messages: Message[];
}

export interface Message{
    id: number;
    message: string;
    isSender: boolean;
    timestamp: number;
    sender: string;
    reciever: string; //make sure to add user type to define exact user
}

export interface JsonResponse{
    data: any,
    message: string,
    status: number;
}

// user has own unique id
// user have unique message id that identifies messages for that user

