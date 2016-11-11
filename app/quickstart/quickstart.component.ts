import { Component } from 'angular2/core';

@Component({
    templateUrl: 'app/quickstart/quickstart.component.html',
    styleUrls: ['app/quickstart/normalize.css'],
    styleUrls: ['app/quickstart/quickstart.component.css']
})
export class QuickstartComponent {
    public pageTitle: string = 'Quickstart';
}