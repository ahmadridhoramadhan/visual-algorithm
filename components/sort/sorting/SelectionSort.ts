import { sortFunction } from "../../../utils/types/sort/sortFunction";


export const selectionSort: sortFunction = async (arr, setArr, setCurrent, setCurrent2) => {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            await new Promise((resolve) => setTimeout(resolve, 50));
            setCurrent(arr[j]);
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
                setCurrent2(arr[minIndex]);
            }
        }
        // swap values
        const temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
        setArr([...arr]);
    }
}