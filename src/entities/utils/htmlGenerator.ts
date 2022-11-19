import { IContent } from "../../types/content";
import ejs from 'ejs'

export const htmlGenerator = async (content: IContent)=> {
    const text = content.sourceData.filter((item:string, index:number)=> index !== 0)

    const file = new Promise ((resolve, reject)=>{
        ejs.renderFile('./src/entities/utils/html.ejs', {
        text: text, 
        img: content.images, 
        title: content
    }, (err, html)=> {
            if(err){
                reject(err)
            }else{
                resolve(html) 
            }
        })
    })

    return await file
}