
export const consumeApi = async(url) => {

    const datos  = await fetch(url)
    // console.log(datos)
    // const datosJson = await datos.Json()
    
    return datos.response.results
}

