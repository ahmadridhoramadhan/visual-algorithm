import { Dispatch, SetStateAction } from "react";

export const combSort = async (arr: number[], setArr: Dispatch<SetStateAction<number[]>>, setCurrent: React.Dispatch<React.SetStateAction<number | null>>, setCurrent2: React.Dispatch<React.SetStateAction<number | null | number[]>>) => {
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