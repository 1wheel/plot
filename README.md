Plot
===

> A small library to render charts in node and save a picture of them as a png

## Installing (not yet on npm)

```
npm install @mhkeller/plot
```

## Functions

**drawPlot(** `plotFunction: Function, outPath: String[, { css: String }]` **)**

A generic function to render HTML and screenshot it. 

```js
import { drawPlot } from '@mhkeller/plot`;

// Create an async function that returns a plot
const chart = async () => Plot.plot({
  marks: [
    Plot.rectY(
      data, 
      Plot.binX(
        { y: 'count' }, 
        {
          x: 'date', 
          y: 'value', 
          fill: 'blue', 
          thresholds: 10
        }
      )
    )
  ], 
  marginLeft: 100, 
  height: 200,
  width: 554
});

drawPlot(chart, 'chart.png', { 
 css: 'svg{overflow:visible;}' 
});
```

*Arguments*

* **chart** `{Function}`
  * An async function that returns a function that returns HTML. **(required)**
* **options** `{Object}`
  * An options object.
* **options.outPath** `{String='chart.png'}`
  * A filepath to write the image.
* **options.view** `{Boolean=false}`
  * If true, show the chart in a popup window.
* **options.css** `{String}`
  * Any CSS that you want injected into the page to tweak styles.

**drawHistogram(** `data: Array, { facetBy: String[], fields: String{}, outDir: String[, name: String, fill: String='#000', css: String, view: false] } }` **)**

A more specific function that takes data, a list of fields to facet by and a list of fields to compute values for. Writes a screenshot.

```js
import { drawHistogram } from '@mhkeller/plot`;

drawHistogram(data, { 
 facetBy: ['group'], 
 fields: ['value', 'value2'], 
 outDir: 'out_images', 
 name: 'my-charts', 
 fill: 'group', 
 css: 'svg{overflow:visible;}' 
});
```

*Arguments*

* **data** `{Array}`
  * Your data to render. **(required)**
* **options** `{Object}`
  * An options object.
* **options.facetBy** `{String[]}`
  * An array of field names to facet by. These facets are not combined, it's just a shorthand for running multiple facets at a time, done separately in succession. **(required)**
* **options.fields** `{String[]}`
  * An array of fields to compute histogram values for. **(required)**
* **options.outDir** `{String}`
  * The *directory* – not a specific file name – to write the various files out to. **(required)**
  * Filenames are generated according to the convention: 
    * With a `name` supplied: `${name}_by__${facet}_${field}.png`;
    * With no `name` supplied: `by__${facet}_${field}.png`;
    * If `breakoutFields=false` `_${field}` is a concatenation of all fields separated by a `|` character.
    * If `columns=false`, the file name will end in `_lines.png`.
* **options.fill** `{String}`
  * A hex code or field name. Defaults to `'#000'`.
* **options.view** `{Boolean=false}`
  * If true, show the chart in a popup window.
* **options.css** `{String}`
  * Any CSS that you want injected into the page to tweak styles.
* **options.breakoutFields** `{Boolean=true}`
  * For each field passed into `options.fields` write out a separate PNG. Set this to false to put everything on the same scale.
* **options.columns** `{Boolean=true}`
  * Draw the histogram as columns, like a regular histogram. If this is `false`, just draw semi-opaque lines, which can be useful for seeing density.
  
## Examples

See the [examples](./examples/) folder TK.
