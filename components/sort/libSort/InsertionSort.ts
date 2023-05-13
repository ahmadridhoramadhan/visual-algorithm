import { Dispatch, SetStateAction } from "react"

export const insertionSort = async (arr: number[], setArr: Dispatch<SetStateAction<number[]>>, setCurrent: React.Dispatch<React.SetStateAction<number | null>>, setCurrent2: React.Dispatch<React.SetStateAction<number | null | number[]>>) => {
    for (let i = 0; i < arr.length; i++) {
        setCurrent(arr[i-1])
        for (let j = i; j > 0; j--) {
            setCurrent2(arr[j])
            if (arr[j] < arr[j - 1]) {
                await new Promise((resolve) => setTimeout(resolve, 50))
                const temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp
                setArr([...arr])
            }else{
                break
            }
        }
    }
}