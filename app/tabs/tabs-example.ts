import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Tab} from './tab.directive';
import {Tabset} from './tabset.component';
import {TabHeading} from './tab-heading.directive';

/*Angular 2 Tabs Example*/
@Component({
    selector: 'my-app',
    template: `
                <div class="panel panel-primary">
                    <div class="panel-heading">
                     {{pageTitle}}
                        </div>
                        <div class="background-image" style="background-image : url('http://germini.info/wp-content/uploads/2015/12/Map.jpg')">
                        </div>
                         <div (click)="$event.preventDefault()">
                          <hr />
                          <tabset>
                            <tab heading="Home">Home</tab>
                            <tab *ngFor="#aTab of angular2TabsExample"
                                 [heading]="aTab.title"
                                 [active]="aTab.active"
                                 (select)="aTab.active = true"
                                 (deselect)="aTab.active = false"
                                 [disabled]="aTab.disabled"
                                 [removable]="aTab.removable"
                                 (removed)="removeThisTabHandler(aTab)">
                              {{aTab?.content}}
                            </tab>
                            <tab (select)="doOnTabSelect(this)">
                              <template tab-heading>
                                <i class="glyphicon glyphicon-check"></i> On Select Tab!
                              </template>
                              Do action on select a Tab
                            </tab>
                          </tabset>
                          <hr />
                          <p>
                            <button type="button" class="btn btn-primary btn-sm" (click)="angular2TabsExample[0].active = true">Select a Tab from the Array</button>
                         </p>

                        </div>
                        </div>

              `,
    directives: [Tab,Tabset,TabHeading,CORE_DIRECTIVES],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Angular2Tabs {
    
    public pageTitle: string = 'Angular 2 Tabs';
        
    //dynamic Tabs
    public angular2TabsExample:Array<any> = [
        {title: 'Angular Tab 1', content: 'Angular 2 Tabs are navigable windows, each window (called tab) contains content', disabled: false, removable: true},
        {title: 'Angular Tab 2', content: 'generally we categorize contents depending on the theme', disabled: false, removable: true},
        {title: 'Angular Tab (disabled) X', content: 'Angular 2 Tabs Content', disabled: true, removable: true}
    ];
    //on select a tab do something
    public doOnTabSelect(currentTab:any) {
        console.log('doOnTabSelect'+currentTab);
    };
    //on remove Tab do something
    public removeThisTabHandler(tab:any) {
        console.log('Remove Tab handler'+tab);
    };
}