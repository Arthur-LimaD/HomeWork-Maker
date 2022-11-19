import { test, expect } from "vitest";
import {getDataFromWiki} from '../src/entities/utils/fetchDataFromWikipedia'

test("We shouldn't can do a search with a invalid wikipedia page", async ()=> {
    //correct example:
    /*expect(await getDataFromWiki({searchPrefix: 'Invalid', searchTerm: 'Google'})).toBe(false)*/
    expect(await getDataFromWiki({searchPrefix: 'fsfasgasdhadgadgad', searchTerm: 'Igdagdagadgdagdagd'})).toBe(false)
}, 15000)