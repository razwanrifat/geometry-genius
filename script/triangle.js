function calculateTringle() {
    console.log('calculate clicked');
    
    let tringleBases=document.getElementById('tringleBase')
    let tringleBasesText=tringleBases.value;
    let base=parseFloat(tringleBasesText)
    console.log(base);
    
    let traingleHights=document.getElementById('traingleHight')
    let traingleHightsText=traingleHights.value;
    let hight = parseFloat(traingleHightsText)
    console.log(hight);

    let area= 0.5*base*hight;

    let traingleAreaSpans=document.getElementById('traingleAreaSpan');
    traingleAreaSpans.innerText=area;
}