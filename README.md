# docs-component

A simple,reusable and customizable React component that auto-generates a docs page with table of contents. Supports one and two-level links nestings with customization.

## Features

* Generates a table of contents from the headings in your document.
* Highly customizable.

``` js
import Docs from 'docs-component';

const PageDocs = ()=>{
  return <Docs>
    <h2>...</h2>
    <p>...</p>
    <h3>...</h3>
    <p>...</p>
    ...
  </Docs>
}
```
