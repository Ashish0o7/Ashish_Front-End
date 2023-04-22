# List Component

This repository contains a React component that displays a list of items. The list items can be selected by the user, and the selected item will be highlighted in green. Initially every item is listed in red colour

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


# Ashish_Front-End
