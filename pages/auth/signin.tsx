import Header from "../../components/Header";
import { getProviders, signIn, ClientSafeProvider } from "next-auth/react"
import { useRouter } from "next/router";

export default function signInPage({ providers }: { providers: ClientSafeProvider[] }) {
    const router = useRouter()
    return (
        <>
            <Header />
            {Object.values(providers).map((provider) => (
                <div className="flex flex-col items-center gap-3" key={provider.name}>
                    <img onClick={() => { router.push('/') }} className="w-72 object-cover cursor-pointer" src="https://techcrunch.com/wp-content/uploads/2015/10/screen-shot-2015-10-08-at-4-20-16-pm.png" alt="" />
                    <p className="italic">This website is created for educational purposes</p>
                    <button className="bg-red-500 text-white font-medium rounded-lg px-4 py-2 hover:brightness-105 hover:shadow-md "
                        onClick={() => signIn(provider.id, { callbackUrl: '/' })}>Sign in with {provider.name}</button>
                </div>
            ))}
        </>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders()
    return {
        props: { providers }
    }
}