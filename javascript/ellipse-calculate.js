function calculateEllipseArea(){
    // Get the base
    const ellipseBase=document.getElementById('ellipse-base');
    const ellipseBaseText=ellipseBase.value;
    const base=parseFloat(ellipseBaseText)
    // console.log(base);

    // Get the Height
    const ellipseHeight=document.getElementById('ellipse-height');
    const ellipseHeightText=ellipseHeight.value;
    const height=parseFloat(ellipseHeightText)
    // console.log(height);

    // calculate the area
    const ellipseArea=3.1416*base*height;
    console.log('The area of ellipse is: ',ellipseArea);

    // Display the area
    const ellipseAreaSpan=document.getElementById('ellipse-area');
    ellipseAreaSpan.innerText=ellipseArea;

}