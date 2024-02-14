function calculatePentagonArea(){
    
    // Get the perimeter
    const pentagonPerimeter=document.getElementById('pentagon-size1');
    const pentagonPerimeterText=pentagonPerimeter.value;
    const perimeter=parseFloat(pentagonPerimeterText);
    console.log(perimeter)

    // Get the base
    const pentagonBase=document.getElementById('pentagon-size2');
    const pentagonBaseText=pentagonBase.value;
    const base=parseFloat(pentagonBaseText);
    console.log(base)

    // calculate the area
    const pentagonArea=0.5*perimeter*base;
    console.log('The area of pentagon is: ',pentagonArea);

    // Display the area
    const pentagonAreaSpan=document.getElementById('pentagon-area');
    pentagonAreaSpan.innerText=pentagonArea;

}