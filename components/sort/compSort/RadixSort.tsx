import { useState, useEffect, Dispatch, SetStateAction } from "react";

export function RadixSort(): JSX.Element {
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


    const radixSort = async (arr: number[], setArr: Dispatch<SetStateAction<number[]>>) => {
        // Cari nilai maksimum pada array
        const max = Math.max(...arr);

        // Looping berdasarkan digit dari nilai maksimum
        for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
            // Inisialisasi array yang akan diisi kembali pada setiap iterasi
            let output = new Array(arr.length).fill(0);

            // Inisialisasi array counter
            let count = new Array(10).fill(0);

            // Menghitung kemunculan setiap digit
            for (let i = 0; i < arr.length; i++) {
                let digit = Math.floor((arr[i] / exp) % 10);
                count[digit]++;
            }

            // Menjumlahkan setiap counter untuk mendapatkan posisi akhir setiap digit
            for (let i = 1; i < 10; i++) {
                count[i] += count[i - 1];
            }

            // Menempatkan setiap elemen pada array output berdasarkan digitnya
            for (let i = arr.length - 1; i >= 0; i--) {
                let digit = Math.floor((arr[i] / exp) % 10);
                output[count[digit] - 1] = arr[i];
                count[digit]--;
            }

            // Setiap iterasi, array arr akan diisi kembali dengan array output
            for (let i = 0; i < arr.length; i++) {
                arr[i] = output[i];
                setArr([...arr]); // setiap kali ada perubahan, panggil setArr untuk memperbarui tampilan
                await new Promise((resolve) => setTimeout(resolve, 100)); // memberi jeda agar proses sorting bisa dilihat dengan jelas
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
        await radixSort(orders, setOrders);
        setSortStart(false);
        setCurrent(null);
        setCurrent2(null);
    };
    return (
        <div className="px-5 max-w-3xl w-full first:mt-20">
            <p className="text-2xl md:text-3xl">Radix Short</p>
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
