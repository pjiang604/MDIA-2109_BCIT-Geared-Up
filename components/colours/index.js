import styles from '../colours/colours.module.css'
import { useState, useEffect } from 'react'
import { inventory } from '../../data/inventory'


export default function Colours({

    colour = "red",


}) {
    const [data, setData] = useState([...inventory.clothing]);
    const [color, setColor] = useState([...inventory.clothing])

    const changeColor = (changeCol) => {
        if (changeFil == "male") {
            setFilter("Male");
        } else if (changeFil == "female") {
            setFilter("Female");
        } else if (changeFil == "unisex") {
            setFilter("Unisex");
        }
    }

    return (
        <div className={styles.dots} style={{ backgroundColor: colour }}>



        </div>
    )
}