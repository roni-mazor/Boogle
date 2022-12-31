import Head from "next/head";
import SearchHeader from "../components/search/SearchHeader";

export default function Search() {
    return (
        <div>
            <Head>
                <title>Search Page</title>
            </Head>
            <SearchHeader/>
        </div>
    )
}