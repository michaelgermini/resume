"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var dropdown_directive_1 = require('./dropdown.directive');
var dropdown_menu_directive_1 = require('./dropdown-menu.directive');
var dropdown_toggle_directive_1 = require('./dropdown-toggle.directive');
/*Angular 2 Dropdown Menu*/
var Angular2Dropdown = (function () {
    function Angular2Dropdown() {
        this.disabledMenu = false;
        this.status = { isopen: false };
        this.dropDownItemsExample = ['BMW Serie 1', 'BMW Serie 2', 'BMW Serie 3', 'BMW Serie 4'];
    }
    Angular2Dropdown.prototype.dropdownMenu = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    Angular2Dropdown = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\n                    <div (click)=\"$event.preventDefault()\">\n                      <!-- Angular 2 Simple Dropdown Menu -->\n                      <h4>Angular 2 Simple Dropdown Menu</h4>\n                      <span dropdown>\n                        <a href id=\"angular-simple-dropdown\" dropdownToggle>\n                                angular 2 simple dropdown menu\n                        </a>\n                        <ul class=\"dropdown-menu\" aria-labelledby=\"angular-simple-dropdown\">\n                          <li *ngFor=\"#item of dropDownItemsExample\">\n                            <a class=\"dropdown-item\" href=\"#\">{{item}}</a>\n                          </li>\n                        </ul>\n                      </span>\n                      <hr>\n                      <!-- Angular 2 Dropdown Menu with Enable/Disable mode and Events (external click) -->\n                      <h4>Angular 2 Dropdown Menu with Enable/Disable mode and Events (external click)</h4>\n                      <div>\n                        <button type=\"button\" class=\"btn btn-warning btn-sm\" (click)=\"dropdownMenu($event)\">Dropdown Menu (Toggle)\n                        </button>\n                        <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"disabledMenu = !disabledMenu\">Enable/Disable Dropdown Menu</button>\n                      </div>\n                      <div class=\"btn-group\" dropdown [(isOpen)]=\"status.isopen\">\n                        <button id=\"dropdown-list\" type=\"button\" class=\"btn btn-default\" dropdownToggle [disabled]=\"disabledMenu\">\n                          Button dropdown <span class=\"caret\"></span>\n                        </button>\n                        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdown-list\">\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Audi</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">BMW</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Mercedes</a></li>\n                          <li class=\"divider dropdown-divider\"></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Maserati</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Porsche</a></li>\n                        </ul>\n                      </div>\n\n                      <hr>\n\n                      <!-- Angular 2 Dropdown Menu with Keyboard Accessibility -->\n                      <h4>Angular 2 Dropdown Menu with Keyboard Accessibility</h4>\n                      <div class=\"btn-group\" dropdown keyboardNav=\"true\">\n                        <button id=\"dropdown-keyboard-access\" type=\"button\" class=\"btn btn-info\" dropdownToggle>\n                          Dropdown with Keyboard Accessibility (Up and Down) <span class=\"caret\"></span>\n                        </button>\n                        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdown-keyboard-access\">\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">BMW Serie 1</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">BMW Serie 5</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">BMW Serie 3</a></li>\n                          <li class=\"divider dropdown-divider\"></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Porsche</a></li>\n                          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Audi New</a></li>\n                        </ul>\n                      </div>\n                    </div>\n               ",
            directives: [dropdown_directive_1.Dropdown, dropdown_menu_directive_1.DropdownMenu, dropdown_toggle_directive_1.DropdownToggle, common_1.CORE_DIRECTIVES]
        })
    ], Angular2Dropdown);
    return Angular2Dropdown;
}());
exports.Angular2Dropdown = Angular2Dropdown;
