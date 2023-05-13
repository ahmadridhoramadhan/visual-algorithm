import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function InputRange({ isDisabled, setArr }: { isDisabled?: boolean; setArr: Dispatch<SetStateAction<number[]>>; }): JSX.Element {

    const [rangeValue, setRangeValue] = useState(20)

    const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setRangeValue(value)
        let arr = [];
        for (let i = 1; i <= value; i++) {
            arr.push(i);
        }
        setArr(arr);
    };
    useEffect(() => {
        let arr = [];
        for (let i = 1; i <= 20; i++) {
            arr.push(i);
        }
        setArr(arr);
    }, [setArr]);
    return (
        <div className={`flex md:gap-3 gap-2 items-center order-1 mx-3 mb-3 w-full select-none`}>
            <span>{rangeValue}</span>
            <input type={'range'} name="orders" min="20" max="200" defaultValue={20} className={`w-full select-none appearance-none rounded-xl bg-indigo-700/60 outline-none transition-colors hover:bg-indigo-700/95 h-3 ${isDisabled ? 'opacity-60 cursor-not-allowed' : ''}`} disabled={isDisabled} onChange={handleRange} />
        </div>
    );
}
