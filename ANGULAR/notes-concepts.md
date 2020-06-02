## How does Angular Style Isolation work? Emulated View Encapsulation

Detailed explanation is [here](https://blog.angular-university.io/angular-host-context/)    

### Default Mechanism
app-root custom HTML element 
```html
<app-root _nghost-c0="">
    <h2 _ngcontent-c0="">Component Style Isolation example</h2>
    <button _ngcontent-c0="" class="red-button">Button</button>

```

### The :host pseudo-class selector
Sometimes we want to style the component custom HTML element itself, and not something inside its template.    
Let's say for example that we want to style the app-root component itself, by adding it, for example, an extra border.    
We cannot do that using styles inside its app.component.css associated file, right?    
This is because all styles inside that file will be scoped to elements of the template, and not the outer app-root element itself.    
If we want to style the host element of the component itself, we need the special :host pseudo-class selector.    

```css
/* styles applied directly to the ap-root element only */
:host {
    border: 2px solid dimgray;
    display: block;
    padding: 20px;
}
```

is equivalent to

```css
<style>
  [_nghost-c0] {
    border: 2px solid dimgray;
    display: block;
    padding: 20px;
  }
</style>
```


### Combining the :host selector with other selectors

```css
:host h2 {
    color: red;
}
```

>You could be surprised to find out that this style only applies to the h2 elements inside the app-root template, but not to the h2 inside the blue-button component.

is generated at run time to:
```css
 [_nghost-c0]   h2[_ngcontent-c0] {
    color: red;
  }
```