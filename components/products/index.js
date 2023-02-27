import Image from "next/image"
import styles from '../products/product.module.css'
import { inventory } from '../../data/inventory.js'
import { useState } from 'react'


export default function Product({

    img,
    title,
    price = 0,

}) {


    return (
        <div className={styles.product}>
            <Image src={img} alt={img} width={200} height={200}/>

            <div>
                <p>{title}</p>
            </div>
            <div>
                <p>{price}</p>
            </div>
            <div className={styles.colourDot}>
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

