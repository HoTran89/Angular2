import {Component} from "angular2/core";
import {EmailService} from "./emailService";
import {Router} from "angular2/router";
import {Navigate} from "../common/constant";

@Component({
    selector: "emails",
    templateUrl: "app/components/emailsComponent.html"
})

export class EmailsComponent {
    private emails: Array<any>;
    private router: Router;
    private emailService: EmailService;

    constructor(emailService: EmailService, router: Router) {
        this.router = router;
        this.emailService = emailService;
        this.getMails();
    }

    public onEditClicked(email: any) {
        this.router.navigate([Navigate.EditEmail, { id: email.id }]);
    }

    public onDeleteClicked(id: string) {
        let self = this;
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