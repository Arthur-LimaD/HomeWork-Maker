import { ISearchPrefix } from "./SearchPrefix"

export interface IContent {
    searchTerm: string
    searchPrefix: string
    sourceData?: any;
    images: string[]
}