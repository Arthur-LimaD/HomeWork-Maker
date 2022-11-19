import { IContent } from "../types/content";
import pdf from 'html-pdf'
import { htmlGenerator } from "./utils/htmlGenerator";

export class pdfCreator {
    content;

    constructor(content: IContent){
        this.content = content;
    }

    async execute(){ 

        const data:any = await htmlGenerator(this.content)

        await new Promise((resolve, reject)=> {
            pdf.create(data, {}).toFile(`./results/${this.content.searchPrefix} ${this.content.searchTerm}.pdf`, (err, res)=> {
                if(err){
                    console.log('erro aconteceu: ' + err)
                    reject('')
                }else{
                    console.log(res)
                    resolve('')
                }
            })
        })
    }
}