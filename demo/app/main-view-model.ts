import {Observable} from 'data/observable';
import { Button } from 'ui/button';
import { StackLayout } from 'ui/layouts/stack-layout';
import { NSMaterialShowcaseView, IShowcaseItem, IShowcaseConfig, ShapeStyle } from 'nativescript-material-showcaseview';

export class HelloWorldModel extends Observable {

  public layout: StackLayout;
  public btn: Button;
  public btn2: Button;
  private showcaseView: NSMaterialShowcaseView;

  constructor(layout: StackLayout, btn : Button, btn2: Button) {
    super();

    this.showcaseView = new NSMaterialShowcaseView();

    btn.on(Button.tapEvent, () => {

      this.presentShowcaseSequence();
      this.showcaseView.startSequence();
    });

    btn2.on(Button.tapEvent, () => {

      this.showcaseView.reset();
    });

    this.layout = layout;
    this.btn = btn;
    this.btn2 = btn2;

    this.presentShowcaseSequence();
    setTimeout(() => this.showcaseView.startSequence(), 200);
  }

  private presentShowcaseSequence = () => {

    console.log('start showcase');
    let items : Array<IShowcaseItem> = new Array();

    items.push(...[
      {

        target: this.layout,
        dismissText: "GOT IT",
        contentText: "This is the layout",
        withRectangleShape: false
      },
      {

        target: this.btn,
        dismissText: "GOT IT",
        contentText: "This is the start button",
        withRectangleShape: false
      },
      {

        target: this.btn2,
        dismissText: "GOT IT",
        contentText: "This is the reset button",
        withRectangleShape: false
      }]);

    this.showcaseView.createSequence(items);
  }
}
