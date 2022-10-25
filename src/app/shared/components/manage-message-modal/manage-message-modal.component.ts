import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-manage-message-modal',
    templateUrl: './manage-message-modal.component.html',
    styleUrls: ['./manage-message-modal.component.css'],
})

export class ManageMessageModalComponent implements OnInit{

    @Output() public emitExit = new EventEmitter<boolean>();
    @Output() public emitEdit = new EventEmitter<boolean>();
    @Output() public emitDelete = new EventEmitter<boolean>();
    @Output() public emitForward = new EventEmitter<boolean>();

    constructor(){}

    public ngOnInit(): void {}

    public edit(): void{ 
        this.emitEdit.next(true); 
        this.emitExit.next(false);
    }

    public delete(): void{
        this.emitDelete.next(true); 
        this.emitExit.next(false);
    }

    public forward(): void{ 
        this.emitDelete.next(true); 
        this.emitExit.next(false);
    }

    public exit(): void{ this.emitExit.next(false); }
}   