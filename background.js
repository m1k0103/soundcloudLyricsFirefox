async function getLyrics(artist,songName){
    console.log(artist, songName)
    var songNameClean = songName.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split(" ")[0]
    var artistClean = artist.toLowerCase().replace(/[^a-zA-Z0-9]/, '').split(" ")[0]
    console.log(songNameClean,artistClean)
    

    // fetches lyrics
    //const xhr = new XMLHttpRequest()
    //xhr.open("GET", url)
    //xhr.responseType = "document"
    //xhr.send()
    //console.log(xhr)
    //xhr.onload = () => {
        //    if (xhr.readyState == 4 && xhr.status == 200) { // if request is successful
        //        const raw_page_contents = xhr.responseText
        //        console.log(raw_page_contents)
        //        
        //    }else{
            //        console.log(`Error ${xhr.status}`)
            //    }
            //}
            //console.log(xhr)
            //console.log("abcdef")
            //let response = await fetch(url)
            //console.log(response)
            //let raw_text = await response.textContent
            //try {
    const url = `https://www.azlyrics.com/lyrics/${artistClean}/${songNameClean}.html`

    const response = await fetch(url)
        if (!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }

        const result = await response.text()
        console.log(result)
        return result
    //} catch (error){
        //console.error(error.message)
    //}
    console.log("test")

}



function handleMessage(request, sender, sendResponse) {
  console.log(`A content script sent a message: ${request.greeting}`);
  const artist = sender.artist
  const songName = sender.songName
  const result_lyrics = getLyrics(artist, songName)
  sendResponse({ response: result_lyrics});
}

browser.runtime.onMessage.addListener(handleMessage);