function calculateTriangleArea(){

    // Get triangle Base value
    const triangleBaseInput=document.getElementById('triangle-base');
    const triangleBaseText=triangleBaseInput.value;
    const base=parseFloat(triangleBaseText);
    console.log(typeof base)

    // Get triangle height value
    const triangleHeightInput=document.getElementById('triangle-height');
    const triangleHeightText=triangleBaseInput.value;
    const height=parseFloat(triangleHeightText);
    console.log(typeof height);

    // Calculate the Area
    const area=0.5*base*height;
    console.log(area)


    // Display area
    const triangleAreaSpan=document.getElementById('triangle-area')
    triangleAreaSpan.innerText=area;
}