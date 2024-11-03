function calculatePentagon() {
    console.log('calculate clicked');
    
    let width=getItemValue('pentagonWidth')
    let hight=getItemValue('pentagonHight')
    let area= width * hight;

    let AreaSpans=document.getElementById('pentagonAreaSpan');
    AreaSpans.innerText=area;
}
