import Image from "next/image";
import { useRouter } from "next/router";
import { FormEvent, MutableRefObject, useRef } from "react";
import UserPreview from "../UserPreview";

export default function SearchHeader() {
    const router = useRouter()

    const searchInputRef = useRef() as MutableRefObject<HTMLInputElement>

    const search = (e: FormEvent) => {
        e.preventDefault()
        const term = searchInputRef.current.value
        if (!term.trim()) return
        router.push(`/search?term=${term.trim()}`)
    }

    const clearSearchTerm = () => {
        searchInputRef.current.value = ''
    }

    return (
        <header className="flex sticky top-0 bg-white items-center px-6">
            <Image
                style={{ objectFit: 'cover' }} className="cursor-pointer" alt="google logo" width="170" onClick={() => { router.push('/') }}
                height="40" src="https://techcrunch.com/wp-content/uploads/2015/10/screen-shot-2015-10-08-at-4-20-16-pm.png" />




            <form className="flex border border-gray-200 shadow-lg rounded-full px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
                <input ref={searchInputRef} defaultValue={router.query.term} className="outline-none w-full" />
                <svg onClick={clearSearchTerm} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 text-gray-500 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 text-blue-500 hidden sm:inline-flex ml-3 border-l-2 pl-3 border-gray-300 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 text-blue-500 hidden sm:inline-flex ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <button onClick={search} type="submit" hidden></button>
            </form>


            <UserPreview className="ml-auto" />
        </header>
    )
}