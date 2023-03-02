import styles from './colours.module.css'

export default function Colours({

    colours,

}) {
    return (
            <div className={styles.colourDot} style={{backgroundColor: colours}}>
            </div>

    )
}