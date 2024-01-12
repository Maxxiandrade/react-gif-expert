export const getGifs = async(category) =>{
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=EdfEt13mrE2L8SEfYF3iWWTADoIn2EjL&q=${category}&limit=2`
const resp = await fetch (URL)
const {data} = await resp.json()

const gifs = data.map(img =>({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
}))

return gifs}