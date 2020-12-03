# `ember-service-helper`

![CodeQL](https://github.com/MrChocolatine/ember-service-helper/workflows/CodeQL/badge.svg)

Simple template helper to inject services into templates.


## Installation

```text
ember install MrChocolatine/ember-service-helper
```


## Usage

### Get a Service object

Example using [`ember-responsive`](https://github.com/freshbooks/ember-responsive).

```hbs
{{#with (service "some-service") as |serviceX|}}
  <div>
    {{serviceX.propA}}
  </div>
  <div>
    {{serviceX.propB}}
  </div>
{{/with}}
```


### Get directly a property from a Service

```hbs
<div>
  {{service "some-service" "propA"}}
</div>
```


## Related

- [Pre-RFC 543: Ability to inject service into Template Only component](https://github.com/emberjs/rfcs/issues/543)
