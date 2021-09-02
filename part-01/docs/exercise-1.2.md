# Exercise 1.2

## Assignment
Refactor the `Content` component so that it does not render any names of parts or their number of exercises by itself. Instead it only renders three `Part` components of which each renders the name and number of exercises of one part.

```javascript
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}
```

## Base code
See commit hash `78378228435c82f82d87d6706017ed2f85d916b2`
