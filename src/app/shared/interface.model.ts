

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
    id: number;
    title: string;
    img?: string;
    body: string;
    comment_id: number;
    likes: number;
}

/**
 * Posts
 * comment_id = forign key
 * 
 * 
 * id = primary key 
 */
export interface Comments{
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

// user has own unique id
// user have unique message id that identifies messages for that user

