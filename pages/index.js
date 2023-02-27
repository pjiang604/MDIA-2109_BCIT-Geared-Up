import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { inventory } from '../data/inventory.js'
import Product from '../components/products'
import Filter from '../components/filter'
import Colours from '../components/colours'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {

  const [data, setData] = useState([...inventory.clothing]);

  const [filter, setFilter] = useState("none");
  const [category, setCategory] = useState("none")


  const changeFilter = (changeFil) => {
    if (changeFil == "male") {
      setFilter("Male");
    } else if (changeFil == "female") {
      setFilter("Female");
    } else if (changeFil == "unisex") {
      setFilter("Unisex");
    }
  }

  const changeCategory = (changeCat) => {
    if (changeCat == "hoodies") {
      setCategory("Hoodies");
    } else if (changeCat == "jackets") {
      setCategory("Jackets");
    } else if (changeCat == "headgear") {
      setCategory("Headgear");
    } else if ( changeCat == "none") {
      setCategory("none");
    }
}

return (
  <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon(1)/favicon.ico" />
    </Head>
    <nav className={styles.nav}>
      <Image className={styles.logo} src="/logo/logo.png"
        width={200}
        height={100} />
    </nav>

    <main className={styles.main}>
      <div className={styles.filterContainer}>
        <h1>Filter By:</h1>
        <ul className={styles.filter}>
          <li >
            <p onClick={() => changeCategory("none") + changeFilter("male")}>Male</p>
            <ul className={styles.male}>
              <li onClick={() => changeCategory("hoodies") + changeFilter("male")}>Hoodies</li>
              <li onClick={() => changeCategory("jackets") + changeFilter("male")}>Jackets</li>
              <li onClick={() => changeCategory("headgear") + changeFilter("male")}>Headgear</li>
            </ul>
          </li>
          <li>
            <p onClick={() => changeCategory("none") + changeFilter("female")}>Female</p>
            <ul className={styles.female}>
              <li onClick={() => changeCategory("hoodies") + changeFilter("female")}>Hoodies</li>
              <li onClick={() => changeCategory("jackets") + changeFilter("female")}>Jackets</li>
              <li onClick={() => changeCategory("headgear") + changeFilter("female")}>Headgear</li>
            </ul>
          </li>
          <li>
            <p onClick={() => changeCategory("none") + changeFilter("unisex")}>Unisex</p>
            <ul className={styles.unisex}>
              <li onClick={() => changeCategory("hoodies") + changeFilter("unisex")}>Hoodies</li>
              <li onClick={() => changeCategory("jackets") + changeFilter("unisex")}>Jackets</li>
              <li onClick={() => changeCategory("headgear") + changeFilter("unisex")}>Headgear</li>
            </ul>
          </li>
        </ul>
      </div>
      <Colours />
      <div className={styles.products}>
        {data && data.map((info, index) => {
          if (info.sex === `${filter}` && (info.category === `${category}` || `${category}` === "none")) {
            return (
              <Product key={index}
                img={info.image}
                title={info.title}
                price={info.cost}
                colours={info.colours}
              />)
          } else if (info.sex === `${filter}` && (info.category === `${category}` || `${category}` === "none")) {
            return (
              <Product key={index}
                img={info.image}
                title={info.title}
                price={info.cost}
                colours={info.colours}
              />)
          } else if (info.sex === `${filter}` && (info.category === `${category}` || `${category}` === "none")) {
            return (
              <Product key={index}
                img={info.image}
                title={info.title}
                price={info.cost}
                colours={info.colours}
              />)
          }
        })}

      </div>

    </main>
  </>
)
}
