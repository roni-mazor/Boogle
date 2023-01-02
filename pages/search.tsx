import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import SearchHeader from "../components/search/SearchHeader";
import SearchResults from "../components/search/SearchResults";
import mookData from "../google-search-mock"

export default function Search({ results }: { results: any }) {
    console.log(results)
    const { formattedSearchTime, formattedTotalResults } = results.searchInformation
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>{router.query.term}-Search page</title>
            </Head>
            <SearchHeader />
            <SearchResults searchTime={formattedSearchTime} totalResults={formattedTotalResults} items={results.items} />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    console.log(context)
    // const results = await fetch(
    //     `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${(context.query.searchType && '&searchType=image')}`
    // ).then((res) => res.json())
    const results = mookData
    return { props: { results } }

}