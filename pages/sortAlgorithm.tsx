import Layout from "@/components/layout";
import { JsxElement } from "typescript";
import { BubbleSort } from "../components/sort/BubbleSort";
import { SelectionSort } from "../components/sort/SelectionSort";
import { InsertionSort } from "../components/sort/InsertionSort";
import { QuickSort } from "../components/sort/QuickSort";
import { ShellSort } from "../components/sort/ShellSort";
import { CountingSort } from "../components/sort/CountingSort";
import { RadixSort } from "../components/sort/RadixSort";
import { CocktailShakerSort } from "../components/sort/CocktailShakerSort";
import { CombSort } from "../components/sort/CombSort";
import { HeapSort } from "../components/sort/HeapSort";


export default function SortAlgorithm() {
    return (
        <Layout titlePage="sort Algorithm">
            <div className="grid grid-cols-1 xl:gap-20 gap-40 xl:grid-cols-2 max-w-[150rem] mx-auto justify-items-center place-items-end">
                <BubbleSort />
                <SelectionSort />
                <InsertionSort />
                <QuickSort />
                <ShellSort />
                <CountingSort />
                <RadixSort />
                <CocktailShakerSort />
                <CombSort />
                <HeapSort />
            </div>
        </Layout>
    )
}


