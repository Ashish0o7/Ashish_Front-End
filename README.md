## Explain what the List component does?

The list component given to us displays a list of items. The list items can be selected by the user, and the selected item will be highlighted in green. Initially every item is listed in red colour

##The list of items that are passed as an array
| Prop          | Type     | Description                                           |
| ------------- | -------- | ----------------------------------------------------- |
| `items`       | `Array`  |  An array of items to display in the list             |

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

### 4. No color changing on selecting the items

the onClick handler is being called immediately instead of being passed as a function.
Also issue with logic of whether the index is selected or not, as isSelected will only accept bool values


## Fixing and modifying the code

1.)To fix the first issue we simply have to fix the typo error as follows ->
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
In this code, PropTypes.checkPropTypes is used to validate that the items prop passed to WrappedListComponent confirms to the definition specified in propTypes.
So I have used this checkPropTypes method to call them.

3.) To fix this issue
Instead of 
```js
 const [setSelectedIndex, selectedIndex] = useState();
``` 

```js
 const [selectedIndex,setSelectedIndex] = useState();
``` 

4.) Instead of 
```js
 onClick={onClickHandler(index)}
``` 
We have to use 

```js
 onClick={() => onClickHandler(index)}
```

And since the isSelected logic is wrong,as to change color of only selected, item ,we have to do is 
```js
 isSelected={selectedIndex===index}
```

5.) Also did some css modification, as the color background was covering the whole width
```js
style={{
        listStyle: 'disc',
        backgroundColor: isSelected ? 'green' : 'red',
        padding: '5px 20px',
        borderRadius: '5px',
        margin: '5px 0',
        display: 'block',
        maxWidth: '100px',
      }}
```   


## To view the changes for the assignment live, do visit https://steeleye-vd95.onrender.com/


# Ashish_Front-End
