import { IContent } from "../types/content";
import {getSearchPrefix, getSearchTerm} from "../use-cases/start";
import { getDataFromWiki } from "./utils/fetchDataFromWikipedia";
import { getImagesFromWiki } from "./utils/fetchImagesFromWikipedia";

export class App {
    public content: IContent

    constructor(){
        //content padrão kkkkk
        this.content = {
            sourceData: ['Este teste está vindo do content', 'SEGUNDO TEXTO FODA 🗿', '', 'Testando'], 
            searchPrefix: '', 
            images: ['https://i.kym-cdn.com/entries/icons/original/000/037/848/cover2.jpg', 'https://cdn.ahnegao.com.br/wp-content/uploads/2013/04/prisao.jpg'],
            searchTerm: ''
        };
    }

    async start(){
        try{
            this.content.searchTerm = await getSearchTerm();
            this.content.searchPrefix = await getSearchPrefix();
            this.content.sourceData = await getDataFromWiki(this.content);
            this.content.images = await getImagesFromWiki(this.content);
        }catch(error){
            if(error){
                console.error('Error occured: '+ error)
            }
        } 
    }

}