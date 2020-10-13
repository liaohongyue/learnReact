import React from 'react'
import { Route, BrowserRouter, Link } from 'react-router-dom'

function Detail(props) {
    console.log(props)
    return <div>
        {props.match.params.course}
    </div>
}


function Home(params) {
    return <div>
        <ul>
            <li>
                <Link to="/detail/Java">Java</Link>
            </li>
            <li>
                <Link to="/detail/C++">C++</Link>
            </li>
            <li>
                <Link to="/detail/Python">Python</Link>
            </li>
        </ul>
    </div>
}

function About() {
    return <div>
        About div
    </div>
}


export default function RouteSample() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">index</Link>
                        </li>
                        <li>
                            <Link to="/about"  >about Page</Link>
                        </li>
                    </ul>
                    <Route exact path="/" component={Home} />
                    <Route path="/detail/:course" component={Detail}  />
                    <Route path="/about" component={About} />
                </div>

            </BrowserRouter>
        </div>
    )
}
