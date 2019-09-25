# wc-tabs


Simple tabs component

```html
<wc-tabs selection="1">
  <wc-tabs-header slot="header" name="tab1">Tab 1</wc-tabs-header>
  <wc-tabs-header slot="header" name="tab2">Tab 2</wc-tabs-header>
  <wc-tabs-header slot="header" name="tab3" disabled="true">Tab 3</wc-tabs-header>

  <wc-tabs-content slot="content" name="tab1">Content tab 1</wc-tabs-content>
  <wc-tabs-content slot="content" name="tab2" responsive="true">Content tab 2</wc-tabs-content>
  <wc-tabs-content slot="content" name="tab3">Content tab 3</wc-tabs-content>
</wc-tabs>
```

## Properties

`selection` property is not mandatory. Default selection is the first tab (0).

`selection` can be changed externaly anytime to force tab selection.

`selection` is applied modulus the number of tab.


## CSS vars

| Name | Description | Default |
| --- | --- | --- |
| --wc-tab-header-border-color | Outline border color | #dee2e6 |
| --wc-tab-header-bg-color | Header default background color | transparent |
| --wc-tab-header-color | Header default font color | #007bff |
| --wc-tab-header-selected-color | Selected header font color | #495057 |
| --wc-tab-header-selected-bg-color | Selected header background color | #fff |
| --wc-tab-header-selected-border-color | Selected header border color | #dee2e6 |
| --wc-tab-header-disabled-color | Disabled header font color |
| --wc-tab-header-disabled-bg-color | Disabled header background color | transparent |

## wc-tabs-content

### Properties
| Property     | Attribute    | Description | Type      | Default     |
| ------------ | ------------ | ----------- | --------- | ----------- |
| `name`       | `name`       |             | `string`  | `undefined` |
| `responsive` | `responsive` |  when set, force the div dimensions to 100%           | `boolean` | `false`     |

### Methods

#### `getChild() => Promise<IWcTabContentData>`

##### Returns

Type: `Promise<IWcTabContentData>`

## wc-tabs-header

### Properties

| Property   | Attribute  | Description | Type      | Default     |
| ---------- | ---------- | ----------- | --------- | ----------- |
| `disabled` | `disabled` |             | `boolean` | `undefined` |
| `name`     | `name`     |             | `string`  | `undefined` |


### Events

| Event      | Description | Detail |
| ---------- | ----------- | ------ |
| `onSelect` |             | void   |


### Methods

#### `getChild() => Promise<IWcTabHeaderData>`

##### Returns

Type: `Promise<IWcTabHeaderData>`