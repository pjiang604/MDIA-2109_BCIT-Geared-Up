import Image from "next/image"
import styles from '../products/product.module.css'



export default function ProductImg({

    img,

}) {


    return (
        <div className={styles.product}>
            <Image src={img} alt={img} width={200} height={200}/>
        </div>

    )
}