import Layout from "@/components/layout";
import "highlight.js/styles/github-dark.css";
import hljs from "highlight.js";
import { useEffect, useState } from "react";
import Sort from "@/components/sort";
import { bubbleSort } from "@/components/sort/libSort/bubbleSort";


export default function Test() {
    const [programmingLanguage, setProgrammingLanguage] = useState(1);
    const [isCopy, setIsCopy] = useState(false)

    useEffect(() => {
        hljs.highlightAll()
    });

    async function copyToClipboard(text: string) {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopy(true)
            await new Promise(resolve => setTimeout(resolve, 5000))
            setIsCopy(false)
        } catch (err) {
            console.error("Gagal menyalin teks ke clipboard: ", err);
        }
    }


    const program = [
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

    return (
        <Layout titlePage="detail code">
            <section className="mx-auto max-w-[100rem]">
                <div className="flex xl:flex-row flex-col justify-center lg:justify-start">
                    <div className="flex-auto flex justify-center lg:min-w-[48rem]">
                        <span></span>
                        <Sort sortFunction={bubbleSort} title="bubble sort" />
                    </div>

                    <div className="mt-10">
                        <p className="text-4xl">Bubble Sort</p>
                        <p className="break-words ml-2 mt-2">Step-by-step example
                            Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the input list element by element, comparing the current element with the one after it, swapping their values if needed. These passes through the list are repeated until no swaps had to be performed during a pass, meaning that the list has become fully sorted. The algorithm, which is a comparison sort, is named for the way the larger elements "bubble" up to the top of the list. <br /><br />

                            This simple algorithm performs poorly in real world use and is used primarily as an educational tool. More efficient algorithms such as quicksort, timsort, or merge sort are used by the sorting libraries built into popular programming languages such as Python and Java.[2][3]</p>
                    </div>
                </div>
                <p className="break-words mt-10 p-4"><span className="font-bold text-2xl">Step-by-step example</span> <br />
                    Take an array of numbers "5 1 4 2 8", and sort the array from lowest number to greatest number using bubble sort. In each step, elements written in bold are being compared. Three passes will be required;<br />

                    <br /><span className="font-bold">First Pass</span> <br />
                    &emsp;( <span className="font-extrabold text-white">5 1</span> 4 2 8 ) → ( <span className="font-extrabold text-white">1 5</span> 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1. <br />
                    &emsp;( 1 <span className="font-extrabold text-white">5 4</span> 2 8 ) → ( 1 <span className="font-extrabold text-white">4 5</span> 2 8 ), Swap since 5 > 4 <br />
                    &emsp;( 1 4 <span className="font-extrabold text-white">5 2</span> 8 ) → ( 1 4 <span className="font-extrabold text-white">2 5</span> 8 ), Swap since 5 > 2 <br />
                    &emsp;( 1 4 2 <span className="font-extrabold text-white">5 8</span> ) → ( 1 4 2 <span className="font-extrabold text-white">5 8</span> ), Now, since these elements are already in order (8 > 5), algorithm does not swap them. <br />
                    <br /><span className="font-bold">Second Pass</span> <br />
                    &emsp;( <span className="font-extrabold text-white">1 4</span> 2 5 8 ) → ( <span className="font-extrabold text-white">1 4</span> 2 5 8 ) <br />
                    &emsp;( 1 <span className="font-extrabold text-white">4 2</span> 5 8 ) → ( 1 <span className="font-extrabold text-white">2 4</span> 5 8 ), Swap since 4 > 2 <br />
                    &emsp;( 1 2 <span className="font-extrabold text-white">4 5</span> 8 ) → ( 1 2 <span className="font-extrabold text-white">4 5</span> 8 ) <br />
                    &emsp;( 1 2 4 <span className="font-extrabold text-white">5 8</span> ) → ( 1 2 4 <span className="font-extrabold text-white">5 8</span> ) <br />
                    Now, the array is already sorted, but the algorithm does not know if it is completed. The algorithm needs one additional whole pass without any swap to know it is sorted. <br />

                    <br /><span className="font-bold">Third Pass</span> <br />
                    &emsp;( <span className="font-extrabold text-white">1 2</span> 4 5 8 ) → ( <span className="font-extrabold text-white">1 2</span> 4 5 8 ) <br />
                    &emsp;( 1 <span className="font-extrabold text-white">2 4</span> 5 8 ) → ( 1 <span className="font-extrabold text-white">2 4</span> 5 8 ) <br />
                    &emsp;( 1 2 <span className="font-extrabold text-white">4 5</span> 8 ) → ( 1 2 <span className="font-extrabold text-white">4 5</span> 8 ) <br />
                    &emsp;( 1 2 4 <span className="font-extrabold text-white">5 8</span> ) → ( 1 2 4 <span className="font-extrabold text-white">5 8</span> )
                </p>
            </section>

            <section className="my-32 xl:mx-auto max-w-7xl mx-5">
                <div className="flex justify-between h-10 bg-gray-900 md:px-5 px-2 items-center">
                    <div className="flex gap-3 overflow-y-clip overflow-x-scroll md:overflow-visible scrollbar-hide">
                        <button type="button" className={`transition-all select-none px-2 ${programmingLanguage == 1 ? 'box-border border-indigo-700 text-indigo-500 h-full bg-gray-900 mt-5 border-l-4 border-t-4 border-r-4' : ''}`} onClick={() => { setProgrammingLanguage(1) }}>JavaScript</button>
                        <button type="button" className={`transition-all select-none px-2 ${programmingLanguage == 2 ? 'box-border border-indigo-700 text-indigo-500 h-full bg-gray-900 mt-5 border-l-4 border-t-4 border-r-4' : ''}`} onClick={() => { setProgrammingLanguage(2) }}>C++</button>
                        <button type="button" className={`transition-all select-none px-2 ${programmingLanguage == 3 ? 'box-border border-indigo-700 text-indigo-500 h-full bg-gray-900 mt-5 border-l-4 border-t-4 border-r-4' : ''}`} onClick={() => { setProgrammingLanguage(3) }}>Python</button>
                        <button type="button" className={`transition-all select-none px-2 ${programmingLanguage == 4 ? 'box-border border-indigo-700 text-indigo-500 h-full bg-gray-900 mt-5 border-l-4 border-t-4 border-r-4' : ''}`} onClick={() => { setProgrammingLanguage(4) }}>go</button>
                        <button type="button" className={`transition-all select-none px-2 ${programmingLanguage == 5 ? 'box-border border-indigo-700 text-indigo-500 h-full bg-gray-900 mt-5 border-l-4 border-t-4 border-r-4' : ''}`} onClick={() => { setProgrammingLanguage(5) }}>php</button>
                        <button type="button" className={`transition-all select-none px-2 ${programmingLanguage == 6 ? 'box-border border-indigo-700 text-indigo-500 h-full bg-gray-900 mt-5 border-l-4 border-t-4 border-r-4' : ''}`} onClick={() => { setProgrammingLanguage(6) }}>Java</button>
                    </div>

                    <button type="button" className="whitespace-nowrap" onClick={() => { copyToClipboard(program[programmingLanguage - 1].code) }}>{isCopy ? (<><IconClipboardSuccess /> copied! </>) : (<><IconClipboard /> copy</>)}</button>
                </div>
                <div className="border-4 border-indigo-700">
                    <pre>
                        <code className={`language-${program[programmingLanguage - 1].language}`}>{program[programmingLanguage - 1].code}</code>
                    </pre>
                </div>
            </section>

        </Layout>
    )

}


function IconClipboard() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
        </svg>
    )
}

function IconClipboardSuccess() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
        </svg>
    )
}