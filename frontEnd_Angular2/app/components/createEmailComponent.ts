import {Component} from "angular2/core";
import {EmailService} from "./emailService";
import {Router} from "angular2/router";
import {RouteParams} from "angular2/router";
import {Navigate} from "../common/constant";
import {EventManager} from "./eventManager";
import {EmailValidationResponse} from "../common/constant";

@Component({
    selector: "create-email",
    templateUrl: "app/components/createEmailComponent.html"
})

export class CreateEmailComponent {
    private emailService: EmailService;
    private router: Router;
    private emailId: string;
    private errors: Array<any> = [];
    public email = {};
    private isEdit = false;

    constructor(emailService: EmailService, router: Router, routParams: RouteParams) {
        let self = this;
        self.emailService = emailService;
        self.router = router;
        self.emailId = routParams.get("id");
        if (self.emailId) {
            self.isEdit = true;
            EventManager.getInstance().subcribe(EmailValidationResponse.getEmail, function (errors: any) { self.onErrors(errors) });
            emailService.getEmail(self.emailId).then((response: any) => self.email = response);
        }
    }

    private onErrors(errors: any) {
        console.log(`inside errors function ${errors}`);
        for (let i = 0; i < errors.length; i++) {
            this.errors.push(errors[i]);
        }
    }

    public submitEmailClicked() {
        let self = this;
        EventManager.getInstance().subcribe(EmailValidationResponse.emailCreateOrUpdate, function (errors: any) { self.onErrors(errors) });
        if (self.isEdit) {
            self.emailService.updateEmail(self.emailId, self.email).then((response: any) => self.navigateToEmail(response));
        }
        else {
            self.emailService.createEmail(self.email).then((response: any) => self.navigateToEmail(response));
        }
        return false;
    }

    private navigateToEmail(isNavigate: boolean) {
        if (isNavigate)
            this.router.navigate([Navigate.Emails])
    }
}