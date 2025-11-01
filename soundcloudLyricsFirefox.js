function getCurrentSongDetails(){
    const artist = document.querySelectorAll(".playbackSoundBadge__lightLink.sc-link-light.sc-link-secondary.sc-truncate.sc-text-h5")[0].title
    const songName = document.querySelectorAll(".playbackSoundBadge__titleLink.sc-truncate.sc-text-h5.sc-link-primary")[0].title
    //console.log(`${artist} ${songName}`)
    return [artist,songName]
}



function fetchFromBackground(artist, songName){
   const sending = browser.runtime.sendMessage({
    songName: songName,
    artist: artist
   })
   sending.then(handleResponse, handleError)
}
function handleResponse(m){
    console.log(`Recieved lyrics: ${m.response}`)
}

function handleError(error){
    console.log(`Error: ${error}`)
}


function main(){
    //console.log("test")
    //var songDetails = getCurrentSongDetails()
//
    //var artist = songDetails[0]
    //var songName = songDetails[1]
    //getLyrics(artist, songName)
    const targetNode = document.getElementsByClassName("playbackSoundBadge__title")[0]
    const config = {childList: true, subtree: true};
    const callback = function (mutationList, observer) {
        for (const mutation of mutationList){
            if (mutation.type === 'childList'){
                var songDetails = getCurrentSongDetails()
                fetchFromBackground(songDetails[0], songDetails[1])
                console.log("mutation detected")
            }
        }
    }
    const observer = new MutationObserver(callback)
    observer.observe(targetNode, config)

    
    console.log("Test")
}


window.addEventListener("load", main)

