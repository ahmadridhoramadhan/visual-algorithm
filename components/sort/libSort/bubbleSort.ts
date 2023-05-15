import LibSortInterface from "../interface/sortFunction";


export const bubbleSort : LibSortInterface = async (arr, setArr, setCurrent, setCurrent2) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            await new Promise((resolve) => setTimeout(resolve, 50));
            setCurrent2(arr[j]);
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                setArr([...arr]);
            }
        }
    }
};