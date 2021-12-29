
Life without functional components & hooks
==========================================
* React.CreateClass
* Class in java script itself complex.
    - No one knows how this key word works. May be you can but for most of them out there it is difficult to understand.
    - Multiple life cycle
    - Calling super(props) qu
    ite annoying

* Hard to understand life cycles.

* Duplicate logic inside lifecycle methods
class List {

    componentDidMount() {
        this.GetList(this.props.id);
    }

    componentDidUpdate(prevProps) {
        if(prevState.id != this.props.id) {
            this.GetList(this.props.id);
        }
    }

    GetList() {
        // logic to get list
    }
    ...
}

* Sharing non visual logic. It’s hard to reuse stateful logic between components.
    May be done by higher order components, or render props.
    -> Complex
    -> Render props may lead to wrapper hell.

Simplest answer to this? -> Function



Hooks:
=====
* Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

* Hooks are now available with the release of v16.8.0.

* Completely opt-in:
 You can try Hooks in a few components without rewriting any existing code. But you don’t have to learn or use Hooks right now if you don’t want to.

* 100% backwards-compatible:
 Hooks don’t contain any breaking changes.

* There are no plans to remove classes from React.

* Hooks don’t replace your knowledge of React concepts. Instead, Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle.
