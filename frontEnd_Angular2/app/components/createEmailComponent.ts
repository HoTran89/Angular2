import {Component} from "angular2/core";
import {EmailService} from "./emailService";
import {Router} from "angular2/router";
import {RouteParams} from "angular2/router"
import {Navigate} from "../common/constant"

@Component({
    selector: "create-email",
    templateUrl: "app/components/createEmailComponent.html"
})

export class CreateEmailComponent {
    private emailService: EmailService;
    private router: Router;
    private emailId: string;
    public email = {};
    private isEdit = false;

    constructor(emailService: EmailService, router: Router, routParams: RouteParams) {
        let self = this;
        self.emailService = emailService;
        self.router = router;
        self.emailId = routParams.get("id");
        if (self.emailId) {
            self.isEdit = true;
            emailService.getEmail(self.emailId).then((response: any) => self.email = response);
        }
    }

    public submitEmailClicked() {
        let self = this;
        if (self.isEdit) {
            self.emailService.updateEmail(self.emailId, self.email).then(() => self.navigateToEmail());
        }
        else {
            self.emailService.createEmail(self.email).then(() => self.navigateToEmail());
        }
        return false;
    }

    private navigateToEmail(){
        this.router.navigate([Navigate.Emails])
    }
}