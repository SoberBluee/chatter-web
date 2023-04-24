/**
 * HAVE LOGGED IN USER SET AS GLOBAL USER
 * ALL USER CONTACTS WILL BE RETRIEVED ON LOGIN,
 * ALL MESSAGES WITH A USER WILL LOAD WHEN THE MESSAGES PAGE IS VISITED
 */

export interface ApiResponse {
    data: any;
    message: string;
    status: number;
}

export interface CurrentUser {
    id: number;
    user_name: string;
    first_name: string;
    sur_name: string;
    email: string;
    phonenumber: string;
    lastOnline: Date;
    status: string;
    email_verified_at: Date;
    post_id: number;
    message_id: number;
    messages: Message[];
    remember_token: string;
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
export interface UserContacts {
    id: number;
    email: string;
    phone_number: string;
    address: {
        house_number: number;
        street_address: string;
        post_code: string;
        country: string;
    };
}

/**
 * USER
 * posts_id forign key
 *
 *
 * id = primary key
 */

export interface Post {
    id: number;
    title?: string;
    img?: string;
    body?: string;
    comments: Comment[];
    commentId: string;
    created_at: Date;
}

export interface CreatePost {
    title: string;
    img?: string | undefined;
    body?: string | undefined;
}
/**
 * Post
 * comment_id = forign key
 *
 *
 * id = primary key
 */
export interface CreateComment {
    id: number;
    comment: string;
}

export interface Comment {
    parentCommentId: number;
    postId: number;
    userId: number;
    comment: string;
    created_at: Date;
    modified_at: Date;
}

export interface MessageResponse {
    id: number;
    sender: boolean;
    user_sender_id: number;
    user_reciever_id: number;
    message: string;
    created_at: Date;
    updated_at: Date;
}

export interface Message extends MessageResponse {
    isSender: boolean;
}

export interface JsonResponse {
    data: any;
    message: string;
    status: number;
}

export interface Error {
    bannerMessage: string;
    errorType: string;
    errorCode: number;
}

export interface AccountUpdate {
    username: string;
    firstname: string;
    surname: string;
    phonenumber: string;
}

export interface EmailUpdate {
    userId: number;
    email: string;
    confirmEmail: string;
}

export interface PasswordUpdate {
    password: string;
    confirmPassword: string;
}

export interface ErrorBannerEvent {
    status: number;
    message: string;
    type: string;
}
