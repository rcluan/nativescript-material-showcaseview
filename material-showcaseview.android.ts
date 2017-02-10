import * as application from 'application';
import { Color } from 'color';

declare var uk : any;

const MaterialShowcaseSequence = uk.co.deanwild.materialshowcaseview.MaterialShowcaseSequence;
const MaterialShowcaseView = uk.co.deanwild.materialshowcaseview.MaterialShowcaseView;
const ShowcaseConfig = uk.co.deanwild.materialshowcaseview.ShowcaseConfig;
const CircleShape = uk.co.deanwild.materialshowcaseview.shape.CircleShape;
const NoShape = uk.co.deanwild.materialshowcaseview.shape.NoShape;
const RectangleShape = uk.co.deanwild.materialshowcaseview.shape.RectangleShape;

export enum ShapeStyle {

  CIRCLE,
  RECTANGLE,
  NONE
}
export interface IShowcaseConfig {

  delay? : number;
  maskColour? : Color;
  contentTextColour? : Color;
  dismissTextColour? : Color;
  fadeDuration? : number;
  shape? : ShapeStyle;
  shapePadding? : number;
  renderOverNav? : boolean;

}

export interface IShowcaseItem {

  target : any;
  dismissText : string;
  contentText : string;
  withRectangleShape : boolean;
}

export class NSMaterialShowcaseView {

  private _materialShowcaseSequence : any;

  constructor() { }

  get materialShowcaseSequence() : any {

    return this._materialShowcaseSequence;
  }

  set materialShowcaseSequence(materialShowcaseSequence : any) {

    this._materialShowcaseSequence = materialShowcaseSequence;
  }

  createSequence = (items : Array<IShowcaseItem>, showcaseConfig? : IShowcaseConfig) => {

      let config = this.setConfig(showcaseConfig);
      this.materialShowcaseSequence = new MaterialShowcaseSequence(application.android.foregroundActivity, "showcase sequence");

      this.materialShowcaseSequence.setConfig(config);

      items.forEach( (item) => {

        this.materialShowcaseSequence.addSequenceItem(
          new MaterialShowcaseView.Builder(application.android.foregroundActivity)
                  .setTarget(item.target.android)
                  .setDismissText(item.dismissText)
                  .setContentText(item.contentText)
                  .withRectangleShape(item.withRectangleShape)
                  .build()
        );
      });
  }

  startSequence = () => {

    if(this.materialShowcaseSequence) {

      this.materialShowcaseSequence.start();
    } else {

      console.log('Sequence cannot start: undefined sequence');
    }
  }

  reset = () => {

    if(this.materialShowcaseSequence) {

      MaterialShowcaseView.resetSingleUse(application.android.foregroundActivity, 'showcase sequence');
    } else {

      console.log('Sequence cannot restart: undefined sequence');
    }
  }

  private setConfig = (showcaseConfig : IShowcaseConfig) => {

    let config = new ShowcaseConfig();

    if(showcaseConfig){

      let delay = showcaseConfig.delay, fadeDuration = showcaseConfig.fadeDuration, shapePadding = showcaseConfig.shapePadding;
      let shape = showcaseConfig.shape;
      let renderOverNav = showcaseConfig.renderOverNav;
      let maskColour = showcaseConfig.maskColour,
          contentTextColour = showcaseConfig.contentTextColour,
          dismissTextColour = showcaseConfig.dismissTextColour;

      if(delay) config.setDelay(delay);
      if(fadeDuration) config.setFadeDuration(fadeDuration);

      switch(shape) {

        case ShapeStyle.CIRCLE:
          config.setShape(new CircleShape());
          break;
        case ShapeStyle.RECTANGLE:
          config.setShape(new RectangleShape());
          break;
        case ShapeStyle.NONE:
          config.setShape(new NoShape());
          break;
        default:
          break;
      }

      if(shapePadding) config.setShapePadding(shapePadding);
      if(renderOverNav) config.setRenderOverNavigationBar(renderOverNav);
      if(maskColour) config.setMaskColor(maskColour);
      if(contentTextColour) config.setContentTextColor(contentTextColour);
      if(dismissTextColour) config.setDismissTextColor(dismissTextColour);

    }

    return config;
  }
}
