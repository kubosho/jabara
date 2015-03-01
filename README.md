Jabara
======

[![Circle CI](https://circleci.com/gh/kubosho/jabara.svg?style=svg)](https://circleci.com/gh/kubosho/jabara)
[![Coverage Status](https://img.shields.io/coveralls/kubosho/jabara.svg)](https://coveralls.io/r/kubosho/jabara)
[![David](https://img.shields.io/david/dev/kubosho/jabara.svg)](https://david-dm.org/kubosho/jabara#info=devDependencies)
[![MIT License](http://img.shields.io/badge/license-MIT-green.svg)](https://github.com/kubosho/ano-gakki/blob/master/LICENSE)

"Jabara" is accordion UI library. No dependence on other libraries.

Usage
-----

Put the required CSS and JavaScript at the `head` element:

```html
<link rel="stylesheet" href="jabara.css">
<script src="jabara.js"></script>
```

Add a `js-jabara-title` and `js-jabara-content` classes to your HTML:

```html
<h1 class="js-jabara-title">
    [Title]
</h1>
<div class="js-jabara-content">
    <div class="inner">
        [Content]
    </div>
</div>
```

Full sample code: [https://kubosho.github.io/jabara](https://kubosho.github.io/jabara)

Options
-------

| name           | type    | default value | description                          |
| -------------- | ------- | ------------- | ------------------------------------ |
| arrow          | boolean | true          | if parameter is true, show the arrow |
| duration       | number  | 200           | Move animation duration time         |

API
---

### Jabara

- `constructor(options?: JabaraOptions): void`

#### Instance methods

- `toggle(toriggerE: HTMLElement): void`
  - should be passing `event.currentTarget` for `toriggerE` argument.

Contribution
------------

[See CONTRIBUTING.md](CONTRIBUTING.md)

License
-------

[MIT License](LICENSE)

Author
------

[kubosho_](https://github.com/kubosho)
