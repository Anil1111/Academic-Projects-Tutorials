# CSS

## Shadow DOM

An important aspect of web components is encapsulation — being able to keep the markup structure, style, and behavior hidden and separate from other code on the page so that different parts do not clash, and the code can be kept nice and clean. The Shadow DOM API is a key part of this, providing a way to attach a hidden separated DOM to an element.  
You can affect the nodes in the shadow DOM in exactly the same way as non-shadow nodes — for example appending children or setting attributes, styling individual nodes using element.style.foo, or adding style to the entire shadow DOM tree inside a `<style>` element. The difference is that none of the code inside a shadow DOM can affect anything outside it, allowing for handy encapsulation.

### :host

The :host CSS pseudo-class selects the shadow host of the shadow DOM containing the CSS it is used inside — in other words, this allows you to select a custom element from inside its shadow DOM.

Note: This has no effect when used outside a shadow DOM.

```css
/* Selects a shadow root host */
:host {
  font-weight: bold;
}
```
