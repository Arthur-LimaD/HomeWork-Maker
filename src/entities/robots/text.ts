import { IContent } from "../../types/content";
import { getDataFromWiki } from "../utils/fetchDataFromWikipedia";
import {sanitizeContent} from "../utils/sanitizeContent";

export class textRobot{
    content;
    data:any;
    
    constructor(content: IContent){
        this.content = content;
        this.data = ['']
    }

    public async execute(){
        console.log(`User choosed to search about ${this.content.searchPrefix} ${this.content.searchTerm}`)
        const newData = await this.fetchContentFromWikippedia()
        if(newData){
            this.data = await sanitizeContent(newData)
        }
    }

    async fetchContentFromWikippedia(){
        return await getDataFromWiki(this.content)
    }
}