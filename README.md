
# Module: Build a Tabs Component

This is the sample project code for implementing a tabs component.

## Running the Project Locally
1. Run `npm install` to install the project dependencies.
2. Run `npm run start` to boot up the dev server.

Open up http://localhost:3000/ in your browser to view the project site. Any changes you make will auto-update in the browser.

### Files
The following files will be used throughout the implementation process of the tabs component:

#### 1. App.jsx
This file serves as the entry point for the project and will be the location where we render the `Tabs` component and [pass in the props](https://react.dev/learn/passing-props-to-a-component) that the component accepts.

#### 2. Tabs.jsx
This file provides the boilerplate for implementing the `Tabs`. All the props the component accepts (as outlined in the `Tabs.propTypes` definition) will need to be wired up accordingly.

#### 3. Tabs.css
The CSS is already supplied to help you concentrate exclusively on the essential aspects of implementing the `Tabs` component. However, this file can be valuable for exploring additional styling techniques with ARIA attributes.

In a real-world application, you wouldn't typically target elements directly as you're doing in this stylesheet. Instead, you'd usually employ more powerful and organized CSS solutions like CSS Modules, styled-components, Tailwind CSS, or other suitable options to ensure a more maintainable and scalable codebase. However, use plain old CSS and make the most of CSS selectors to keep things simple and straightforward.


### Dependencies
In this project, you'll have a basic React starter setup and the [prop-types package](https://www.npmjs.com/package/prop-types) for runtime type checking.


## CodeSandbox
Alternatively, the starter code for the project can also be found in this [CodeSandbox environment](https://codesandbox.io/s/starter-tabs-component-qlgscs?file=/src/components/Tabs.jsx). Feel free to fork the sandbox to follow along with the corresponding lessons.