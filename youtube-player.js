  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
console.log("player dibuat")
  function onYouTubeIframeAPIReady() {
    console.log("player dibuat 2")
    player = new YT.Player('player', {
      width: '100%',
      videoId: 'dAKQd2aKyZU',
      playerVars: { 'autoplay': 1, 'playsinline': 1 },
      events: {
        'onReady': onPlayerReady
      }
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
     console.log("player played")
     event.target.mute();
    event.target.playVideo();
  }
