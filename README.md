## Explain what the List component does?

The list component given to us displays a list of items. The list items can be selected by the user, and the selected item will be highlighted in green. Initially every item is listed in red colour

##The list of items that are passed as an array
| Prop          | Type     | Default | Required | Description                                           |
| ------------- | -------- | ------- | -------- | ----------------------------------------------------- |
| `items`       | `Array`  | `null`  | Yes      | An array of items to display in the list              |

### SingleListItem

The SingleListItem component is a single item in the list.

| Prop             | Type     | Description                                           |
| ---------------- | -------- | ----------------------------------------------------- |
| `index`          | `Number` | The index of the item in the list                      |
| `isSelected`     | `Bool`   | A boolean value indicating whether the item is selected |
| `onClickHandler` | `Func`   | A function to handle the click event for the item      |
| `text`           | `String` | The text to display for the item                       |

## Why are the errors/warning with the code?

ERRORS

### 1. prop_types__WEBPACK_IMPORTED_MODULE_2___default(...).shapeOf is not a function
###    TypeError: prop_types__WEBPACK_IMPORTED_MODULE_2___default(...).shapeOf is not a function

The error is occurring because the PropTypes library does not have a method called shapeOf. The correct method name is shape. This was due to a typo

### 2. Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types
###     Invariant Violation: Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types

This error is occurring because the prop-types validators are not being used correctly. We are not supported to call the validators directly. Instead, we should use the PropTypes.checkPropTypes() method to call them.
Also PropTypes.array is being used instead of PropTypes.arrayOf.

### 3. setSelectedIndex is not a function
###    TypeError: setSelectedIndex is not a function

 We are trying to use setSelectedIndex as a function but it is not
In Line const [setSelectedIndex, selectedIndex] = useState();


### 4. No color changing on selecting the items

the onClick handler is being called immediately instead of being passed as a function.
Also no logic is given of wherether the index is selected or not


## Fixing and modifying the code

1.)To fix the first issue we simply have to fix the typo error AS follows ->
```js
WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })),
};
```
2.) To fix the validation issue

```js
const propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
      })
    ),
  };

  PropTypes.checkPropTypes(propTypes, { items }, 'prop', 'WrappedListComponent');
```

    
# Ashish_Front-End
