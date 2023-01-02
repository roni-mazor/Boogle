interface Props {
    searchTime: string,
    totalResults: string
}


export default function SearchDetails({ searchTime, totalResults }: Props) {


    return (
        <h3 className="text-sm text-gray-700">About {totalResults} results ({searchTime} seconds)</h3>
    )
}