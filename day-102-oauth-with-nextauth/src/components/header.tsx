import { signIn, useSession } from "next-auth/react"


export default function Header() {
    const { data: session, status } = useSession();
    const handleLogin = (e: any) => {
        e.preventDefault();
        signIn();
    }

    return (
        <header>
            <div>

                {
                    !session && (
                        <div>
                            <span>You are not signed in</span>
                            <a href={`/api/auth/signin`}
                                onClick={handleLogin}
                            >Sign In</a>
                        </div>
                    )
                }

            </div>
        </header>
    )
}