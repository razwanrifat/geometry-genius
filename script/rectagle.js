function calculateRectagle() {
    console.log('calculate clicked');
    
    let Bases=document.getElementById('rectangleWidth')
    let BasesText=Bases.value;
    let width=parseFloat(BasesText)
    console.log(width);
    
    let Hights=document.getElementById('rectabgleHight')
    let HightsText=Hights.value;
    let hight = parseFloat(HightsText)
    console.log(hight);

    let area= width*hight;

    let AreaSpans=document.getElementById('rectangleAreaSpan');
    AreaSpans.innerText=area;
}