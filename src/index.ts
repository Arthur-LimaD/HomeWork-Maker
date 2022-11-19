import { sucess } from "./art";
import { App } from "./entities/app";
import { pdfCreator } from "./entities/pdfCreator";

const app = new App()

const RUN = async ()=> {
    console.time()
    await app.start()
    console.log(app.content)

    console.log('Searching Released with Success!')
    console.log('Creating PDF file......')

    const pdf = new pdfCreator(app.content)
    await pdf.execute()
    console.log(`Pdf created with succes on the path '/results'`)

    console.log('===========================================')
    console.log(sucess)
    console.log('Thank You for Using Our Homework Service 🔱')

    console.timeEnd()
}

RUN()

