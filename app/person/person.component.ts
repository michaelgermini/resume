import { Component } from 'angular2/core';

@Component({
    templateUrl: 'app/person/person.component.html',
    styleUrls: ['app/person/person.component.css']
})
export class PersonComponent {
    public pageTitle: string = 'Person';
}