import HTMLReactParser from "html-react-parser";

export default function DefaultSearchResults({ items }: { items: any[] }) {

    return (<ul className="mt-3">
        {items.map(item => (
            <li className="max-w-xl mb-4" key={item.link}>
                <div> 
                    <a target="_blank" rel="noreferrer" href={item.link} className="text-sm truncate">
                        {item.formattedUrl}
                    </a>
                    <a target="_blank" rel="noreferrer" href={item.link} className="text-xl truncate text-blue-800 hover:underline hover:underline-offset-1">
                        <h2 >{item.title}</h2>
                    </a>
                </div>
                <p className="cursor-none text-gray-600">{HTMLReactParser(item.htmlSnippet)}</p>
            </li>
        ))}
    </ul>)
}