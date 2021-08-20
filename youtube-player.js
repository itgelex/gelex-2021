// 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    tag.type = "text/javascript";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        width: '100%',
        videoId: 'dAKQd2aKyZU',
        playerVars: {
          autoplay: 1,
          playsinline: 1,
          controls: 1, 
          rel : 0,
          fs : 0,
          playlist: 'dAKQd2aKyZU',
          loop: 1,
          origin: 'https://ukm.ugm.ac.id'
        },
        events: {
          'onReady': onPlayerReady
        }
      });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      event.target.mute();
      event.target.playVideo();
    }
