import LibSortInterface from "../interface/sortFunction";

export const shellSort : LibSortInterface = async (arr, setArr, setCurrent, setCurrent2) => {
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