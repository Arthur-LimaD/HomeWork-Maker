import puppeteer from "puppeteer"
import { IContent } from "../../types/content";

export const getImagesFromWiki = async(content: IContent)=> {

    const correctPrefix = content.searchPrefix.replace(/( )+/g, '%20');
    const correctTerm = content.searchTerm.replace(/( )+/g, '%20');
    console.log(`Searching for ${content.searchPrefix} ${content.searchTerm}...`)
    const browser = await puppeteer.launch()
    const page  = await browser.newPage()

    await page.goto(`https://www.google.com/search?q=wikipedia%20${correctPrefix}%20${correctTerm}`)

    const newLink = await page.evaluate(()=> {
        const nodeList = document.getElementsByClassName('MjjYud')
        return nodeList[0].getElementsByTagName('a')[0].href
    })

    await page.goto(newLink)

    const images = await page.evaluate(()=> {
        const nodeList:any = document.getElementsByClassName('thumbimage')
        const imagesArray = [...nodeList]
        const list = imagesArray.map((img)=> {return img.src})
        console.log(list)
        return list.slice(0, 7)
    })

    return images
}