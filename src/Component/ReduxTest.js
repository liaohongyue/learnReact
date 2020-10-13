import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = state =>({num:state})
const mapDispatchToProps = {
    add: () => ({type:'add'}),
    minus: () => ({type:"minus"}),
    asyncAdd: ()=> dispatch => {
        setTimeout( ()=>dispatch({type:'add'}) ,2000);
    } 
}

function RexduxTest({num,add, minus,asyncAdd}){
    return (
        <div>
            <p>{num}</p>
            <div>
                <button onClick={add} >+</button>
                <button onClick={minus}>-</button>
                <p>
                <button onClick={asyncAdd} >异步动作+</button>
                </p>
                
            </div>
        </div>

    )
}

export default  connect(mapStateToProps, mapDispatchToProps)(RexduxTest)
