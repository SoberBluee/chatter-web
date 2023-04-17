import { CurrentUser, Message } from '../interface.model';
import { environment } from 'src/environments/environment';
import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

/* RXJS */
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
    public messagesChange = new Subject<Message>(); //emites a new message
    public emitSelectedUser = new Subject<CurrentUser>();
    public routePrefix: string = environment.media_api_url;

    @Output() public emitModalOpen: Subject<boolean>;

    constructor(private http: HttpClient) {}

    /* pass in the user id to get messages from backend */
    public getMessages(sender_id: number, reciever_id: number) {
        const params = new HttpParams()
            .set('senderId', sender_id)
            .set('recieverId', reciever_id);
        return this.http.get(this.routePrefix + 'messages', { params });
    }

    public setMessage(message: any) {
        return this.http.post(
            this.routePrefix + 'messages/set-message',
            message
        );
    }

    public deleteMessage(message_id: number) {
        return this.http.delete(this.routePrefix + 'messages/' + message_id);
    }

    public editMessage(message: Message) {
        return this.http.post(this.routePrefix + 'messages/edit', message);
    }
}
