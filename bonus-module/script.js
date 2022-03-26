const images = [
    'images/clipbord.PNG',
    'images/code.png',
    'images/console-problems.PNG',
    'images/undifinde.PNG'
]
const img = document.getElementById('img')
let imageIndex = 0;
setInterval(() => {
    if(imageIndex >= images.length){
        imageIndex = 0
    }
    const imgUrl = images[imageIndex]
    img.setAttribute('src', imgUrl)
    img.style.width = '200px'
    // console.log(imgUrl);
    // imageIndex++
}, 1000);

const next = () =>  {
imageIndex++
}
const prev = () =>  {
 imageIndex--

}