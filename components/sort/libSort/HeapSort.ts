import { Dispatch, SetStateAction } from "react";
import LibSortInterface from "../interface/sortFunction";

export const heapSort : LibSortInterface = async (arr, setArr, setCurrent, setCurrent2) => {
    let n = arr.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await new Promise((resolve) => setTimeout(resolve, 50));
        setCurrent2(arr[i])
        heapify(arr, n, i, setArr);
    }
    setCurrent2(null)

    // One by one extract elements
    for (let i = n - 1; i > 0; i--) {
        setCurrent(arr[0])
        await new Promise((resolve) => setTimeout(resolve, 50));
        // Move current root to end
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        
        // Call max heapify on the reduced heap
        heapify(arr, i, 0, setArr);
        setArr([...arr]);
    }
};

const heapify = async (arr: number[], n: number, i: number, setArr:Dispatch<SetStateAction<number[]>>) => {
    let largest = i; // Initialize largest as root
    let left = 2 * i + 1; // left = 2*i + 1
    let right = 2 * i + 2; // right = 2*i + 2
    
    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    
    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    
    // If largest is not root
    if (largest !== i) {
        let swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;
        setArr([...arr])

      // Recursively heapify the affected sub-tree
        heapify(arr, n, largest, setArr);
    }
  };