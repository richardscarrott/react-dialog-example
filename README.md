# React Dialog Example

An example dialog using [`react-gateway`](https://github.com/cloudflare/react-gateway) and [`react-motion`](https://github.com/chenglou/react-motion).

## Usage

```js
// In any component.
const C = () => showDialog ? <Dialog name="welcome" message="Hello World." /> : null
```

## Features
- Enter / leave animation will not be interrupted if parent component is unmounted.
- Is treated like any other component, i.e. if you want to show it you render it, if you don't, don't.
    - This is contrary to frameworks like react-bootstrap and material-ui which require it to always render (including children) and instead ask you to pass an open={true} prop for it to determine whether it's shown.
- Can be styled with position absolute (rather than relying on position fixed) without worrying about the position of parent components as it's transparently rendered in the root component (react-gateway).
- Works with SSR.
