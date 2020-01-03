This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

## For test 
### `yarn test`

## For build
### `yarn build`

### Project structure
- `components`: All reusable components store here (Buttons, Items, Checkboxes etc.)
- `modules`: Modules consisting of reused components (Footer, CheckList, Table, Filter etc.)
- `screens`: All containers which connects in the redux store here. Also all GraphQl requests invokes here. Screen should be connect according to the current route, e.g. `/login` route should renders `Login` screen, `/dashboard` -> `Dashboard` screen etc.
- `layouts`: All layouts should be here. You may be need different layout for some roles (`admin`, `user`) e.g. Layout should wrap different modules for different roles e.g. `Header` or `Footer` or `Sidebar` etc.
- `routes`: All routes entities store here.
- `hooks`: All custom hooks should be here.
- `utils`: All reusable utils should be here. If the util is not reusable you can create it in the helpers.js in the current module folder.
- `images`: All images should be here
- All components should be reusable, memoized. To make multiple UI for one component use `looks` property (current type of the component UI), and `customStyles` property (for changing custom styles). All styles should be created in the `YourComponent.styles.tsx` file. You have to use `useStyles` hook to receive current style.

