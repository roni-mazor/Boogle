import HTMLReactParser from "html-react-parser";
import { resourceLimits } from "worker_threads";

export default function ImageSearchResults({ items }: { items: any[] }) {
    console.log(items)

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
            {items.map(item => (
                <li key={item.link} className="group p-2 ">
                    <a target="_blank"  href={item.image.contextLink}>
                        <img src={item.link} alt={item.title} className="group-hover:shadow-xl w-full h-60 object-contain rounded" />
                        <a target="_blank" href={item.image.contextLink}>
                            <h2 className="text-gray-500 truncate group-hover:underline">{item.title}</h2>
                        </a>
                        <a target="_blank" href={item.image.contextLink}>
                            <p className="truncate group-hover:underline" >{item.displayLink}</p>
                        </a>

                    </a>

                </li>
            ))}

        </ul>
    )
}