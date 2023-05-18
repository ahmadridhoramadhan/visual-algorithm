import { sortFunction } from "@/utils/types/sort/sortFunction";
import { ReactNode } from "react";

export interface LayoutDetailSortInterface {
    textUnderSortVisualization: ReactNode;
    sortName: string;
    sourceSortCodes: { language: string; code: string; }[];
    sortFunction: sortFunction;
    theTextNextToTheSortVisualization: ReactNode;
}
