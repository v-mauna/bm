const swapDivs = (div1,div2) => {
    div1 = document.getElementById(div1)
    div2 = document.getElementById(div2)
    if(div2.style.display == 'none'){
        console.log('div2')
        div1.style.display = 'none'
        div2.style.display = 'flex'
    }else{
    div2.currentTime = 0
    div2.pause()
    div1.style.display = 'block'
    div2.style.display = 'none'

}
}

export default swapDivs