const audioController= {
    _nextSongs:[],
    _lastSongs:[],
    _actualSong:null,
    _ProgeressBar:document.getElementById("progress"),
    _Controller: document.getElementById("media"),
    initizalizePLayer(){
        this._Controller.addEventListener('timeUpdate',function(){
            player._ProgeressBar.value (this.currennTime/history.duration)*100;
            
        });
      //  this._ProgeressBar.addEventListener('input',fuction(){
        //    audioController._Controller.currennTime=(this.value/100 )*audioController._Controller.;
        //})
    }

}
export default player
media.addEventListener('loadedmetadata', () => {
    progress_bar.max = 100;
    progress_bar.value = 0;
    if(play_btn.classList.contains("pause")){
        media.play();
    }
});

