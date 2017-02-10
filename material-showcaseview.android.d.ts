import { Color } from 'color';
export declare enum ShapeStyle {
    CIRCLE = 0,
    RECTANGLE = 1,
    NONE = 2,
}
export interface IShowcaseConfig {
    delay?: number;
    maskColour?: Color;
    contentTextColour?: Color;
    dismissTextColour?: Color;
    fadeDuration?: number;
    shape?: ShapeStyle;
    shapePadding?: number;
    renderOverNav?: boolean;
}
export interface IShowcaseItem {
    target: any;
    dismissText: string;
    contentText: string;
    withRectangleShape: boolean;
}
export declare class NSMaterialShowcaseView {
    private _materialShowcaseSequence;
    constructor();
    materialShowcaseSequence: any;
    createSequence: (items: IShowcaseItem[], showcaseConfig?: IShowcaseConfig) => void;
    startSequence: () => void;
    reset: () => void;
    private setConfig;
}
