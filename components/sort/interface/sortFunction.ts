export default interface sortFunction {
  (arr: number[], setArr: React.Dispatch<React.SetStateAction<number[]>>, setCurrent: React.Dispatch<React.SetStateAction<number | null>>, setCurrent2: React.Dispatch<React.SetStateAction<number | null | number[]>>): Promise<void>;
}