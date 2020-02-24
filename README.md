# React Boilerplate
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using typescript template.
```
yarn create react-app my-app --template typescript
```

## Additional Setup
Added `eslint + prettier` with the following formatting rules override:
```
{
  "semi": true,
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 100,
  "singleQuote": true,
  "bracketSpacing": true,
  "trailingComma": "all",
  "jsxBracketSameLine": false
}
```

## Console Scripts
In the project directory, you can run:

### `yarn start`
Runs the app in the development mode.

### `yarn build`
Builds the app for production to the `build` folder.

### `yarn test`
Launches the test runner in the interactive watch mode.

### `yarn test-all`
Launches the test runner with `--watchAll=false` option.

### `yarn lint`
Runs type checking and linter.

### `yarn validate`
Runs type checking, linter, and tests. This will also perform code formatting, fix linter issues, and will update test snapshots. If there are updated snapshots, double check to make sure the changes are expected.

### `yarn coverage`
Runs all tests and shows test coverage.

### `yarn analyze`
Runs production bundle size analyzer.

## Tools and Dependencies
- `react-intl`
- `react-router-dom`
- `redux, redux-logger, react-redux`
- `redux-persist`
- `redux-saga`
- `node-sass`

## Folder Structure
```
public
src
 ├─ assets
 ├─ components
 │   └─ ComponentName.tsx
 ├─ errors
 ├─ fixtures
 ├─ i18n
 ├─ pages
 │   ├─ PageName
 │   │   ├─ PageName.module.scss
 │   │   ├─ PageName.tsx
 │   │   └─ index.tsx
 │   └─ index.tsx
 ├─ sagas
 ├─ services
 ├─ store
 ├─ styles
 │   ├─ _partial.scss
 │   ├─ global.module.scss
 │   └─ index.scss
 ├─ types
 ├─ App.tsx
 └─ index.tsx
```