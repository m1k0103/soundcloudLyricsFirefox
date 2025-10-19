function getCurrentSongDetails(){
    const artist = document.querySelectorAll(".playbackSoundBadge__lightLink.sc-link-light.sc-link-secondary.sc-truncate.sc-text-h5")[0].title
    const songName = document.querySelectorAll(".playbackSoundBadge__titleLink.sc-truncate.sc-text-h5.sc-link-primary")[0].title
    //console.log(`${artist} ${songName}`)
    return [artist,songName]
}

async function getLyrics(artist,songName){
    console.log(artist, songName)
    var songNameClean = songName.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split(" ")[0]
    var artistClean = artist.toLowerCase().replace(/[^a-zA-Z0-9]/, '').split(" ")[0]
    console.log(songNameClean,artistClean)
    

    // fetches lyrics
    const url = `https://www.azlyrics.com/lyrics/${artistClean}/${songNameClean}.html`
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.responseType = "document"
    xhr.send()
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) { // if request is successful
            const raw_page_contents = xhr.responseText
            console.log(raw_page_contents)
        
        }else{
            console.log(`Error ${xhr.status}`)
        }
    }
    //let response = await fetch(url)
    //console.log(response)
    //let raw_text = await response.textContent
}


window.onload = function() {
    console.log("test")
    var songDetails = getCurrentSongDetails()

    var artist = songDetails[0]
    var songName = songDetails[1]
    getLyrics(artist, songName)
}



document.getElementsByTagName