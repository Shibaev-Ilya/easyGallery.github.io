var src = [
    'img/side.jpg',
    'img/back.jpg',
    'img/top.jpg',
    'img/front.jpg'
]

var allPic = document.querySelectorAll('.pic');

var bigPic = document.querySelector('.full');

var addAllClick =function (srcs, photo) {
photo.addEventListener('click', function () {
        bigPic.src = srcs;
        console.log('click')
    })
};

for( var i = 0; i < src.length ; i++ ) {
    addAllClick(src[i], allPic[i]);
}
