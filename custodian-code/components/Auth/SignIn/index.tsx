import { signOut, signIn, useSession } from "next-auth/react"

const SignIn: React.FC = () => {

    const { data: session, status } = useSession()

    return (
        <>
            {!session && (
                <>
                    <a
                        href={`/api/auth/signin`}
                        onClick={(e) => {
                            e.preventDefault()
                            signIn()
                        }}
                    >
                        Sign in
                    </a>
                </>
            )}
            {session?.user && <>
                <a
                    href={`/api/auth/signout`}
                    onClick={(e) => {
                        e.preventDefault()
                        signOut()
                    }}
                >
                    Sign out
                </a></>}
        </>
    )
}

export default SignIn
