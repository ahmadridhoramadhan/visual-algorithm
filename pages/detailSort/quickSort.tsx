import LayoutSort from "@/components/layouts/detailSortLayout"
import { bubbleSort } from "@/components/sort/sorting/bubbleSort"

export default function DetailQuickSort() {

    const SortCodes: { language: string, code: string }[] = [
        {
            language: 'javascript',
            code: `\nconst bubbleSort = (arr) => {\n\tconst n = arr.length;\n\n\tfor (let i = 0; i < n - 1; i++) {\n\t\t// Lakukan iterasi untuk membandingkan elemen sekarang dengan elemen berikutnya\n\t\tfor (let j = 0; j < n - i - 1; j++) {\n\t\tif (arr[j] > arr[j+1]) {\n\t\t\t// Jika elemen sekarang lebih besar dari elemen berikutnya, tukar posisi elemen tersebut\n\t\t\tlet temp = arr[j];\n\t\t\tarr[j] = arr[j+1];\n\t\t\tarr[j+1] = temp;\n\t\t}\n\t}\n}\n\nreturn arr;\n}`
        },
        {
            language: 'cpp',
            code: `\n#include <iostream>\nusing namespace std;\n\nvoid bubbleSort(int arr[], int n) {\n\tfor (int i = 0; i < n - 1; i++) {\n\t\t// Last i elements are already sorted\n\t\tfor (int j = 0; j < n - i - 1; j++) {\n\t\t\tif (arr[j] > arr[j + 1]) {\n\t\t\t\t// Swap arr[j] and arr[j+1]\n\t\t\t\tint temp = arr[j];\n\t\t\t\tarr[j] = arr[j + 1];\n\t\t\t\tarr[j + 1] = temp;\n\t\t\t}\n\t\t}\n\t}\n}\n\nint main() {\nint arr[] = { 64, 25, 12, 22, 11 };\nint n = sizeof(arr) / sizeof(arr[0]);\nbubbleSort(arr, n);\ncout << "Sorted array: ";\nfor (int i = 0; i < n; i++) {\n\tcout << arr[i] << " ";\n}\ncout << endl;\nreturn 0;\n}`
        },
        {
            language: 'python',
            code: `\ndef bubble_sort(arr):\n\tn = len(arr)\n\n\t# Traverse through all array elements\n\tfor i in range(n):\n\n\t\t# Last i elements are already in place\n\t\tfor j in range(0, n-i-1):\n\n\t\t\t# Traverse the array from 0 to n-i-1\n\t\t\t# Swap if the element found is greater\n\t\t\t# than the next element\n\t\t\tif arr[j] > arr[j+1] :\n\t\t\t\tarr[j], arr[j+1] = arr[j+1], arr[j]`
        },
        {
            language: 'go',
            code: `\npackage main\n\nimport "fmt"\n\nfunc bubbleSort(arr []int) {\n\tn := len(arr)\n\tfor i := 0; i < n-1; i++ {\n\t\t// Terapkan perbandingan elemen dengan elemen berikutnya\n\t\tfor j := 0; j < n-i-1; j++ {\n\t\t\tif arr[j] > arr[j+1] {\n\t\t\t\t// Swap elemen jika elemen saat ini lebih besar dari elemen berikutnya\n\t\t\t\tarr[j], arr[j+1] = arr[j+1], arr[j]\n\t\t\t}\n\t\t}\n\t}\n}\n\nfunc main() {\n\tarr := []int{64, 34, 25, 12, 22, 11, 90}\n\tbubbleSort(arr)\n\tfmt.Println("Array setelah diurutkan:", arr)\n}`
        },
        {
            language: 'php',
            code: `\n<?php\nfunction bubbleSort(&$arr) {\n\t$n = count($arr);\n\tfor ($i = 0; $i < $n-1; $i++) {\n\t\tfor ($j = 0; $j < $n-$i-1; $j++) {\n\t\t\tif ($arr[$j] > $arr[$j+1]) {\n\t\t\t\t$temp = $arr[$j];\n\t\t\t\t$arr[$j] = $arr[$j+1];\n\t\t\t\t$arr[$j+1] = $temp;\n\t\t\t}\n\t\t}\n\t}\n}`
        },
        {
            language: 'java',
            code: `\npublic static void bubbleSort(int[] arr) {\n\tint n = arr.length;\n\tboolean swapped;\n\n\tfor (int i = 0; i < n - 1; i++) {\n\t\tswapped = false;\n\t\tfor (int j = 0; j < n - i - 1; j++) {\n\t\t\tif (arr[j] > arr[j + 1]) {\n\t\t\t\t// swap arr[j] and arr[j+1]\n\t\t\t\tint temp = arr[j];\n\t\t\t\tarr[j] = arr[j + 1];\n\t\t\t\tarr[j + 1] = temp;\n\t\t\t\tswapped = true;\n\t\t\t}\n\t\t}\n\n\t\t// If no two elements were swapped by inner loop, then break\n\t\tif (!swapped) {\n\t\t\tbreak;\n\t\t}\n\t}\n}`
        },
    ]

    const TextToTheNextSortVisualization = (<>
        <p className="break-words px-4 ml-2 mt-2">Step-by-step example
            Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the input list element by element, comparing the current element with the one after it, swapping their values if needed. These passes through the list are repeated until no swaps had to be performed during a pass, meaning that the list has become fully sorted. The algorithm, which is a comparison sort, is named for the way the larger elements &quot;bubble&quot; up to the top of the list. <br /><br />

            This simple algorithm performs poorly in real world use and is used primarily as an educational tool. More efficient algorithms such as quicksort, timsort, or merge sort are used by the sorting libraries built into popular programming languages such as Python and Java.
        </p>
    </>)

    const textUnderSortVisualization = (<>
        <span className="font-bold text-2xl">Step-by-step example</span> <br />
        <span className="inline-block ml-3">
            Take an array of numbers &quot;5 1 4 2 8&quot;, and sort the array from lowest number to greatest number using bubble sort. In each step, elements written in bold are being compared. Three passes will be required;<br />

            <br /><span className="font-bold">First Pass</span> <br />
            &emsp;( <span className="font-extrabold text-white">5 1</span> 4 2 8 ) → ( <span className="font-extrabold text-white">1 5</span> 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 &gt; 1. <br />
            &emsp;( 1 <span className="font-extrabold text-white">5 4</span> 2 8 ) → ( 1 <span className="font-extrabold text-white">4 5</span> 2 8 ), Swap since 5 &gt; 4 <br />
            &emsp;( 1 4 <span className="font-extrabold text-white">5 2</span> 8 ) → ( 1 4 <span className="font-extrabold text-white">2 5</span> 8 ), Swap since 5 &gt; 2 <br />
            &emsp;( 1 4 2 <span className="font-extrabold text-white">5 8</span> ) → ( 1 4 2 <span className="font-extrabold text-white">5 8</span> ), Now, since these elements are already in order (8 &gt; 5), algorithm does not swap them. <br />
            <br /><span className="font-bold">Second Pass</span> <br />
            &emsp;( <span className="font-extrabold text-white">1 4</span> 2 5 8 ) → ( <span className="font-extrabold text-white">1 4</span> 2 5 8 ) <br />
            &emsp;( 1 <span className="font-extrabold text-white">4 2</span> 5 8 ) → ( 1 <span className="font-extrabold text-white">2 4</span> 5 8 ), Swap since 4 &gt; 2 <br />
            &emsp;( 1 2 <span className="font-extrabold text-white">4 5</span> 8 ) → ( 1 2 <span className="font-extrabold text-white">4 5</span> 8 ) <br />
            &emsp;( 1 2 4 <span className="font-extrabold text-white">5 8</span> ) → ( 1 2 4 <span className="font-extrabold text-white">5 8</span> ) <br />
            Now, the array is already sorted, but the algorithm does not know if it is completed. The algorithm needs one additional whole pass without any swap to know it is sorted. <br />

            <br /><span className="font-bold">Third Pass</span> <br />
            &emsp;( <span className="font-extrabold text-white">1 2</span> 4 5 8 ) → ( <span className="font-extrabold text-white">1 2</span> 4 5 8 ) <br />
            &emsp;( 1 <span className="font-extrabold text-white">2 4</span> 5 8 ) → ( 1 <span className="font-extrabold text-white">2 4</span> 5 8 ) <br />
            &emsp;( 1 2 <span className="font-extrabold text-white">4 5</span> 8 ) → ( 1 2 <span className="font-extrabold text-white">4 5</span> 8 ) <br />
            &emsp;( 1 2 4 <span className="font-extrabold text-white">5 8</span> ) → ( 1 2 4 <span className="font-extrabold text-white">5 8</span> )
        </span>
    </>)

    return (
        <LayoutSort sourceSortCodes={SortCodes} sortName="bubble sort" sortFunction={bubbleSort} theTextNextToTheSortVisualization={TextToTheNextSortVisualization} textUnderSortVisualization={textUnderSortVisualization} />
    )
}