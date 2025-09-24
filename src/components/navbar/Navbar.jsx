import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },

  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },

  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },

  {
    id: 4,
    title: "About",
    url: "/about",
  },

  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },

  {
    id: 7,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Karim</Link>
      <div className={styles.links}>
        {links.map(link=>(
          <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
        ))}
        <button className={styles.logout}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar

















// import Link from 'next/link'
// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
//       <Link href="/">Karim</Link>
//       <div>
//         <Link href="/">Home</Link>
//         <Link href="/portfolio">Portfolio</Link>
//         <Link href="/blog">Blog</Link>
//         <Link href="/about">About</Link>
//         <Link href="/contact">Contact</Link>
//         <Link href="/dashboard">Dashboard</Link>
//       </div>
//     </div>
//   )
// }

// export default Navbar