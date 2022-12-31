import { useSession, signIn, signOut } from 'next-auth/react'

export default function UserPreview() {
    const { data: session } = useSession()
    console.log(session)
    if (session) {
        return (
            <>
                <img className="rounded-full h-10 w-10 hover:bg-gray-200 p-1 cursor-pointer" onClick={() => signOut()} src={session?.user?.image!} alt="Sign out" />
            </>
        )
    }
    return (
        <>
            <button className="bg-blue-500 text-white font-medium rounded-md px-4 py-2 hover:brightness-105 hover:shadow-md " onClick={() => signIn()}>Sign in</button>
        </>
    )
}