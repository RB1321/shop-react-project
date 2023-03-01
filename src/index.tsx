import React from 'react'
import ReactDOM from 'react-dom/client'

// const title = React.createElement('h1', { id: 'title' }, 'Hello React.js')
// console.log(title)
//jsx - js extended

function List() {
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores eligendi ut error rerum ipsam. Tempora aspernatur
                officia, sequi, et minima excepturi quas dicta harum, beatae
                fugit animi aperiam itaque nobis?
            </p>
        </>
    )
}

type TitleProps = {
    name: string
    text?: string
    year?: number
}

const Title = ({ name, text, year }: TitleProps) => {
    return (
        <>
            <h1>{name}</h1>
            <span>{text}</span>
            <span>Year: {year}</span>
        </>
    )
}

const App = () => {
    return (
        <div className="app">
            <Title
                name="React"
                text=" ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores"
                year={10}
            />
            <Title
                name="App"
                text=" isdfdsgsgsget consectetur adipisicing elit.
                Asperiores"
                year={23}
            />

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
