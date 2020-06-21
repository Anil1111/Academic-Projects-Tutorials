# Bootstrap

## Generic

### Anchor Tags

#### Remove underline

`<a class="text-decoration-none" href="#">Link</a>`

#### How to avoid click event on Anchor tag from firing and redirecting to # page

```html
<a class="text-decoration-none" href="javascript:void(0)" (click)="someEvent(i)">Set to Active</a>
```

#### Adding cursor:pointer / making clickable the tag enclosing anchor

`<a class="stretched-link">`

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

## Components

### List Group

#### Example of a Div with several anchor tags

```html
<div class="list-group">
    <a href="#" class="list-group-item list-group-item-action active">
      Cras justo odio
    </a>
    <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
    <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
</div>
```

#### Navs

```html
<nav class="nav">
  <a class="nav-link active" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
</nav>
```

## Utilities

### Text

- To remove the `underline` from Link  
`<a href="#" class="text-decoration-none">Non-underlined link</a>`

## Working with Angular using Bootstrap

In case `[(ngModel)]` is being used in a `form` element in an angular HTML template, ensure to provide the `name` attribute.

## Color

- .text-primary
- .text-secondary
- .text-success
- .text-danger
- .text-warning
- .text-info
- .text-light
- .text-dark
- .text-body
- .text-muted
- .text-white