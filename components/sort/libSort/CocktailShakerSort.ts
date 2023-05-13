import { Dispatch, SetStateAction } from "react";

export const cocktailShakerSort = async (arr: number[], setArr: Dispatch<SetStateAction<number[]>>, setCurrent: React.Dispatch<React.SetStateAction<number | null>>, setCurrent2: React.Dispatch<React.SetStateAction<number | null | number[]>>) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        for (let i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                await new Promise((resolve) => setTimeout(resolve, 50));
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                setArr([...arr]);
                setCurrent2(arr[i+1])
            }
        }
        right--;
        
        for (let i = right; i > left; i--) {
            if (arr[i] < arr[i - 1]) {
                await new Promise((resolve) => setTimeout(resolve, 50));
                const temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;
                setArr([...arr]);
                setCurrent2(arr[i-1])
            }
        }
        left++;
    }
};