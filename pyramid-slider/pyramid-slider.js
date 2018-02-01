
function determineParametersAndThenDrawPyramid() {
    
    console.log("Someone called determineParametersAndThenDrawPyramid");

    var heightStr = document.getElementById("rowSlider").value;
    document.getElementById("heightInput").innerHTML = heightStr;

    var character = document.getElementById("drawBrickSymbol").value;


    height = parseInt(heightStr);

    

    drawPyramid(height, character);

    }
    
    var drawSymbol = document.getElementById("drawBrickSymbol");
    drawSymbol.addEventListener("change", 
    determineParametersAndThenDrawPyramid
    );
    
    var rowSlider = document.getElementById("rowSlider");
    rowSlider.addEventListener("input", 
    determineParametersAndThenDrawPyramid
    );
    
  
    determineParametersAndThenDrawPyramid();
    


 function drawPyramid(height, character) {

     document.getElementById("pyramid").innerHTML = ""


    for (var row = 0; row < height; row++) {

  
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

    
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += " ";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += character;
         }

        textElem = document.createTextNode(rowStr);

        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        document.getElementById("pyramid").appendChild(rowElem);
    }
}