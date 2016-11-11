import {Component} from 'angular2/core';
import {EventListComponent} from './events/event-list.component';
import { EventService } from './events/event.service';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { WelcomeComponent } from './home/welcome.component';
import { ResumeComponent } from './resume/resume.component';
import { QuickstartComponent } from './quickstart/quickstart.component';
import { Angular2FormBuilderExampleComponent } from './form/angular-2-formbuilder.component';
import { Angular2Tabs } from './tabs/tabs-example';
import { Angular2Rating } from './rating/rating-example';
import { EventDetailComponent } from './events/event-detail.component';

@Component({
    selector: 'events-app',
    template: `
    <div>
    <nav class='navbar navbar-default'>
      <div class='container-fluid'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav navbar-nav'>
          <li><a [routerLink]="['Welcome']">Bienvenue</a></li>
          <li><a [routerLink]="['Resume']">CV</a></li>
          <li><a [routerLink]="['Quickstart']">Quickstart</a></li>
          <li><a [routerLink]="['Form']">Form</a></li>
          <li><a [routerLink]="['Tabs']">Tabs</a></li>
          <li><a [routerLink]="['Rating']">Rating</a></li>
          <li><a [routerLink]="['Events']">Organisation List</a></li>
          </ul>
      </div>
      </nav>
      <div class='container'>
      <router-outlet></router-outlet>
    </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [EventService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})

@RouteConfig([
  { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
  { path: '/resume', name: 'Resume', component: ResumeComponent },
  { path: '/quickstart', name: 'Quickstart', component: QuickstartComponent },
  { path: '/form', name: 'Form', component: Angular2FormBuilderExampleComponent },
  { path: '/tabs', name: 'Tabs', component: Angular2Tabs },
  { path: '/rating', name: 'Rating', component: Angular2Rating },
  { path: '/events', name: 'Events', component: EventListComponent },
  { path: '/event/:id', name: 'EventDetail', component: EventDetailComponent },
])

export class AppComponent {
    pageTitle: string = 'Demo Angular2';
}