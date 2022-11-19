import { textRobot } from "../entities/robots/text";
import { IContent } from "../types/content";

const getDataFromWikiPedia = async(content: IContent)=> {
    const text = new textRobot(content);
    await text.execute();
    return text.data
}