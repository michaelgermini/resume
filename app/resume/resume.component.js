System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ResumeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ResumeComponent = (function () {
                function ResumeComponent() {
                    this.pageTitle = 'Curriculum Vitae';
                }
                ResumeComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/resume/resume.component.html',
                        styleUrls: ['app/resume/resume.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ResumeComponent);
                return ResumeComponent;
            }());
            exports_1("ResumeComponent", ResumeComponent);
        }
    }
});

//# sourceMappingURL=resume.component.js.map
