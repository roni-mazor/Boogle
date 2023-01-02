interface Props {
    searchTime: string,
    totalResults: string
}


export default function SearchDetails({ searchTime, totalResults }: Props) {


    return (
        <h3 className=" pl-11 text-gray-700">About {totalResults} results ({searchTime} seconds)</h3>
    )
}