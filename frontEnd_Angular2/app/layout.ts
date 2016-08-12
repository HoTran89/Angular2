import {Component} from "angular2/core";
import {RouteConfig, RouterOutlet, RouterLink} from "angular2/router";
import {EmailsComponent} from "./components/emailsComponent";
import {CreateEmailComponent} from "./components/createEmailComponent";

@Component({
    selector: "default-layout",
    templateUrl: "app/layout.html",
    directives: [RouterOutlet, RouterLink] 
})
@RouteConfig([
    {path: "/emails", name: "Emails", component: EmailsComponent, useAsDefault: true},
    {path: "/createEmail", name: "Create Email", component: CreateEmailComponent},
    {path: "/editEmail/:id", name: "Edit Email", component: CreateEmailComponent}
])
export class DefaultLayout {
}