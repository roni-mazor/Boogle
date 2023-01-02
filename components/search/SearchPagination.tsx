import { useRouter } from "next/router"

export default function SearchPagination() {
    const pages = [1, 11, 21, 31, 41, 51, 61, 71, 81, 91]
    const router = useRouter()
    const { firstResult } = router.query
    const movePage = (num: number) => {
        router.query.firstResult = num + ''
        router.push(router)
    }
    const goNext = () => {
        if (firstResult) {
            router.query.firstResult = (+firstResult + 10) + ''
            router.push(router)
        }
    }
    const goPrev = () => {
        if (firstResult) {
            router.query.firstResult = (+firstResult - 10) + ''
            router.push(router)
        }
    }

    return (
        <div className="flex justify-center pb-7 text-4xl font-semibold text-blue-500">

            <div className="flex justify-center relative">
                {(firstResult && +firstResult > 1) && <button onClick={goPrev} className="font-normal hover:underline prev-page-positioner absolute text-sm flex items-end flex-col gap-1 bottom-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    <p>
                        Previous
                    </p>
                </button>}
                <p className="">G</p>
                {pages.map((num, index) => (
                    <div className={`cursor-pointer ${(firstResult && +firstResult === num) ? 'text-red-700' : 'text-yellow-500'}`} onClick={() => movePage(num)}>
                        o
                        <p className="text-center text-sm text-blue-500 font-regular hover:underline">{index + 1}</p>
                    </div>
                ))}
                <p>g</p>
                <p className="text-green-600">l</p>
                <p className="text-red-700">e</p>
                {(firstResult && +firstResult < 91) && <button onClick={goNext} className="font-normal hover:underline next-page-positioner absolute text-sm flex items-start flex-col gap-1 bottom-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>

                    <p>
                        Next
                    </p>
                </button>}
            </div>

        </div>
    )
}