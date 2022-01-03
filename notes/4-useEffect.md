# useEffect Hook
### The Effect Hook lets you perform side effects in function components.
* A "side effect" is anything that affects something outside the scope of the function being executed.
  * Data fetching / API Calls
  * setting up a subscription
  * manually changing the DOM in React components are all examples of side effects.


# Syntax:
`useEffect(callback, dependencies)`

Where: 
* callback: `function`
* dependencies: `Dependencies are optional parameter of type array`. 
```
useEffect(function(){
    ...Do Stuff here
}, [ele1, ele2, ele2])
```

When does useEffect hook calls?:
* By default, it runs both after the first render and after every update.`
  
# Dependencies argument:
dependencies argument of `useEffect(callback, dependencies)` lets you control when the side-effect runs. When dependencies are:

* Not provided: 
  - the side-effect runs after every rendering.
    ```
        Ex: useEffect(function(){
            ...do stuff here
        });
    ```
* B) An empty array `[]`: 
        
    - The side-effect runs once after the initial rendering. 
    - Similer to component did mount

    ```        
        Ex: useEffect(function(){
            ...do stuff here
        }, []);
    ```
    
* Has props or state values `[prop1, prop2, ..., state1, state2]`:
        
    - The side-effect runs only when any depenendecy value changes.
    - Similer to Component Did update in class component
    
    ```
    Ex: useEffect(function(){
            ...do stuff here
    },[x]);
    ```

useEffect = `componentDidMount + componentDidUpdate + componentWillUnmount`.

* You can maintain more than one `useEffect` in a single component.
  
# useEffect cleanup
* If we return a function within the method, this function will execute when the component gets unmounted.

        useEffect(function() {
            ...effect
            return() => {
                ...cleanup code
            }
        })