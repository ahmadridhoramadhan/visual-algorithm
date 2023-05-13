import { Dispatch, SetStateAction } from "react";

export const countingSort = async (arr: number[], setArr: Dispatch<SetStateAction<number[]>>, setCurrent: React.Dispatch<React.SetStateAction<number | null>>, setCurrent2: React.Dispatch<React.SetStateAction<number | null | number[]>>) => {
    let count = new Array(256).fill(0);
    let output = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    for (let i = 1; i < 256; i++) {
        count[i] += count[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
        await new Promise((resolve) => setTimeout(resolve, 100));
        setCurrent(arr[i]);
        setArr([...output]);
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }

    setArr([...arr]);
};