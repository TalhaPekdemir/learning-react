# React JS Notes

My adventures with React

## Table of contents:

1. [Component](#component)
    - [Writing custom function components](#writing-custom-function-components)
    - [Using components](#using-components)
    - [Using components inside components](#using-components-inside-components)
2. [JSX](#jsx)
3. [Props](#props)
    - [What is props?](#what-is-props)
    - [Basic usage of props](#basic-usage-of-props)
    - [Passing props](#passing-props)
    - [Using props with JS object capabilities](#using-props-with-js-object-capabilities)
    - [Sending arrays and objects as props](#sending-arrays-and-objects-as-props)
    - [Rendering arrays](#rendering-arrays)
    - [Rendering array of objects](#rendering-array-of-objects)
4. [React Technicals](#react-technicals)
5. [Nice to Have](#nice-to-have)

## Keywords

### Component

Reusable pieces of UI.

Reasons to use components:

1. **Modularity:** Breaking your project into small, manageable chunks makes it modular. Every module is (and should be) responsible for one task.

2. **Reusability:** Reusability is an extension of modularity. When needed, singly responsible component can be used in multiple places across the project.

3. **Testing:** If one component is not dependent on another component, it can be unit tested better than single complex structured component.

4. **Abstraction:** Hiding all the code and the complexion from where the component is called. Simply another file has the responsibility of implementing all the logic and markdown of a component. After that what's left is, just calling the component itself at where it should be used.

Common rules:

- Components can be written as a function or a class.
- A component has to return a [JSX](#jsx).

- In order for a component to be usable, it needs to be exposed.

#### Writing custom function components

```jsx
function SomeComponent(){
  return(
    // ...
  );
}

export default SomeComponent;
```

- Or

  ```jsx
  export default function SomeComponent(){
    return(
      // ...
    );
  }
  ```

#### Using components

- To be able to use exposed component, it needs to be imported like a module. After that, can be used like an HTML element.

  ```jsx
  // App.jsx
  import SomeComponent from "path/to/SomeComponent";

  function App() {
    return (
      <div className="App">
        <SomeComponent />
      </div>
    );
  }

  export default App;
  ```

#### Using components inside components

Helps further encapsulaing thus making the code simpler to read and manage. Next example utilizes [Props](#props), checking that part out first highly recommended.

- As can be seen currently, Basket component has two functions: Iterating over a given list of items and listing individual items. Basket component does not need to know how list items being consumed. Breaking these two responsibilities and seperating each into on its own file is preferred.

```jsx
export default function Basket() {
  const basketItems = [
    { id: 1, name: "LEGO Speed Champions Ferrari F40 Competizione", price: 25 },
    { id: 2, name: "LEGO Speed Champions Lamborghini Countach", price: 30 },
    { id: 3, name: "LEGO Speed Champions McLaren Senna", price: 35 },
  ];

  return (
    <div>
      Basket:
      <ul>
        {basketItems.map((item) => (
          <li key={item.id}>
            {item.name} ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

- After seperating component to consume single list item:

```jsx
export default function BasketItem({ item }) {
  return (
    <li>
      {item.name} ${item.price}
    </li>
  );
}
```

- Notice that we offloaded the responsibility of handling the list item keys. According to React document, a component itself should know if it has a key. Because keys would not be passed as props. In order to use components requiring keys with map(), key should passed as another prop. **This is a common pitfall!** Therefore,

```jsx
import BasketItem from "./BasketItem";

export default function Basket() {
  const basketItems = [
    { id: 1, name: "LEGO Speed Champions Ferrari F40 Competizione", price: 25 },
    { id: 2, name: "LEGO Speed Champions Lamborghini Countach", price: 30 },
    { id: 3, name: "LEGO Speed Champions McLaren Senna", price: 35 },
  ];

  return (
    <div>
      Basket:
      <ul>
        {basketItems.map((item) => (
          <BasketItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
```

---

### JSX

Abbreviation of "JavaScript Extension". Looks like HTML DOM elements but in reality all of them are React JSX elements

- Every React component returns exactly one root element. Root can have multiple JSX elements and and these can have different attributes than standard HTML elements.

  ```jsx
  // This is valid:
  function SomeComponent() {
    return <h1>A Header</h1>;
  }
  ```

  ```jsx
  // This is not valid:
  function SomeComponent(){
    return <h1>A Header</h1> <p>Some paragraph</p>;
  }
  ```

  ```jsx
  // To return more than one element:
  function SomeComponent() {
    return (
      <div>
        <h1>A Header</h1>
        <p>Some paragraph</p>
      </div>
    );
  }
  ```

  - If you do not want the extra div, use shorthand _Fragment_ syntax. That way extra div would not be added to DOM tree.

    ```jsx
    function SomeComponent() {
      return (
        <>
          <h1>A Header</h1>
          <p>Some paragraph</p>
        </>
      );
    }
    ```

  - If you want to return more than one element but also parameterize them or pass a key (more on that on [Props](#props)), instead of using the shorthand you have to use Fragment itself.

    ```jsx
    import { Fragment } from "react";

    // ...

    const articleItems = articles.map((article) => (
      <Fragment key={article.id}>
        <h1>A Header</h1>
        <p>Some paragraph</p>
      </Fragment>
    ));

    // ...
    ```

- Allows us to evaluate JS in HTML.
- Evaluation should be used in curly braces and can be a variable, a function, a mathematical expression...

  ```jsx
  let name = "React";

  function Greet(){
    return "Hello!";
  }

  function SomeComponent(){
    return (
      <h1>{ Greet() }</h1>
      <p>I am learning { name }</p>
      <p>{9 + 10}</p>
    );
  }
  ```

---

### Props

#### What is props?

Used to make the components dynamic. Currently all the components written is static. Performing the same action is might be preferable in some conditions but if that was the case, we had to write a different component for every action. That leads to code duplication and this behavior is against component structure. To achieve a dynamic stucture in React, parameterizing components is called "props".

#### Basic usage of props

- Pass the "props" object as parameter to the function component just like vanilla JS.

- Objects can not be rendered directly in components. Use object's respective keys to render in DOM.

```jsx
export default function SomeComponent(props) {
  return <h1>Hello {props.name}</h1>;
}
```

#### Passing props

- Pass the value like an HTML attribute to the component where component is used.

```jsx
function App() {
  return <SomeComponent name="Bob" />;
}
```

- Or if you don't want to hardcode, use JSX evaluation syntax.

```jsx
function App() {
  const name = "Bob";
  return <SomeComponent name={name} />;
}
```

- Amount of props can be sent to the component has no limits.

#### Using props with JS object capabilities

- JS destructor syntax can be used to destruct props object.

```jsx
export default function Hello(props) {
  const { message, name } = props;
  return (
    <h1>
      {message} {name}
    </h1>
  );
}
```

- Better than that, props can be destructed as soon as passed without extra step. Fun fact, you can send emojis as props.

```jsx
export default function Hello({ message, name }) {
  return (
    <h1>
      {message} {name}
    </h1>
  );
}
```

- **Props are immutable.** Which means, props' value can not be changed after passing.

- With props; strings, other values, arrays, objects, functions and other components can be passed.

#### Sending arrays and objects as props

is not different than using literals in JSX tags. Basically object inside of an object.

```jsx
// Player.jsx
export default function Player(props) {
  return (
    <div>
      <p>Nickname: {props.player.nickname}</p>
      <p>Level: {props.player.level}</p>
      <p>Class: {props.player.class}</p>
      <p>Active Effects: {props.player.activeEffects}</p>
    </div>
  );
}

// App.jsx
import Player from "./components/Player";

function App() {
  const player = {
    nickname: "Bob the Destructor",
    level: 38,
    class: "Dragonslayer",
    activeEffects: ["Strength II", "Healing I"],
  };

  return (
    <div className="App">
      <Player player={player} />
    </div>
  );
}

export default App;
```

- As can be seen if arrays passed and displayed directly, respective items will be concatenated then rendered.

  ![image](assets/v18/img/array-passing-before-mapping.png "Active Effects are concatenated")

#### Rendering arrays

Can be achieved with JavaScript map() function.

**Note:** If after lambda _(=>)_ there is a method body _((x) => {//code to execute})_, it must have a return statement.

```jsx
export default function Player({ player }) {
  return (
    <div>
      <p>Nickname: {player.nickname}</p>
      <p>Level: {player.level}</p>
      <p>Class: {player.class}</p>
      <p>Active Effects:</p>
      <ul>
        {player.activeEffects.map((effect) => (
          <li>{effect}</li>
        ))}
      </ul>
    </div>
  );
}
```

![image](assets/v18/img/passed-array-with-mapping.png "Now player effects can be seen organized.")

- But after that an error can be seen in console about list item has no key attribute. This is a similar situation where Vue.js (<3) expects a key when looping a given array in order to render/apply animations etc. to virtual DOM elements.

![image](assets/v18/img/error-list-child-no-key.png)

- Assign a key to list item element so React can differentiate between them.
  - Keys have to be unique.
  - You CAN assign your keys random like from [UUID](https://www.npmjs.com/package/uuid).
  - You should NOT assign your keys with Math.random(). Or anything can cause clashing in that regard. Randomly generated numbers can clash and it is very slow for runtime in rendering. Random method will be executed every time a render occurs.
  - Your unique keys SHOULD be coming along with your dataset.
  - Do NOT use array index as key. Array can be manipulated and (eg. item removal) can result unexpected bugs.

```jsx
<li key={/* unique value goes here*/}> {/* item to render goes here*/} </li>
```

#### Rendering array of objects

Not as straight forward as listing arrays with non object types. If object of an array being called to render by developer, React will throw an error indicating that objects are not a valid React child.

```jsx
export default function Basket() {
  const basketItems = [
    { id: 1, name: "LEGO Speed Champions Ferrari F40 Competizione", price: 25 },
    { id: 2, name: "LEGO Speed Champions Lamborghini Countach", price: 30 },
    { id: 3, name: "LEGO Speed Champions McLaren Senna", price: 35 },
  ];

  return (
    <div>
      <ul>
        {basketItems.map((item) => (
          <li key={item.id}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

![image](/assets/v18/img/error-render-array-object-directly.png)

- With an error spaning the entire debug console, rendering objects might seem like a little daunting but the solution is simple. When we were not allowed to display props directly, we had to use `props.someProperty`. Just this time `object.someProperty`. Same should apply because both are objects.

```jsx
export default function Basket() {
  const basketItems = [
    { id: 1, name: "LEGO Speed Champions Ferrari F40 Competizione", price: 25 },
    { id: 2, name: "LEGO Speed Champions Lamborghini Countach", price: 30 },
    { id: 3, name: "LEGO Speed Champions McLaren Senna", price: 35 },
  ];

  return (
    <div>
      Basket:
      <ul>
        {basketItems.map((item) => (
          <li key={item.id}>
            {item.name} ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

### React Technicals

- If we console.log() something it will be seen as two outputs because of dev environment. React.StrictMode executes what's encapsulating twice. It should be removed when project released to production.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

### Nice To Have

- In VS Code function components can be created with "rfc" shortcut. Similarly class components can be created with "rcc" shortcut. Pressing enter or tab will create the component with the same name of created file. There are bunch more auto-complete shortcuts like component with props, when using react native etc. Check out by writing rf (for function components) or rc (for class components) and check out listed Intellisense.
