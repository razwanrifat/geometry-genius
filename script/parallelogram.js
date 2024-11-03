function calculateParalleogram() {
    console.log('calculate clicked');
    
    let Bases=document.getElementById('parallelogramBase')
    let BasesText=Bases.value;
    let width=parseFloat(BasesText)
    console.log(width);
    
    let Hights=document.getElementById('parallelogramHight')
    let HightsText=Hights.value;
    let hight = parseFloat(HightsText)
    console.log(hight);

    let area= width*hight;

    let AreaSpans=document.getElementById('parallelogramAreaSpan');
    AreaSpans.innerText=area;
}