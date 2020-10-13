import React from 'react';
function Dialog(props){
    return (
    <div style={{border:"4px solid blue"}} >{props.children}</div>
    )
}

const Api = {
    getUser(){
        return {name:"Jerry",age:"20"}
    }
}

function Fetcher(props){
    const user = Api[props.name]();
    return props.children(user)
}

function Filter({children,type}){
    return (
        <div>
            {React.Children.map(children, child=>{
                if(child.type !== type){
                    return;
                }
                return child;
            })}
        </div>
    )
}

function RadioGroup(props){
    return <div>
        {React.Children.map(props.children, child => {
            return React.cloneElement(child,{name:props.name})
        })}
    </div>
}

function Radio({children, ...rest}){
    return (
        <label >
            <input type="radio" {...rest}  ></input>
            {children}
        </label>
    )

}

export default function WelcomeDialog(){
    return (
        <Dialog>
            <h1>欢迎光临</h1>
            <Fetcher name="getUser" >
                {({name,age})=>(<p>{name}-{age}</p>)}
            </Fetcher>
            <Filter type="p">
                <h1>this is h1</h1>
                <h2>this is h2</h2>
                <p>this is p lable</p>
                <a> this is a lable</a>
            </Filter>
            <RadioGroup name="mvvm" >
                <Radio value="vue">vue</Radio>
                <Radio value="react">react</Radio>
                <Radio value="angular">angular</Radio>   
            </RadioGroup>
        </Dialog>
    )
}



