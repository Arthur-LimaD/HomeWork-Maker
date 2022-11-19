import puppeteer from "puppeteer"
import { IContent } from "../../types/content";

export const getImagesFromWiki = async(content: IContent)=> {

    const correctPrefix = content.searchPrefix.replace(/( )+/g, '%20');
    const correctTerm = content.searchTerm.replace(/( )+/g, '%20');
    console.log(`Searching for ${content.searchPrefix} ${content.searchTerm}...`)
    const browser = await puppeteer.launch()
    const page  = await browser.newPage()

    await page.goto(`https://www.google.com/search?q=${correctPrefix}+${correctTerm}&tbm=isch&sxsrf=ALiCzsb9ofDiV8oBDheJBH5frOy90duoYg%3A1668880947454&source=hp&biw=1440&bih=757&ei=Mxp5Y56yGaHa5OUPk_OX6A0&iflsig=AJiK0e8AAAAAY3koQ9R048h1xK8cpaZwbMpqnCLW9OVS&ved=0ahUKEwjel6yA6rr7AhUhLbkGHZP5Bd0Q4dUDCAc&uact=5&oq=king+arthur&gs_lcp=CgNpbWcQAzIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoHCCMQ6gIQJzoICAAQgAQQsQNQzQxYzBxgiyRoAXAAeACAAXmIAfMJkgEEMC4xMZgBAKABAaoBC2d3cy13aXotaW1nsAEK&sclient=img`)

    const images = await page.evaluate(()=> {
        const nodeList:any = document.getElementsByClassName('islrc')
        const imagesArray = [...nodeList[0].getElementsByTagName('img')]
        const list = imagesArray.map((img)=> {
            if(img && img.alt.length > 3){
                return {src: img.src, alt: img.alt}
            }
        })
        return list.slice(0, 7)
    })

    return images
}