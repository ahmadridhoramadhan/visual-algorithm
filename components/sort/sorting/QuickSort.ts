import { sortFunction } from "../../../utils/types/sort/sortFunction";

export const quickSort: sortFunction = async (arr, setArr, setCurrent, setCurrent2) => {
    const stack = [[0, arr.length - 1]];

    while (stack.length) {
        const pair = stack.pop();
        if (!pair) continue;

        const [start, end] = pair;
        if (start >= end) continue;

        if (start >= end)
            continue;

        const pivot = arr[start];
        setCurrent(pivot);
        let i = start + 1, j = end;

        while (i <= j) {
            while (i <= end && arr[i] < pivot)
                i++;
            while (j >= start && arr[j] > pivot)
                j--;

            await new Promise((resolve) => setTimeout(resolve, 100));
            setCurrent2([arr[i], arr[j]]);
            if (i < j) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                setArr([...arr]);
            }
        }

        [arr[j], arr[start]] = [arr[start], arr[j]];

        await new Promise((resolve) => setTimeout(resolve, 100));
        // Update setArr after array changes
        setArr([...arr]);


        stack.push([start, j - 1], [j + 1, end]);
    }
};