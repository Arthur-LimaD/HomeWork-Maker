import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


export async function getSearchTerm():Promise<string>{
    return new Promise((resolve, reject)=> {
        rl.question('What is the term you want to search? ', function (answer: string){
            resolve(answer)
        }) 
    })
}

export function getSearchPrefix():Promise<string>{

    console.log('Type index of theese Possible Prefixes: \n')
    console.table({1: 'Who is', 2: 'What is', 3: 'The History of'})
    
    return new Promise ((resolve, reject)=> {
        rl.question('What is the prefix you want to search? ', function (answer: string|number) {
            const validPrefixes = {1: 'Who is', 2: 'What is', 3: 'The History of'}
            answer = Number(answer)
            if(answer == 1 || answer == 2 || answer == 3) {
                resolve(validPrefixes[answer])
            } else{console.error('Please choose a valid Prefix!!!')}
            rl.close()
        })
    })

}