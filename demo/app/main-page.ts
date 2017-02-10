import * as observable from 'data/observable';
import * as pages from 'ui/page';
import { Button } from 'ui/button';
import { StackLayout } from 'ui/layouts/stack-layout';
import { HelloWorldModel } from './main-view-model';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;

    let layout = <StackLayout> page.getViewById('layout');
    let btn = <Button> page.getViewById('btn');
    let reset = <Button> page.getViewById('btn2');

    let model = new HelloWorldModel(layout, btn, reset);

    page.bindingContext = model;
}
