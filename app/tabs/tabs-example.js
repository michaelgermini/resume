System.register(['angular2/core', 'angular2/common', './tab.directive', './tabset.component', './tab-heading.directive'], function(exports_1, context_1) {
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
    var core_1, common_1, tab_directive_1, tabset_component_1, tab_heading_directive_1;
    var Angular2Tabs;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (tab_directive_1_1) {
                tab_directive_1 = tab_directive_1_1;
            },
            function (tabset_component_1_1) {
                tabset_component_1 = tabset_component_1_1;
            },
            function (tab_heading_directive_1_1) {
                tab_heading_directive_1 = tab_heading_directive_1_1;
            }],
        execute: function() {
            /*Angular 2 Tabs Example*/
            Angular2Tabs = (function () {
                function Angular2Tabs() {
                    this.pageTitle = 'Angular 2 Tabs';
                    //dynamic Tabs
                    this.angular2TabsExample = [
                        { title: 'Angular Tab 1', content: 'Angular 2 Tabs are navigable windows, each window (called tab) contains content', disabled: false, removable: true },
                        { title: 'Angular Tab 2', content: 'generally we categorize contents depending on the theme', disabled: false, removable: true },
                        { title: 'Angular Tab (disabled) X', content: 'Angular 2 Tabs Content', disabled: true, removable: true }
                    ];
                }
                //on select a tab do something
                Angular2Tabs.prototype.doOnTabSelect = function (currentTab) {
                    console.log('doOnTabSelect' + currentTab);
                };
                ;
                //on remove Tab do something
                Angular2Tabs.prototype.removeThisTabHandler = function (tab) {
                    console.log('Remove Tab handler' + tab);
                };
                ;
                Angular2Tabs = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n                <div class=\"panel panel-primary\">\n                    <div class=\"panel-heading\">\n                     {{pageTitle}}\n                        </div>\n                        <div class=\"background-image\" style=\"background-image : url('http://germini.info/wp-content/uploads/2015/12/Map.jpg')\">\n                        </div>\n                         <div (click)=\"$event.preventDefault()\">\n                          <hr />\n                          <tabset>\n                            <tab heading=\"Home\">Home</tab>\n                            <tab *ngFor=\"#aTab of angular2TabsExample\"\n                                 [heading]=\"aTab.title\"\n                                 [active]=\"aTab.active\"\n                                 (select)=\"aTab.active = true\"\n                                 (deselect)=\"aTab.active = false\"\n                                 [disabled]=\"aTab.disabled\"\n                                 [removable]=\"aTab.removable\"\n                                 (removed)=\"removeThisTabHandler(aTab)\">\n                              {{aTab?.content}}\n                            </tab>\n                            <tab (select)=\"doOnTabSelect(this)\">\n                              <template tab-heading>\n                                <i class=\"glyphicon glyphicon-check\"></i> On Select Tab!\n                              </template>\n                              Do action on select a Tab\n                            </tab>\n                          </tabset>\n                          <hr />\n                          <p>\n                            <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"angular2TabsExample[0].active = true\">Select a Tab from the Array</button>\n                         </p>\n\n                        </div>\n                        </div>\n\n              ",
                        directives: [tab_directive_1.Tab, tabset_component_1.Tabset, tab_heading_directive_1.TabHeading, common_1.CORE_DIRECTIVES],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    }), 
                    __metadata('design:paramtypes', [])
                ], Angular2Tabs);
                return Angular2Tabs;
            }());
            exports_1("Angular2Tabs", Angular2Tabs);
        }
    }
});

//# sourceMappingURL=tabs-example.js.map
