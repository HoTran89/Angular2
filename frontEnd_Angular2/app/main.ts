import { bootstrap } from "angular2/platform/browser";
import {HTTP_PROVIDERS, Http} from "angular2/http";
import {ROUTER_PROVIDERS} from "angular2/router";
import {provide, enableProdMode} from "angular2/core";
import {DefaultLayout} from "./layout";
import {EmailService} from "./components/emailService";

bootstrap(DefaultLayout, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  EmailService
])
  .catch(err => console.error(err));

