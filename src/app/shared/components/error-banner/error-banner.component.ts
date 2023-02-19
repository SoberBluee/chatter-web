import { Component, Input, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'app-error-banner',
    templateUrl: './error-banner.component.html',
    styleUrls: ['./error-banner.component.css']
})

export class ErrorBannerComponent implements OnInit {
    @Input() error_message: string; 
    @Input() error_type: string;
    @Input() error_status: number;
    @Input() widthPercentage: number;
    @Output() emitClose = new EventEmitter();

    constructor(){}

    public ngOnInit(): void {
        console.log('width: ', this.widthPercentage);
        setTimeout(()=> this.emitClose.emit(), 5000); //banner closes after a certain time
    }

    public get error_color(): string{
        //sets the background color depending on the type of error
        switch(this.error_type){
            case "WARNING":
                return 'rgb(252, 149, 53)';
            case "ERROR":
                return 'rgb(232, 60, 60)';
        }
        return 'white';
    }
}