# Reproduce bug
```
git clone https://github.com/ReasonableDeveloper/react-dynamic-lazy-load-bug.git && cd react-dynamic-lazy-load-bug
yarn
yarn start
```

# Issue description

I'm always getting an error and warning when trying to dynamic lazy load the Button component.

Warning: Critical dependency: the request of a dependency is an expression

```
Error: Cannot find module './Button'
(anonymous function)
.../dynamic-lazy-load/src lazy groupOptions: {} namespace object:5
```
