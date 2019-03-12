## PILARES

### funciones puras

```js
const enhance = compose(
  withState("count", "updateCountStateWith", 0),
  withHandlers({
    increment: ({ updateCountStateWith }) => updateCountStateWith(inc),
    decrement: ({ updateCountStateWith }) => updateCountStateWith(dec)
  }),
  lifeCycle({
    componentDidMount: async component => {
      await delay(3000)
      component.props.updateCountStateWith(inc)
    }
  }),
  branch(({ count }) => count <= 0, Spinner)
)
```

--

## PILARES

### compose

```js
const enhance = compose(
  withState("count", "updateCountStateWith", 0),
  withHandlers({
    increment: ({ updateCountStateWith }) => updateCountStateWith(inc),
    decrement: ({ updateCountStateWith }) => updateCountStateWith(dec)
  }),
  lifeCycle({
    componentDidMount: async component => {
      await delay(3000)
      component.props.updateCountStateWith(inc)
    }
  }),
  branch(({ count }) => count <= 0, Spinner)
)
```

--

## PILARES

### curry

```js
const enhance = compose(
  withState("count", "updateCountStateWith", 0),
  withHandlers({
    increment: ({ updateCountStateWith }) => updateCountStateWith(inc),
    decrement: ({ updateCountStateWith }) => updateCountStateWith(dec)
  }),
  lifeCycle({
    componentDidMount: async component => {
      await delay(3000)
      component.props.updateCountStateWith(inc)
    }
  }),
  branch(({ count }) => count <= 0, Spinner)
)
```

--

## PILARES

### HOF

```js
const enhance = compose(
  withState("count", "updateCountStateWith", 0),
  withHandlers({
    increment: ({ updateCountStateWith }) => updateCountStateWith(inc),
    decrement: ({ updateCountStateWith }) => updateCountStateWith(dec)
  }),
  lifeCycle({
    componentDidMount: async component => {
      await delay(3000)
      component.props.updateCountStateWith(inc)
    }
  }),
  branch(({ count }) => count <= 0, Spinner)
)
```

--


## QUESTIONS

-- 

## QUE ESPERAMOS DE TI