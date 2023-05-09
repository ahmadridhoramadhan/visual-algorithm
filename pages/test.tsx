import React, { useState, useEffect } from "react";
import classNames from "classnames";

// Quick Sort algorithm
function quickSort(arr, left, right) {
    if (left >= right) return;

    let pivot = arr[Math.floor((left + right) / 2)];
    let index = partition(arr, left, right, pivot);
    quickSort(arr, left, index - 1);
    quickSort(arr, index, right);
}

function partition(arr, left, right, pivot) {
    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return left;
}

function getRandomArray(length, maxNum) {
    return Array.from({ length }, () => Math.floor(Math.random() * maxNum + 1));
}

function Bars({ values }) {
    return (
        <div className="h-full w-full flex justify-center items-end">
            {values.map((value, i) => (
                <div
                    key={i}
                    className="h-full w-1 rounded-t-md transition-all duration-300 ease-in-out"
                    style={{ height: `${value}%` }}
                ></div>
            ))}
        </div>
    );
}

function SortingVisualizer() {
    const [values, setValues] = useState([]);
    const [isSorting, setIsSorting] = useState(false);

    useEffect(() => {
        resetArray();
    }, []);

    function resetArray() {
        const arr = getRandomArray(100, 500);
        setValues(arr);
        setIsSorting(false);
    }

    function sortArray() {
        setIsSorting(true);
        quickSort(values, 0, values.length - 1);
        setIsSorting(false);
    }

    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-8">Quick Sort Visualizer</h1>
            <div className="flex space-x-4 mb-8">
                <button
                    className={classNames(
                        "bg-gray-800 text-white px-4 py-2 rounded-md transition-all duration-300",
                        {
                            "hover:bg-gray-700": !isSorting,
                            "cursor-not-allowed opacity-50": isSorting,
                        }
                    )}
                    onClick={resetArray}
                    disabled={isSorting}
                >
                    Generate New Array
                </button>
                <button
                    className={classNames(
                        "bg-gray-800 text-white px-4 py-2 rounded-md transition-all duration-300",
                        {
                            "hover:bg-gray-700": !isSorting,
                            "cursor-not-allowed opacity-50": isSorting,
                        }
                    )}
                    onClick={sortArray}
                    disabled={isSorting}
                >
                    Sort Array
                </button>
            </div>
            <div className="relative h-80 w-1/2">
                <Bars values={values} />
                {isSorting && (
                    <div className="absolute inset-0 flex justify-center items-center">
                        <span className="text-3xl font-bold animate-pulse">Sorting...</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SortingVisualizer;
