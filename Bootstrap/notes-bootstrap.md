# Bootstrap

## Generic

### Anchor Tags

#### Remove underline

`<a class="text-decoration-none" href="#">Link</a>`

#### How to avoid click event on Anchor tag from firing and redirecting to # page

```html
<a class="text-decoration-none" href="javascript:void(0)" (click)="someEvent(i)">Set to Active</a>
```

## Content

### Image

- Responsive Images  
`max-width: 100%` and `height: auto` are applied  
`<img src="..." class="img-fluid" alt="Responsive image">`

- Thumbnail  
`<img src="..." alt="..." class="img-thumbnail">`

- Rounded Images  
`<img src="..." class="rounded" alt="...">`

- Align Images Left/Right  
`<img src="..." class="rounded float-left" alt="...">`  
`<img src="..." class="rounded float-right" alt="...">`




## Utilities

### Text

- To remove the `underline` from Link  
`<a href="#" class="text-decoration-none">Non-underlined link</a>`




## Working with Angular using Bootstrap

In case `[(ngModel)]` is being used in a `form` element in an angular HTML template, ensure to provide the `name` attribute.

