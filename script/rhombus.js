
function calculateRhombus() {
    console.log('calculate clicked');
    
    let width=getItemValue('rhombusWidth')
    let hight=getItemValue('rhombusHight')
    let area= width * hight;

    let AreaSpans=document.getElementById('rhombusAreaSpan');
    AreaSpans.innerText=area;
}

function getItemValue(itemId) {
    let item = document.getElementById(itemId);
    let itemText=item.value;
    let itemValue = parseFloat(itemText) ;
    console.log(itemValue);
    
    return itemValue;
}

