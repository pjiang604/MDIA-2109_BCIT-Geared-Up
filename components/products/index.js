import Image from "next/image"
import styles from '../products/product.module.css'


export default function Product( {

    img = "",
    title = "",
    colours = "",
    price = 0,

}) {
    return (
        <div className={styles.product}>
            <Image src={img} width="200" height="200" />
            <div>
                <p>{title}</p>
            </div>
            <div>
                <p>{price}</p>
            </div>
        </div>
    )
}