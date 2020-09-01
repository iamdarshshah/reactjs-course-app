// @ts-nocheck

// Rendering static data
const FullNameStatic = () =>
  React.createElement("div", {}, [
    React.createElement("h2", {}, "Darsh"),
    React.createElement("h3", {}, "Shah"),
  ]);

// Passing props to the child component
const FullNameWithProps = (props) =>
  React.createElement("div", {}, [
    React.createElement("h2", {}, props.firstName),
    React.createElement("h3", {}, props.lastName),
  ]);

// Using Destructuring
const FullNameWithoutProps = ({ firstName, lastName }) =>
  React.createElement("div", {}, [
    React.createElement("h2", {}, firstName),
    React.createElement("h3", {}, lastName),
  ]);

const App = () =>
  React.createElement(
    "div",
    {},
    React.createElement("h1", {}, [
      "Hello Everyone👋",
      React.createElement(FullNameStatic),
      React.createElement(FullNameWithProps, {
        firstName: "Yash",
        lastName: "Adulkar",
      }),
      React.createElement(FullNameWithoutProps, {
        firstName: "Brian",
        lastName: "holt",
      }),
    ])
  );

//NOTE: here the 'App' is known as Composite Component (a component that you and I created)
ReactDOM.render(React.createElement(App), document.getElementById("root"));
