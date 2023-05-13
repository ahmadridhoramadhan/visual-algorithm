import { useState, useEffect, Dispatch, SetStateAction } from "react";

export function QuickSort(): JSX.Element {
    const [orders, setOrders] = useState<number[]>([]);
    const [current, setCurrent] = useState<number | null>(null);
    const [current2, setCurrent2] = useState<number[]>([0, 0]);
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


    // const quickSort = async (arr: number[], setArr: Dispatch<SetStateAction<number[]>>): Promise<number[]> => {
    //     console.log(arr);
    //     if (arr.length <= 1) {
    //         return arr;
    //     }
    //     const pivotIndex = Math.floor(arr.length / 2);
    //     const pivot = arr[pivotIndex];
    //     const left = [];
    //     const right = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         await new Promise((resolve) => setTimeout(resolve, 100));
    //         if (i === pivotIndex) {
    //             continue;
    //         }
    //         if (arr[i] < pivot) {
    //             left.push(arr[i]);
    //         } else {
    //             right.push(arr[i]);
    //         }
    //         const sortedArray = [...await quickSort(left, setArr), pivot, ...await quickSort(right, setArr)];
    //         setArr(sortedArray);
    //     }
    //     const sortedArray = [...await quickSort(left, setArr), pivot, ...await quickSort(right, setArr)];
    //     return sortedArray;
    // };
    const quickSort = async (arr: number[], setArr: Dispatch<SetStateAction<number[]>>) => {
        const stack = [[0, arr.length - 1]];

        while (stack.length) {
            const pair = stack.pop();
            if (!pair) continue;

            const [start, end] = pair;
            if (start >= end) continue;

            if (start >= end)
                continue;

            const pivot = arr[start];
            setCurrent(pivot);
            let i = start + 1, j = end;

            while (i <= j) {
                while (i <= end && arr[i] < pivot)
                    i++;
                while (j >= start && arr[j] > pivot)
                    j--;

                await new Promise((resolve) => setTimeout(resolve, 100));
                setCurrent2([arr[i], arr[j]]);
                if (i < j) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    setArr([...arr]);
                }
            }

            [arr[j], arr[start]] = [arr[start], arr[j]];

            await new Promise((resolve) => setTimeout(resolve, 100));
            // Update setArr after array changes
            setArr([...arr]);


            stack.push([start, j - 1], [j + 1, end]);
        }

        return arr;
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
        await quickSort(orders, setOrders);
        setSortStart(false);
        setCurrent(null);
        setCurrent2([0, 0]);
    };
    return (
        <div className="px-5 max-w-3xl w-full first:mt-20">
            <p className="text-2xl md:text-3xl">Quick Short</p>
            <div className="border-2 border-indigo-700 items-end pt-5 pb-2 px-2 flex gap-px transition-all h-96">
                {orders.map((order, index) => {
                    return (
                        <div style={{ height: `${(order) * 2}%` }} className={`w-[5%] bg-white ${current == order ? "!bg-green-600" : ''} ${current2[0] == order || current2[1] == order ? '!bg-red-600' : ''}`} key={index} data-order={order}></div>
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
