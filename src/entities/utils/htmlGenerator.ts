import { IContent } from "../../types/content";
import ejs from 'ejs'

export const htmlGenerator = async (content: IContent)=> {
    const file = new Promise ((resolve, reject)=>{
        ejs.renderFile('./src/entities/utils/html.ejs',{
            text: content.sourceData, 
            img: content.images, 
            title: content.searchTerm
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