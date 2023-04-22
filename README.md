## 1.Explain what the List component does?

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

ERROR
prop_types__WEBPACK_IMPORTED_MODULE_2___default(...).shapeOf is not a function
TypeError: prop_types__WEBPACK_IMPORTED_MODULE_2___default(...).shapeOf is not a function
    at ./src/List.js (http://localhost:3001/static/js/bundle.js:265:116)
    at options.factory (http://localhost:3001/static/js/bundle.js:42346:31)
    at __webpack_require__ (http://localhost:3001/static/js/bundle.js:41792:33)
    at fn (http://localhost:3001/static/js/bundle.js:42003:21)
    at ./src/App.js (http://localhost:3001/static/js/bundle.js:17:63)
    at options.factory (http://localhost:3001/static/js/bundle.js:42346:31)
    at __webpack_require__ (http://localhost:3001/static/js/bundle.js:41792:33)
    at fn (http://localhost:3001/static/js/bundle.js:42003:21)
    at ./src/index.js (http://localhost:3001/static/js/bundle.js:326:62)
    at options.factory (http://localhost:3001/static/js/bundle.js:42346:31)
    
    
# Ashish_Front-End
