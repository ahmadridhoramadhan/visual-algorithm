import Layout from "@/components/layout";
import Sort from "@/components/sort";
import { bubbleSort } from "@/components/sort/libSort/bubbleSort";
import { cocktailShakerSort } from "@/components/sort/libSort/CocktailShakerSort";
import { combSort } from "@/components/sort/libSort/CombSort";
import { countingSort } from "@/components/sort/libSort/CountingSort";
import { heapSort } from "@/components/sort/libSort/HeapSort";
import { insertionSort } from "@/components/sort/libSort/InsertionSort";
import { quickSort } from "@/components/sort/libSort/QuickSort";
import { radixSort } from "@/components/sort/libSort/RadixSort";
import { selectionSort } from "@/components/sort/libSort/SelectionSort";
import { shellSort } from "@/components/sort/libSort/ShellSort";


export default function SortAlgorithm() {
    return (
        <Layout titlePage="sort Algorithm">
            <div className="grid grid-cols-1 xl:gap-20 gap-40 xl:grid-cols-2 max-w-[150rem] mx-auto justify-items-center place-items-end pb-10">
                <Sort sortFunction={bubbleSort} title="bubble sort" />
                <Sort sortFunction={cocktailShakerSort} title="cocktail shaker sort" />
                <Sort sortFunction={combSort} title="comb sort" />
                <Sort sortFunction={countingSort} title="counting sort" />
                <Sort sortFunction={heapSort} title="heap sort" />
                <Sort sortFunction={insertionSort} title="insertion sort" />
                <Sort sortFunction={radixSort} title="radix sort" />
                <Sort sortFunction={selectionSort} title="selection sort" />
                <Sort sortFunction={shellSort} title="shell sort" />
                <Sort sortFunction={quickSort} title="quick sort" />
            </div>
        </Layout>
    )
}