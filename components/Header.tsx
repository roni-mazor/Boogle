import UserPreview from "./UserPreview";


export default function Header() {
    return (
        <header className="flex justify-between p-5 text-sm text-gray-700">
            <section className="flex space-x-4 items-center">
                <p className="link">About</p>
                <p className="link">Store</p>
            </section>
            <section className="flex space-x-4 items-center">
                <p className="link">Gmail</p>
                <p className="link">Images</p>
                <UserPreview />
            </section>
        </header>
    )
}