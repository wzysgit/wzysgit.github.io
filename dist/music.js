const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: true,
    audio: [
      {
        name: '纽约地铁',
        artist: '周杰伦',
        url: '/img/周杰伦- 纽约地铁.aac',
        cover: '/img/jay.png',
      },
      {
        name: '战争',
        artist: '陈冠希',
        url: '/img/战争.m4a',
        cover: '/img/zhanzheng.jpg',
      }
    ]
});