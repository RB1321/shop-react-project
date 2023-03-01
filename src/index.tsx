import React from 'react'
import ReactDOM from 'react-dom/client'

// const title = React.createElement('h1', { id: 'title' }, 'Hello React.js')
// console.log(title)
//jsx - js extended

const title = <h1 id="title">Hi React.js</h1>
const content = (
    <div>
        {title}
        {10 + 10}
        <ul className="list">
            <li>List item 1</li>
            <li>List item 2</li>
            <li> List item 3</li>
        </ul>
        <p>Hello</p>
    </div>
)
console.log(content)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode> {content}</React.StrictMode>)
