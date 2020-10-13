import React, { Component } from 'react'

function Kaikeba(props) {
    return <div>{props.stage}-{props.name}</div>
}


const withKaikeba = Comp =>{

    return props =>  <Comp  name={'高阶组件'}  {...props} />
}

const NewKaikeba = withKaikeba(Kaikeba)


export default class Hoc extends Component {
    render() {
        return (
            <div>
                <NewKaikeba stage="React"></NewKaikeba>
            </div>
        )
    }
}
