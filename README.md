# `ember-service-helper`

![CodeQL](https://github.com/MrChocolatine/ember-service-helper/workflows/CodeQL/badge.svg)

Simple template helper to inject services into templates.


## Installation

```
ember install ember-service-helper
```

## Usage

Example using [`ember-responsive`](https://github.com/freshbooks/ember-responsive).

```hbs
{{#if (get (service "breakpoints") "isDesktop")}}
  Desktop breakpoint
{{else}}
  Mobile breakpoint
{{/if}}
```

## Related

- [Pre-RFC 543: Ability to inject service into Template Only component](https://github.com/emberjs/rfcs/issues/543)
