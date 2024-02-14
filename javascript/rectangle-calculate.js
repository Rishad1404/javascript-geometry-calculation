function calculateRectangleArea(){
    
    // Get width 
    const rectangleWidth=document.getElementById('rectangle-width');
    const rectangleWidthText=rectangleWidth.value;
    const width=parseFloat(rectangleWidthText);
    console.log(width);

    // Get length

    const rectangleLength=document.getElementById('rectangle-length');
    const rectangleLengthText=rectangleLength.value;
    const length=parseFloat(rectangleLengthText);
    console.log(length)

    // Calculate Area
    const rectangleArea=width*length;
    console.log('Area of the rectangle: ',rectangleArea);

    // Display Rectangle Area
    const rectangleAreaSpan=document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText=rectangleArea;
}
