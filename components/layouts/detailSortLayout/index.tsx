import Sort from "@/components/sort"
import { bubbleSort } from "@/components/sort/sorting/bubbleSort"
import hljs from "highlight.js"
import { useState, useEffect } from "react"
import Layout from "../MainLayout"
import { IconClipboard } from "@/components/icons/IconClipboard"
import { IconClipboardSuccess } from "@/components/icons/IconClipboardSuccess"
import { LayoutDetailSortInterface } from "./LayoutDetailSortInterface"

export default function LayoutSort({ textUnderSortVisualization, sortName, sourceSortCodes, sortFunction, theTextNextToTheSortVisualization }: LayoutDetailSortInterface) {

    const [whichSortCode, setWhichSortCode] = useState(1);
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


    return (
        <Layout titlePage={sortName}>
            <section className="mx-auto max-w-[100rem]">
                <div className="flex xl:flex-row flex-col justify-center lg:justify-start">
                    <div className="flex-auto flex justify-center lg:min-w-[48rem]">
                        <span></span>
                        <Sort sortFunction={bubbleSort} title="bubble sort" />
                    </div>

                    <div className="mt-10">
                        <p className="text-4xl pl-4 capitalize">{sortName}</p>
                        {theTextNextToTheSortVisualization}
                    </div>
                </div>
                <p className="break-words mt-10 p-4">
                    {textUnderSortVisualization}
                </p>
            </section>

            <section className="my-32 xl:mx-auto max-w-7xl mx-5">
                <div className="flex justify-between h-10 bg-gray-900 md:px-5 px-2 items-center">

                    <div className="flex gap-3 overflow-y-clip overflow-x-scroll md:overflow-visible scrollbar-hide">
                        {
                            sourceSortCodes.map((sortCode, index) => (
                                <button type="button" key={index} className={`transition-all select-none px-2 ${whichSortCode == index + 1 ? 'box-border border-indigo-700 text-indigo-500 h-full bg-gray-900 mt-5 border-l-4 border-t-4 border-r-4' : ''}`} onClick={() => { setWhichSortCode(index + 1) }}>{sortCode.language}</button>
                            ))
                        }
                    </div>

                    <button type="button" className="whitespace-nowrap" onClick={() => { copyToClipboard(sourceSortCodes[whichSortCode - 1].code) }}>{isCopy ? (<><IconClipboardSuccess /> copied! </>) : (<><IconClipboard /> copy</>)}</button>
                </div>
                <div className="border-4 border-indigo-700">
                    <pre>
                        <code className={`language-${sourceSortCodes[whichSortCode - 1].language}`}>{sourceSortCodes[whichSortCode - 1].code}</code>
                    </pre>
                </div>
            </section>

        </Layout>
    )
}
