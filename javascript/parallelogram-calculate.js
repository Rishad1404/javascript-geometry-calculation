function calculateParallelogramArea(){
    // Get the base
    const parallelogramBase=document.getElementById('parallelogram-base');
    const parallelogramBaseText=parallelogramBase.value;
    const base=parseFloat(parallelogramBaseText);
    // console.log(base)

    // Get the height
    const parallelogramHeight=document.getElementById('parallelogram-height');
    const parallelogramHeightText=parallelogramHeight.value;
    const height=parseFloat(parallelogramHeightText);
    // console.log(height);

    // Calculate the Area
    const parallelogramArea=base*height;
    console.log('The area of parallelogram is: ',parallelogramArea)

    // Display the area
    const parallelogramAreaSpan=document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText=parallelogramArea;
}