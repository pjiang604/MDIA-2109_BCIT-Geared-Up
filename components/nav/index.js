import Image from 'next/image'
import styles from '../nav/nav.module.css'

export default function Nav() {
    return (
        <Image
            className={styles.logo}
            src="/logo/logo.png"
            alt="/logo/logo.png"
            width={200}
            height={100} />
    )
}




