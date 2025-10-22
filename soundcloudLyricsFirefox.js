function getCurrentSongDetails(){
    const artist = document.querySelectorAll(".playbackSoundBadge__lightLink.sc-link-light.sc-link-secondary.sc-truncate.sc-text-h5")[0].title
    const songName = document.querySelectorAll(".playbackSoundBadge__titleLink.sc-truncate.sc-text-h5.sc-link-primary")[0].title
    //console.log(`${artist} ${songName}`)
    return [artist,songName]
}
function fetchFromBackground(){
   chrome.runtime.sendMessage()
}

function main(){
    console.log("test")
    var songDetails = getCurrentSongDetails()

    var artist = songDetails[0]
    var songName = songDetails[1]
    getLyrics(artist, songName)
}


// bruh idk what the fuck ive written here but it doesnt work.
// fix this when you can be fucked to understand the code.
// i hate coding
window.addEventListener("load", main)

