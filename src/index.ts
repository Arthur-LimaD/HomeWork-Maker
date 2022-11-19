import { App } from "./entities/app";
import { pdfCreator } from "./entities/pdfCreator";

const app = new App()

const RUN = async ()=> {
    await app.start()
    console.log(app.content)
    console.log('Searching Released with Success!')
    console.log('Creating PDF file......')
    new pdfCreator(app.content).execute()
    console.log('Thank You for Using Our Homework Creator Service 🗿')
}

RUN()

