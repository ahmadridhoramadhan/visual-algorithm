import { useEffect, useState } from "react";
import { InputRange } from "./customInput/InputRange";
import Link from "next/link";
import sortInterface from "../../utils/interfaces/sort/sortInterface";
import { useRouter } from "next/router";

export default function Sort({ title, sortFunction }: sortInterface): JSX.Element {
    const [orders, setOrders] = useState<number[]>([]);
    const [current, setCurrent] = useState<number | null>(null);
    const [current2, setCurrent2] = useState<number | null | number[]>(null);
    const [sortStart, setSortStart] = useState(false);
    const router = useRouter()

    function camelCase(str: string): string {
        return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
            if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
        });
    }

    const random = () => {
        function randomSort() {
            return Math.random() - 0.5;
        }
        const shuffled = orders.slice().sort(randomSort);
        setOrders(shuffled);
    };

    const handleSort = async () => {
        setSortStart(true);
        await sortFunction(orders, setOrders, setCurrent, setCurrent2);
        setSortStart(false);
        setCurrent(null);
        setCurrent2(null);
    };

    return (
        <div className="px-5 max-w-3xl w-full first:mt-20">
            <p className="text-2xl md:text-3xl capitalize ml-2 mb-1 "><Link href={`detailSort/${camelCase(title)}`} className="hover:text-transparent bg-clip-text font-semibold hover:text-3xl md:hover:text-4xl bg-gradient-to-br from-indigo-600 to-pink-400 transition-all">{title}</Link></p>
            <div className="border-2 border-indigo-700 items-end pt-5 pb-2 px-2 flex gap-px transition-all h-96">
                {orders.map((order, index) => {
                    return (
                        <div style={{ height: `${(order / orders.length) * 100}%` }} className={`w-[5%] bg-white ${current == order ? "!bg-green-600" : ""} ${(current2 instanceof Array) ? (current2[0] == order || current2[1] == order) ? '!bg-red-700' : '' : current2 == order ? '!bg-red-700' : ''}`} key={index} data-order={order}></div>
                    );
                })}
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-between mt-4 px-3">
                <button className="px-4 py-2 border-2 rounded-xl border-indigo-700 hover:bg-indigo-700 transition-colors whitespace-nowrap md:order-1 order-2" onClick={handleSort}>{sortStart ? 'sorting is in progress' : 'start Sort'}</button>
                <InputRange isDisabled={sortStart} setArr={setOrders} />
                <button className={`px-4 py-2 border-2 rounded-xl border-indigo-700 hover:bg-indigo-700 transition-colors order-3 ${sortStart ? 'opacity-60 cursor-not-allowed' : ''}`} disabled={sortStart} onClick={random}>Random</button>
            </div>
        </div>
    );
}