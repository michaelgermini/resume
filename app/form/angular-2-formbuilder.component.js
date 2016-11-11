System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1, common_2, common_3;
    var Angular2FormBuilderExampleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
                common_3 = common_1_1;
            }],
        execute: function() {
            Angular2FormBuilderExampleComponent = (function () {
                function Angular2FormBuilderExampleComponent(_builder) {
                    this._builder = _builder;
                    this.pageTitle = 'Angular 2 Form';
                    this.carFormGroup = this._builder.group({
                        carName: ['', common_1.Validators.required],
                        carColor: ['', common_1.Validators.required],
                        carDoors: ['', common_1.Validators.required],
                    });
                }
                Object.defineProperty(Angular2FormBuilderExampleComponent.prototype, "carFormGroupValue", {
                    get: function () {
                        return JSON.stringify(this.carFormGroup.value, null, 2);
                    },
                    enumerable: true,
                    configurable: true
                });
                Angular2FormBuilderExampleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/form/angular-2-formbuilder.html',
                        directives: [common_2.CORE_DIRECTIVES, common_3.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], Angular2FormBuilderExampleComponent);
                return Angular2FormBuilderExampleComponent;
            }());
            exports_1("Angular2FormBuilderExampleComponent", Angular2FormBuilderExampleComponent);
        }
    }
});

//# sourceMappingURL=angular-2-formbuilder.component.js.map
