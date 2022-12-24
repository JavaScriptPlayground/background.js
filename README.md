# Background.js

### background/MatrixRain.js

#### Syntax

###### constructor

```js
MatrixRain(canvas : HTMLCanvasElement, options: {
    characters : string;
    fontSize : number;
    fontColor : string;
    fadeColor : string;
    fps : number;
}) : MatrixRain
```
`canvas : HTMLCanvasElement` : `The background canvas`
<br>
<br>
`characters : string`        : `Character string to display`
<br>
`fontSize : number`          : `Font size`
<br>
`fontColor : string`         : `Color of the font characters`
<br>
`fadeColor : string`         : `Color to fade out`
<br>
`fps : number`               : `Frames per second`

<br>

###### methodes

```js
MatrixRain.resize(width : number, height : number) : void
```
`width : number`  : `The new width of the canvas`
`height : number` : `The new height of the canvas`
> Resize the canvas.

<br>
