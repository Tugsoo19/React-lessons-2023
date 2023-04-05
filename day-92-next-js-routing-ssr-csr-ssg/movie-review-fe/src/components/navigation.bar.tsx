import React from "react"
import styles from "@/styles/Navbar.module.css"
import Link from "next/link";


export default function NavigationBar(): JSX.Element {
    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <img src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg" alt="" />
                </div>
                <input className={styles.input} placeholder="Search movies, TV, actors, more..." />
            </div>
            <div className={styles.right}>
                <div className={styles.login}>
                    <a>What's the Tomatometer?</a>
                    <a>Critics</a>
                    <a>LOGIN/SIGNUP</a>
                </div>
                <div className={styles.nav}>
                    <Link href="/movies">Movies</Link>
                    <Link href="/contact">TV shows</Link>
                    <Link href="/greeting/John?age=25">News</Link>
                    {/* <Link href="/posts/2021-08-01/first-post">Post page</Link> */}
                    <Link href={{
                        pathname: "/posts/[date]/[slug]",
                        query: { date: Date(), slug: "first-post" }
                    }}>Showtimes</Link>
                </div>

            </div>


        </div>
    )
}