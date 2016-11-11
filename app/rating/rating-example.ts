import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Rating} from './rating.component';


/*Angular 2 Rating - Stars Example*/
@Component({
    selector: 'my-app',
    template: `
                <div class="panel panel-primary">
    <div class="panel-heading">
        {{pageTitle}}
    </div>
                <div class="background-image" style="background-image : url('http://germini.info/wp-content/uploads/2015/12/Code-Javascript-at-Free-Code-Camp-jQuery.jpg')">
            </div>
                    <h4 style="color: #00b0e8">Angular 2 Rating - Stars Example</h4>
                    <h5>Current Rate: <b>{{currentRate}}</b></h5>
                    <rating [(ngModel)]="currentRate" [max]="maxRateValue" [readonly]="isRatingReadonly"
                            (onHover)="overStarDoSomething($event)" (onLeave)="resetRatingStar($event)"
                            [titles]="['one','two','three']"></rating>
                    <span class="label"
                          [ngClass]="{'label-warning': ratingPercent<30, 'label-info': ratingPercent>=30 && ratingPercent<70, 'label-success': ratingPercent>=70}"
                          [ngStyle]="{display: (overStar && !isRatingReadonly) ? 'inline' : 'none'}">{{ratingPercent}}%</span>
                    <hr/>

                    <h4 style="color: #00b0e8">Angular 2 Rating With <b>Custom icons</b></h4>
                    <h5><b>(<i>Current Rate:</i> {{rateValueExample1}})</b></h5>
                    <div>
                      <rating [(ngModel)]="rateValueExample1" max="10" stateOn="glyphicon-heart"
                              stateOff="glyphicon-ok-circle"></rating>
                    </div>
                    <hr/>

                    <h4 style="color: #00b0e8">Angular 2 Rating With <b>Custom icons</b></h4>
                    <h5><b>(<i>Current Rate:</i> {{rateValueExample2}})</b></h5>
                    <div>
                      <rating [(ngModel)]="rateValueExample2" [ratingStates]="ratingStatesItems"></rating>
                    </div>
                    </div>

                `,
    directives: [Rating, FORM_DIRECTIVES, CORE_DIRECTIVES],
})
export class Angular2Rating {
    public pageTitle: string = 'Angular 2 Rating';
    //value used with custom icons demo above
    private rateValueExample1:number = 5;
    //value used with custom icons demo above
    private rateValueExample2:number = 2;
    //the maximum allowed value
    private maxRateValue:number = 10;
    //contains the current value entred by the user
    private currentRate:number = 7;
    //make the rating component readonly
    private isRatingReadonly:boolean = false;
    private overStar:number;
    private ratingPercent:number;

    private ratingStatesItems:any = [
        {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
        {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-star-empty'},
        {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
        {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
        {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'}
    ];
    //reset the rating value to null
    private resetRatingStar() {
        this.overStar = null;
    }
    //call this method when over a star
    private overStarDoSomething(value:number):void {
        this.overStar = value;
        this.ratingPercent = 100 * (value / this.maxRateValue);
    };
}