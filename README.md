# Background.js

### background/MatrixRain.js

![image](https://user-images.githubusercontent.com/62719703/209452401-2e50ed32-5134-4d1f-960f-c80f9f1ca0d7.png)

#### Syntax

###### constructor

```js
MatrixRain(canvas : HTMLCanvasElement, options?: {
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

#### Example

###### normal

```js
import { MatrixRain } from './background/MatrixRain.js'

// get the canvas element by id
const canvas = document.getElementById('background')

// create new MatrixRain
const matrixRain = new MatrixRain(canvas)

// resize to full window width and height
matrixRain.resize(window.innerWidth, window.innerHeight)

window.addEventListener('resize', () => {
    background.resize(window.innerWidth, window.innerHeight)
})

```

###### linear gradient

```js
import { MatrixRain } from './background/MatrixRain.js'

// get the canvas element by id
const canvas = document.getElementById('background')

// get context of canvas
const ctx = canvas.getContext('2d')

// create linear gradient
const gradient = ctx.createLinearGradient(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight)
gradient.addColorStop(0.0, 'red')
gradient.addColorStop(0.2, 'yellow')
gradient.addColorStop(0.4, 'green')
gradient.addColorStop(0.6, 'cyan')
gradient.addColorStop(0.8, 'blue')
gradient.addColorStop(1.0, 'magenta')

// create new MatrixRain
const matrixRain = new MatrixRain(canvas, {fontColor: gradient})

// resize to full window width and height
matrixRain.resize(window.innerWidth, window.innerHeight)

window.addEventListener('resize', () => {
    background.resize(window.innerWidth, window.innerHeight)
})
```
----
