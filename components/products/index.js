import Image from "next/image"
import styles from '../products/product.module.css'
import { inventory } from '../../data/inventory'
import { useState } from 'react'


export default function Product({

    img = "",
    title = "",
    colours = [],
    hexCol = [],
    price = 0,

}) {

    const [circle, setCircle] = useState([inventory.clothing.hex]);

    return (
        <div className={styles.product}>
            <Image src={img} width="200" height="200" />

            <div>
                <p>{title}</p>
            </div>
            <div>
                <p>{price}</p>
            </div>
            <div className={styles.colourDot}>
                {circle && circle.map((info, index) => {
                    {
                        return (
                            <div className={styles.colourDot} style={{ backgroundColor: `${colours}`}}>
                                <span key={index}></span>
                                {index}
                                {colours}
                                {hexCol}
                            </div>
                        )
                    }
                })}

            </div>
        </div>

    )
}

/**            <div>
                {colours.map(
                    (colours, index) => {
                        return (
                            <div style={{ color: `${colours}` }}>
                                <span style={{ backgroundColor: `${colours}` }} className={styles.colourDot}></span>
                            </div>
                        )
                    }
                )}
            </div> 
            
            <div className={styles.colourDot} style={{backgroundColor: "red"}}>
    <p>{colours}</p>
</div>
            
            */

