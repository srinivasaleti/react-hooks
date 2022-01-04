# useContext
* `useContext` hook is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level.
* Accepts a context object (the value returned from React.createContext) and returns the current context value for that context.
# How to use UseContext?
* create context and export if it is not present in the intended file.
  Ex: 
  ```
  const UserContext = createContext(userContext)
  ```
* Wrap to level component under context provider. Here we can set the value in the context
  
  ```
  UserContext.Provider value={user}>
        <div>
            <Profile />
        </div>
    </UserContext.Provider>
  ```

* Accessing the context.
  
  ```
  const user = useContext(UserContext);
  ```