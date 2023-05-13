import { Dispatch, SetStateAction } from "react";

export const shellSort = async (arr: number[], setArr: Dispatch<SetStateAction<number[]>>, setCurrent: React.Dispatch<React.SetStateAction<number | null>>, setCurrent2: React.Dispatch<React.SetStateAction<number | null | number[]>>) => {
    let n = arr.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j;
            setCurrent(arr[i]);
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                setCurrent2(arr[j - gap]);
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
            await new Promise((resolve) => setTimeout(resolve, 50));
            setArr([...arr]);
        }
    }
};