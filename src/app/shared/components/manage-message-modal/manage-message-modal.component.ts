import {
    Component,
    OnInit,
    EventEmitter,
    Output,
    Input,
    OnChanges,
    SimpleChanges,
} from '@angular/core';

@Component({
    selector: 'app-manage-message-modal',
    templateUrl: './manage-message-modal.component.html',
    styleUrls: ['./manage-message-modal.component.scss'],
})
export class ManageMessageModalComponent implements OnInit, OnChanges {
    @Input() public isReciever: boolean;

    @Output() public emitExit = new EventEmitter<boolean>();
    @Output() public emitEdit = new EventEmitter<boolean>();
    @Output() public emitDelete = new EventEmitter<boolean>();
    @Output() public emitForward = new EventEmitter<boolean>();

    constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.isReciever) {
        }
    }

    public ngOnInit(): void {}

    public edit(): void {
        this.emitEdit.next(true);
        this.emitExit.next(false);
    }

    public delete(): void {
        this.emitDelete.next(true);
        this.emitExit.next(false);
    }

    public forward(): void {
        this.emitDelete.next(true);
        this.emitExit.next(false);
    }

    public exit(): void {
        this.emitExit.next(false);
    }
}
