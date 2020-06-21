# Concepts

## Anchor `<a>` vs Button `<button>`

- As far as semantics and styling is concerned, the `<a>` element isn't a link `:link` unless it has an `href` attribute. A side-effect of this is that an `<a>` element without `href` won't be in the tabbing order by default
- On a semantic level, there is a distinct difference between a link and a button

  - A button is something that when clicked causes an action to occur
  - A link is a button that causes a change in navigation in the current document. The navigation that occurs could be moving within the document in the case of fragment identifiers `#foo` or moving to a new document in the case of urls `/bar`

- If you're concerned about the semantics and accessibility of using an `<a>` element (or `<span>`, or `<div>`) as a button, you should add the following attributes:
`<a role="button" tabindex="0" ...>...</a>`
  - The button role tells the user that the particular element is being treated as a button as an override for whatever semantics the underlying element may have had.
