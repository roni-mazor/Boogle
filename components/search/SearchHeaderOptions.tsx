import { useRouter } from "next/router"
import SearchHeaderOption from "./SearchHeaderOption"




export default function SearchHeaderOptions() {
    const router = useRouter()
    const changeSearchType = (type: string) => {
        if (type === 'all') type = ''
        router.query.searchType = type
        router.push(router)
    }
    return (
        <>
            <div className="flex justify-start pl-9 ">
                <SearchHeaderOption title="all" selected={!router.query.searchType} changeRoute={changeSearchType} />
                <SearchHeaderOption title="image" selected={router.query.searchType === 'image'} changeRoute={changeSearchType} />
            </div>
            <hr />
        </>
    )
}

