import classes from './List.module.css'
type Props = {}
console.log(classes)
const { content, test, articleDescription } = classes
export const List = (props: Props) => {
    let data = false
    let styleObj = {
        color: 'white',
        backgroundColor: data ? 'purple' : 'tomato',
        padding: '15px',
    }
    return (
        <>
            <ul>
                <li>111</li>
                <li>2222</li>
                <li>3333333</li>
            </ul>
            <p className={`${articleDescription} ${data ? content : test}`}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores eligendi ut error rerum ipsam. Tempora aspernatur
                officia, sequi, et minima excepturi quas dicta harum, beatae
                fugit animi aperiam itaque nobis?
            </p>
            <p style={styleObj}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores eligendi ut error rerum ipsam. Tempora aspernatur
                officia, sequi, et minima excepturi quas dicta harum, beatae
                fugit animi aperiam itaque nobis?
            </p>
            <p
                style={{
                    color: 'white',
                    backgroundColor: data ? 'yellow' : 'blue',
                    padding: '15px',
                }}
            >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores eligendi ut error rerum ipsam. Tempora aspernatur
                officia, sequi, et minima excepturi quas dicta harum, beatae
                fugit animi aperiam itaque nobis?
            </p>
        </>
    )
}
// export default List
