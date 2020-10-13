import React, { Component, useContext } from 'react'

const MyContext = React.createContext()
const { Provider } = MyContext
const { Consumer } = MyContext


function Child(props) {
    return <div>
        Child:{props.bar}
    </div>
}

function Child2(props) {
    const ctx = useContext(MyContext)
    return <div>
        Child:{ctx.bar}
    </div>
}


export default function ContextTest() {
    return (
        <div>
            <Provider value={{ bar: "barValue" }}  >
                <div>
                    <Consumer>
                        {value => <Child {...value} />}
                    </Consumer>
                </div>
                <Child2></Child2>
            </Provider>
            
        </div>
    )
}