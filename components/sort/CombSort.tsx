import { useState, useEffect, Dispatch, SetStateAction } from "react";

export function CombSort(): JSX.Element {
    const [orders, setOrders] = useState<number[]>([]);
    const [current, setCurrent] = useState<number | null>(null);
    const [current2, setCurrent2] = useState<number | null>(null);
    const [sortStart, setSortStart] = useState(false);

    useEffect(() => {
        setOrders([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50
        ]);
    }, []);


    const combSort = async (arr: number[], setArr: Dispatch<SetStateAction<number[]>>) => {
        const shrinkFactor = 1.3;
        let gap = arr.length;
        let swapped = true;

        while (gap > 1 || swapped) {
            if (gap > 1) {
                gap = Math.floor(gap / shrinkFactor);
            }
            let i = 0;
            swapped = false;

            while (i + gap < arr.length) {
                await new Promise((resolve) => setTimeout(resolve, 50));
                setCurrent(arr[i]);
                setCurrent2(arr[i + gap]);
                if (arr[i] > arr[i + gap]) {
                    const temp = arr[i];
                    arr[i] = arr[i + gap];
                    arr[i + gap] = temp;
                    setArr([...arr]);
                    swapped = true;
                }
                i++;
            }
        }
    };





    const random = () => {
        function randomSort() {
            return Math.random() - 0.5;
        }
        const shuffled = orders.slice().sort(randomSort); // membuat salinan order asli terlebih dahulu
        setOrders(shuffled);
    };

    const handleSort = async () => {
        setSortStart(true);
        await combSort(orders, setOrders);
        setSortStart(false);
        setCurrent(null);
        setCurrent2(null);
    };
    return (
        <div className="px-5 max-w-3xl w-full first:mt-20">
            <p className="text-2xl md:text-3xl">Comb Short</p>
            <div className="border-2 border-indigo-700 items-end pt-5 pb-2 px-2 flex gap-px transition-all h-96">
                {orders.map((order, index) => {
                    return (
                        <div style={{ height: `${(order) * 2}%` }} className={`w-[5%] bg-white ${current == order ? "!bg-green-600" : ''} ${current2 == order ? '!bg-red-600' : ''}`} key={index} data-order={order}></div>
                    );
                })}
            </div>
            <div className="flex justify-between mt-4 px-3">
                <button className="px-4 py-2 border-2 rounded-xl border-indigo-700 hover:bg-indigo-700 transition-colors" disabled={sortStart} onClick={handleSort}>{sortStart ? 'sorting is in progress' : 'start Sort'}</button>
                <button className="px-4 py-2 border-2 rounded-xl border-indigo-700 hover:bg-indigo-700 transition-colors" onClick={random}>Random</button>
            </div>
        </div>
    );
}
