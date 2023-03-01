import React from 'react'
import ReactDOM from 'react-dom/client'

// const title = React.createElement('h1', { id: 'title' }, 'Hello React.js')
// console.log(title)
//jsx - js extended

function List() {
    return (
        <React.Fragment>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <p>dsgdfgdsdfsdfg</p>
        </React.Fragment>
    )
}

function Title() {
    return <h1>Hello TS</h1>
}

const App = () => {
    return (
        <div className="app">
            <Title />
            <List />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
