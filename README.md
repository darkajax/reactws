# React

## Agenda
- Intro to React
- Coding: learning React through some small tasks


## Intro
- Simple
- Declarative
- Interactive data
- Components


## Virtual DOM
1. When something **could** have changed, re-render everything to a new DOM-representation
2. **Diff** new output with previous output
3. Update **only** what has changed


## Props
- immutable
- passed down to component from parent
- how to use it:
```javascript
this.props.<propName>
```

## State
- changes over time
- lives in a component
- it needs to be initialized in constructor
```javascript
constructor() {
  super();
  this.state = { age = 24 };
}
```
- it can be updated via `setState` method
```javascript
this.setState({age = this.state.age + 1});
```

## Styles
use `className="banner"` instead of `class="banner"` :)


## Element structure
```javascript
ReactDOMElement = {
  type : string,
  props : {
    children : ReactNodeList,
    className : string,
    etc...
  },
  key : string | boolean | number | null,
  ref : string | null
};
```

## Create Virtual DOM nodes
```javascript
React.createElement('div', { className: 'perro' }, 'Fido, wuau!');
```

outputs to:

```html
<div class="perro">
 Fido, wuau!
</div>
```

## JSX "magic"
```javascript
render() {
  return <div className="perro">
          Fido, wuau!
         </div>;
}
```

## Events
In React if we want to use events from DOM, we need to bind them first.
```javascript
constructor() {
  super();
  this.handleClick = this.handleClick.bind(this);
}

handleClick(evt) { ... }

render() {
  return <button onClick={this.handleClick} > Click Me </button>
}
```



## Lifecycle events
```javascript
componentDidMount() {...}
componentWillMount() {...}
componentWillUnmount() {...}
componentWillUpdate() {...}
componentDidUpdate() {...}
```

## Performance
```javascript
shouldComponentUpdate(nextProps, nextState) {}
 return (if the component should render() or not);
}
```

## How to start
```javascript
// index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './hello-world.jsx';

ReactDOM.render(
  <HelloWorld />,
  document.getElementById("content")
);
```

```javascript
// hello-world.jsx
import React from 'react';

export default class HelloWorld extends React.Component {
  render() {
    return <p>Hello, World!</p>;
  }
}

```


## Tasks:
1. Modify HelloWorld element to receive a name and show it as "Hello, {name}! :)"
2. Listen before mount the element if name is "fucker" change it to "bonito".
3. Add a button/link and listen to it, when the button is clicked increment a number and show it in the screen, initial value should be 0

4. Let's get serious: (twitter clone)
  1. Create an element capture a tweet (text only)
  2. Create an element to show a tweet (text and date of creation)
  3. create an element to list all captured tweets
  4. make it work.
