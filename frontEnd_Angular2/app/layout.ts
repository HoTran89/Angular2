import {Component} from "angular2/core";
import {RouteConfig, RouterOutlet, RouterLink} from "angular2/router";
import {EmailsComponent} from "./components/emailsComponent";
import {CreateEmailComponent} from "./components/createEmailComponent";
import {Navigate} from "./common/constant";

@Component({
    selector: "default-layout",
    templateUrl: "app/layout.html",
    directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
    { path: "/emails", name: Navigate.Emails, component: EmailsComponent, useAsDefault: true },
    { path: "/createEmail", name: Navigate.CreateEmail, component: CreateEmailComponent },
    { path: "/editEmail/:id", name: Navigate.EditEmail, component: CreateEmailComponent }
])
export class DefaultLayout {
}