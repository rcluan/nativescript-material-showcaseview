# Nativescript MaterialShowcaseView

A Material Design themed showcaseview (coachmarks) for Nativescript.

This plugin works only on Android devices and it is based on * [MaterialShowcaseView](https://github.com/deano2390/MaterialShowcaseView). Consider checking * [nativescript-coachmarks](https://github.com/nathanwalker/nativescript-coachmarks) if you are looking for an iOS version.

## Getting started

To install run
`npm install nativescript-material-showcaseview`


## Usage

Import the `NSMaterialShowcaseView` class to your module, then create a new instance of it.

```
import { NSMaterialShowcaseView } from 'nativescript-material-showcaseview'

export class MyModel {
	private showcaseView: NSMaterialShowcaseView;
	constructor() { this.showcaseView = new NSMaterialShowcaseView(); }
}
```

IShowcaseItem and IShowcaseConfig  interfaces respectively represent a showcase item and the showcase configuration.
```
export interface IShowcaseItem {
    target: any; // the element in your view (e.g a button)
    dismissText: string; // the text to dismiss the show case
    contentText: string; // the text explaining the element
    withRectangleShape: boolean;
}
```

An example of item:
```
let item : IShowcaseItem = {

	target: this.btn,
	dismissText: "GOT IT",
	contentText: "This is the start button",
	withRectangleShape: false
};
```

Currently the plugin only implements the showcase sequence available on MaterialShowcaseView. In order to create the sequence you should call `this.showcaseView.createSequence(items)`, in which the paramenter **items** represents an array of IShowcaseItem.

**Note**: if you wish to highlight only one element in your view, then your array must have only one element.

`this.showcaseView.startSequence()` initiates the showcase sequence, whilst `this.showcaseView.reset()` resets the sequence so it can be shown again.

There is a sample app available here in case you need to see a working example.
