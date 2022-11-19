import * as puppeteer from 'puppeteer'
import { IContent } from '../../types/content'
import { getImagesFromWiki } from './fetchImagesFromWikipedia';

export const getDataFromWiki = async (content: IContent) => {

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

    const resumeRespose = await page.evaluate(()=> {
        const nodeList = document.querySelectorAll('p')
        const paragraphArray = [...nodeList]
        const list = paragraphArray.map((p)=> {return p.outerText})
        if(paragraphArray[0].outerText == 'Confira dicas e sugestões para ajudar você a encontrar informações de forma simples no Google.'){
            return false
        }
        return list.slice(0, 10)
    })

    if(!resumeRespose){
        console.error(`The Search Term Request Wasn't Found on Wikipedia!`)
        await browser.close()
        return false
    }else{
        console.log(`Result catched from the Website: ${newLink}`)
        console.log('===================================================')
        await browser.close()
        return resumeRespose
    }
}