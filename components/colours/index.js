import styles from '../colours/colours.module.css'


export default function Colours({

    colour = "red"

}) {
    return (
        <div className={styles.dots} style={{backgroundColor: colour}}>
            {colour}
        </div>
    )
}