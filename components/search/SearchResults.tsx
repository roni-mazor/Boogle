
import { NextRouter } from "next/router";
import DefaultSearchResults from "./DefaultSerachResults";
import ImageSearchResults from "./ImageSearchResults";
import SearchDetails from "./SearchDetails";

interface Props {
    searchTime: string,
    totalResults: string,
    items: any[],
    router: NextRouter
}

export default function SearchResults({ searchTime, totalResults, items, router }: Props) {

    return (
        <div className=" sm:pl-11">
            <SearchDetails searchTime={searchTime} totalResults={totalResults} />
            {(router.query.searchType === 'image') ?
                <ImageSearchResults items={items} /> :
                <DefaultSearchResults items={items} />}


        </div>
    )
}