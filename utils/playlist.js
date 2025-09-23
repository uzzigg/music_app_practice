import getRandom from "./utils.js"

const playlist = [];

export default function createPlaylist(max){

    console.log(playlist)

    if(playlist.length !== max){

        let song = getRandom(max);

        if(playlist.includes(song)){
            createPlaylist(max);
        }else{
            playlist.push(song);
            createPlaylist(max)
        }
    }

    return playlist;
}