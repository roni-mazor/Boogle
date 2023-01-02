import SearchDetails from "./SearchDetails";

interface Props {
    searchTime: string,
    totalResults: string
}

export default function SearchResults({ searchTime, totalResults }: Props) {
    return (
        <div>
            <SearchDetails searchTime={searchTime} totalResults={totalResults} />

        </div>
    )
}