import { useEffect, useState } from "react";
import { InputRange } from "../customInput/InputRange";

export function BubbleSort(): JSX.Element {
    const [orders, setOrders] = useState<number[]>([]);
    const [current, setCurrent] = useState<number | null>(null);
    const [current2, setCurrent2] = useState<number | null>(null);
    const [sortStart, setSortStart] = useState(false);

    const random = () => {
        function randomSort() {
            return Math.random() - 0.5;
        }
        const shuffled = orders.slice().sort(randomSort); // membuat salinan order asli terlebih dahulu
        setOrders(shuffled);
    };

    const bubbleSort = async (arr: number[], setArr: React.Dispatch<React.SetStateAction<number[]>>, sortStart: boolean) => {
        const len = arr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - 1 - i; j++) {
                await new Promise((resolve) => setTimeout(resolve, 50));
                setCurrent2(arr[j]);
                if (arr[j] > arr[j + 1]) {
                    const temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    setArr([...arr]);
                }
            }
        }
    };

    const handleSort = async () => {
        setSortStart(true);
        await bubbleSort(orders, setOrders, sortStart);
        setSortStart(false);
        setCurrent(null);
        setCurrent2(null);
    };

    return (
        <div className="px-5 max-w-3xl w-full first:mt-20">
            <p className="text-2xl md:text-3xl">Bubble Short</p>
            <div className="border-2 border-indigo-700 items-end pt-5 pb-2 px-2 flex gap-px transition-all h-96">
                {orders.map((order, index) => {
                    return (
                        <div style={{ height: `${(order / orders.length) * 100}%` }} className={`w-[5%] bg-white ${current == order ? "!bg-green-600" : ""} ${current2 == order ? '!bg-red-700' : ''}`} key={index} data-order={order}></div>
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


