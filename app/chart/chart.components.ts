import {Component, DynamicComponentLoader, Injector} from 'angular2/core';
import {CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES, Control, ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {ChartDirective} from './charts.ts';
import { Component } from 'angular2/core';

@Component({
	selector: 'my-app',
	templateUrl: 'app/home/mytemplate.html',
	directives: [ChartDirective, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class ChartsComponent { 
  public pageTitle: string = 'Charts';
 constructor() {
        
    }
  
}