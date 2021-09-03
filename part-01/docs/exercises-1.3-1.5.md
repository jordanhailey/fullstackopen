# Exercises 1.3 - 1.5

## 1.3 Assignment
> | base | solution |
> | --- | --- |
> | `ccc0a7e2ede91e7ff20544b3d9de8f78c05a1195` | `59b33c0607c862c45ea26a508989157794d4c68a` |

Modify the variable definitions of the `App` component as follows and also refactor the application so that it still works:

```javascript
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      ...
    </div>
  )
}
```

## 1.4 Assignment
> | base | solution |
> | --- | --- |
> | `d60484af31be4bbcedd3d3b39eb8163530fca9aa` | `3c86ae6173aef9fc1f1a09b722019a2ad1bb8bdc` |

Modify the variable definitions of the `App` component as follows and also refactor the application so that it still works:

```javascript
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      ...
    </div>
  )
}
```

## 1.5 Assignment
> | base | solution |
> | --- | --- |
> | `b1801986324bac9248a9c91e8fcf9daaa79f70e1` | `ddcf1bacf8d2e6510eb12e02e365ab2a553bff68` |

Let's take the changes one step further. Change the course and its parts into a single JavaScript object. Fix everything that breaks.

```javascript
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      ...
    </div>
  )
}
```
