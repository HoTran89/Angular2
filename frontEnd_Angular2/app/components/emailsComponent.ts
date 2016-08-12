import {Component} from "angular2/core";
import {EmailService} from "./emailService";
import {Router} from "angular2/router";

@Component({
    selector: "emails",
    templateUrl: "app/components/emailsComponent.html"
})

export class EmailsComponent {
    public emails: Array<any>;
    public router: Router;
    public emailService: EmailService;

    constructor(emailService: EmailService, router: Router) {
        this.router = router;
        this.emailService = emailService;
        this.getMails();
    }

    public onEditClicked(email: any) {
        this.router.navigate(["Edit Email", { id: email.id }]);
    }

    public onDeleteClicked(id: string) {
        let self = this;
        this.emailService.deleteEmail(id).then(function () {
            self.getMails();
        });
    }

    private getMails() {
        let self = this;
        this.emailService.getEmails().then(function (response: any) {
            self.emails = response;
        })
    }
}