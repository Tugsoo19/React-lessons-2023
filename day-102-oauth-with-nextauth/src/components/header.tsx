import { signIn, signOut, useSession } from "next-auth/react"
import styles from "../styles/header.module.css"


export default function Header() {
    const { data: session, status } = useSession();
    const loading = status === "loading";

    const handleLogin = (e: any) => {
        e.preventDefault();
        signIn();
    }

    const handleLogout = (e: any) => {
        e.preventDefault();
        signOut();
    }

    return (
        <header>
            <noscript>
                <style>
                    {`.nojs-show { opacity:1; top:0;}`}
                </style>
            </noscript>
            <div className={styles.signedInStatus}>
                <div className={`nojs-show ${!session && loading ? styles.loading : styles.loaded}`}>
                    {
                        !session && (
                            <div>
                                <span>You are not signed in</span>
                                <a href={`/api/auth/signin`}
                                    onClick={handleLogin}
                                >Sign In</a>
                            </div>
                        )}

                    {session?.user && (
                        <div>
                            {session.user.image && (
                                <span style={{ backgroundImage: `url(${session.user.image})` }}
                                    className={styles.avatar}
                                />
                            )}
                            <span>
                                <small>Signed in as</small>
                                <br />
                                <strong>{session.user.email || session.user.name}</strong>
                            </span>
                            <a href={`/api/auth/signout`} onClick={handleLogout} className={styles.button}>
                                Sign out
                            </a>
                        </div>
                    )}
                </div>



            </div>
        </header>
    )
}