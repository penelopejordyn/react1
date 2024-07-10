### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?  -react is a js library for building user interfaces. it has a virtual dom which makes rendering more effecient

- What is Babel? - translates jsx into react so browsers can read it

- What is JSX? -javascript xml, allows for html like code to be writted in js

- How is a Component created in React? - a component can be created by either using a function or a class

- What are some difference between state and props? -state is mutable and props are immutable

- What does "downward data flow" refer to in React? -the flow of props from a parent component to a child component

- What is a controlled component? - components that manage their own state

- What is an uncontrolled component? - componests whose state is controlled by the dom

- What is the purpose of the `key` prop when rendering a list of components? - to help react identify which items have changed, been added, or removed, improving the effeciency of the rendering process

- Why is using an array index a poor choice for a `key` prop when rendering a list of components? -if the items are reordered. componests will maintain their keys based on their original postiiton. this can lead to bugs

- Describe useEffect.  What use cases is it used for in React components? -use effect allows function components to preform side effects. it cam be used in manual dom maniplutaions

- What does useRef do?  Does a change to a ref value cause a rerender of a component? - use ref creates a reference to an element that persists across renders.

- When would you use a ref? When wouldn't you use one? - you'd want to use a ref for direct dom maniplulation. you wouldn't want to use a ref when you want the component to rerender

- What is a custom hook in React? When would you want to write one? - custom hooks are a way to ecapsulate logic. you'd want to use them because it helps you avoid rewriting logic for multiple componenents.
