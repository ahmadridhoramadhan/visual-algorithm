import { Dispatch, SetStateAction } from "react";

export const selectionSort = async (arr: number[], setArr: Dispatch<SetStateAction<number[]>>, setCurrent: React.Dispatch<React.SetStateAction<number | null>>, setCurrent2: React.Dispatch<React.SetStateAction<number | null | number[]>>) =>{
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            await new Promise((resolve) => setTimeout(resolve, 50));
            setCurrent2(arr[j]);
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
                setCurrent(arr[minIndex]);
            }
        }
        // swap values
        const temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
        setArr([...arr]);
    }
}