import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-generic-delete-model',
    templateUrl: './generic-delete-model.component.html',
    styleUrls: ['./generic-delete-model.component.scss'],
})
export class GenericDeleteModelComponent implements OnInit {
    public displayText: string =
        'Are you sure you want to delete this comment ?';
    @Output() public exitEmitter: EventEmitter<void> = new EventEmitter<void>();
    @Output() public deleteCommentEmitter: EventEmitter<void> =
        new EventEmitter<void>();

    constructor() {}

    public ngOnInit(): void {}

    public deleteComment(): void {
        this.deleteCommentEmitter.emit();
    }

    public emitExit(): void {
        this.exitEmitter.emit();
    }
}
