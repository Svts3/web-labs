# web-labs

# 10 lab task: 
Description: Create the first of three cart pages - Shopping cart page.

# Requirements:

All of the requirements for previous React.js works should be kept.
## Functionality:
- Item page: “Add to cart” action should be implemented using Redux flow: when you add an item to cart, it should be added to your redux store. On Cart page you take all of the items from the store
- Cart page: “add/remove” actions should be implemented through redux actions & reducers as well.
## Code style:
- Redux: All Redux parts (actions / reducers / store) should be kept in separate and specific files (actions.js / reducers.js / store.js etc.)
- Use useSelector hook for getting the data from redux store (instead of connect() function)
- Use useDispatch hook for dispatching your actions (instead of connect() function)
