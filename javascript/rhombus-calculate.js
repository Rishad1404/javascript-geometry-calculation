function calculateRhombusArea(){
    
    // Get distance 1
    const rhombusDistance1=document.getElementById('rhombus-distance1');
    const rhombusDistance1Text=rhombusDistance1.value;
    const distance1=parseFloat(rhombusDistance1Text)
    // console.log(distance1)

    // Get distance 2
    const rhombusDistance2=document.getElementById('rhombus-distance1');
    const rhombusDistance2Text=rhombusDistance2.value;
    const distance2=parseFloat(rhombusDistance2Text)
    // console.log(distance2)

    // Calculate Area
    const rhombusArea=0.5*distance1*distance2;
    console.log('The area of the rhombus is: ',rhombusArea)

    // CalCulate Area Display
    const rhombusAreaSpan=document.getElementById('rhombus-area')
    rhombusAreaSpan.innerText=rhombusArea;
}