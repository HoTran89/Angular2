import {Component} from "angular2/core";
import {EmailService} from "./emailService";
import {Router} from "angular2/router";
import {Navigate} from "../common/constant";
import {EventManager} from "./eventManager";
import {EmailValidationResponse} from "../common/constant";

@Component({
    selector: "emails",
    templateUrl: "app/components/emailsComponent.html"
})

export class EmailsComponent {
    private emails: Array<any>;
    private errors: Array<any> = [];
    private router: Router;
    private emailService: EmailService;

    constructor(emailService: EmailService, router: Router) {
        let self = this;
        self.router = router;
        self.emailService = emailService;
        self.getMails();
    }

    private onErrors(errors: any) {
        console.log(`inside errors function ${errors}`);
        for (let i = 0; i < errors.length; i++) {
            this.errors.push(errors[i]);
        }
    }

    public onEditClicked(email: any) {
        this.router.navigate([Navigate.EditEmail, { id: email.id }]);
    }

    public onDeleteClicked(id: string) {
        let self = this;
        EventManager.getInstance().subcribe(EmailValidationResponse.emailDelete, function (errors: any) { self.onErrors(errors) });
        self.emailService.deleteEmail(id).then(function () {
            self.getMails();
        });
    }

    private getMails() {
        let self = this;
        self.emailService.getEmails().then(function (response: any) {
            self.emails = response;
        })
    }
}