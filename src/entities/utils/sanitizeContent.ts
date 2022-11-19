export const sanitizeContent = async (content: string[])=>{
    const sanitized = content.map((obj)=> {
        return obj.replace(/[\[\]']+/g,'')
    })
    return sanitized
}