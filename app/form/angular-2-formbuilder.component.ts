import {Component} from 'angular2/core';
import {ControlGroup,FormBuilder, Validators } from 'angular2/common';
import {CORE_DIRECTIVES} from 'angular2/common';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
    selector: 'my-app',
    templateUrl: 'app/form/angular-2-formbuilder.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class Angular2FormBuilderExampleComponent {
    carFormGroup: ControlGroup; // this is our Form used to insert a Car

    public pageTitle: string = 'Angular 2 Form';

    constructor(private _builder:FormBuilder) {// in our Constructor we inject the FormBuilder (we create a private variable _builder)
       this.carFormGroup = this._builder.group({ // we create our Form with the FormBuilder (3 elements)
                carName: ['', Validators.required],//we add a validator with Validators
                carColor: ['', Validators.required],
                carDoors: ['', Validators.required],
        });
    }
    get carFormGroupValue(): string { //this method returns the content of our carForm (we use it in our Template)
        return JSON.stringify(this.carFormGroup.value, null, 2);
    }
}