import { Component, Input, OnInit, Output, EventEmitter, Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})

@Component({
    selector: 'app-error-banner',
    templateUrl: './error-banner.component.html',
    styleUrls: ['./error-banner.component.scss']
})

export class ErrorBannerComponent implements OnInit {
    @Input() error_message: string; 
    @Input() error_type: string;
    @Input() error_status: number;
    @Input() widthPercentage: number;
    @Output() emitClose = new EventEmitter();

    public border_color: string;

    constructor(){}

    public ngOnInit(): void {
        this.error_color();
        setTimeout(()=> this.emitClose.emit(), 5000); //banner closes after a certain time
    }

    public emitSuccessMessage(message: string, status: number): void{ 
        /*TODO */
    }

    public emitErrorMessage(message: string, status: number): void{
        /*TODO */
    }

    public emitWarningMessage(message: string, status: number): void{
        /*TODO */
    }

    public error_color(): void{
        //sets the background color depending on the type of error
        switch(this.error_type){
            case "WARNING":
                this.border_color =  '4.5px solid rgb(252, 149, 53)';
                break;
            case "ERROR":
                this.border_color =  '4.5px solid rgb(232, 60, 60)';
                break;
            case "SUCCESS":
                this.border_color =  '4.5px solid green';
                break;
            default:
                this.border_color =  '4.5px solid blue';
                break;
        }
    }
}