System.register(['angular2/core', 'angular2/common', './rating.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, rating_component_1;
    var Angular2Rating;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (rating_component_1_1) {
                rating_component_1 = rating_component_1_1;
            }],
        execute: function() {
            /*Angular 2 Rating - Stars Example*/
            Angular2Rating = (function () {
                function Angular2Rating() {
                    this.pageTitle = 'Angular 2 Rating';
                    //value used with custom icons demo above
                    this.rateValueExample1 = 5;
                    //value used with custom icons demo above
                    this.rateValueExample2 = 2;
                    //the maximum allowed value
                    this.maxRateValue = 10;
                    //contains the current value entred by the user
                    this.currentRate = 7;
                    //make the rating component readonly
                    this.isRatingReadonly = false;
                    this.ratingStatesItems = [
                        { stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle' },
                        { stateOn: 'glyphicon-heart', stateOff: 'glyphicon-star-empty' },
                        { stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle' },
                        { stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle' },
                        { stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle' }
                    ];
                }
                //reset the rating value to null
                Angular2Rating.prototype.resetRatingStar = function () {
                    this.overStar = null;
                };
                //call this method when over a star
                Angular2Rating.prototype.overStarDoSomething = function (value) {
                    this.overStar = value;
                    this.ratingPercent = 100 * (value / this.maxRateValue);
                };
                ;
                Angular2Rating = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n                <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n        {{pageTitle}}\n    </div>\n                <div class=\"background-image\" style=\"background-image : url('http://germini.info/wp-content/uploads/2015/12/Code-Javascript-at-Free-Code-Camp-jQuery.jpg')\">\n            </div>\n                    <h4 style=\"color: #00b0e8\">Angular 2 Rating - Stars Example</h4>\n                    <h5>Current Rate: <b>{{currentRate}}</b></h5>\n                    <rating [(ngModel)]=\"currentRate\" [max]=\"maxRateValue\" [readonly]=\"isRatingReadonly\"\n                            (onHover)=\"overStarDoSomething($event)\" (onLeave)=\"resetRatingStar($event)\"\n                            [titles]=\"['one','two','three']\"></rating>\n                    <span class=\"label\"\n                          [ngClass]=\"{'label-warning': ratingPercent<30, 'label-info': ratingPercent>=30 && ratingPercent<70, 'label-success': ratingPercent>=70}\"\n                          [ngStyle]=\"{display: (overStar && !isRatingReadonly) ? 'inline' : 'none'}\">{{ratingPercent}}%</span>\n                    <hr/>\n\n                    <h4 style=\"color: #00b0e8\">Angular 2 Rating With <b>Custom icons</b></h4>\n                    <h5><b>(<i>Current Rate:</i> {{rateValueExample1}})</b></h5>\n                    <div>\n                      <rating [(ngModel)]=\"rateValueExample1\" max=\"10\" stateOn=\"glyphicon-heart\"\n                              stateOff=\"glyphicon-ok-circle\"></rating>\n                    </div>\n                    <hr/>\n\n                    <h4 style=\"color: #00b0e8\">Angular 2 Rating With <b>Custom icons</b></h4>\n                    <h5><b>(<i>Current Rate:</i> {{rateValueExample2}})</b></h5>\n                    <div>\n                      <rating [(ngModel)]=\"rateValueExample2\" [ratingStates]=\"ratingStatesItems\"></rating>\n                    </div>\n                    </div>\n\n                ",
                        directives: [rating_component_1.Rating, common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [])
                ], Angular2Rating);
                return Angular2Rating;
            }());
            exports_1("Angular2Rating", Angular2Rating);
        }
    }
});

//# sourceMappingURL=rating-example.js.map
