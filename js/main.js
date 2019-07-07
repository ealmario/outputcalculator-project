var calculateBtn = document.getElementById("calculateBtn");
var output = document.getElementById("output");

function calculateOutput (totalFootage, showRate) {
    var totalFootage = document.getElementById("totalFootage").value;
    var showRate = document.getElementById("showRate").value;
    // initial output

        var initialOutput = totalFootage * showRate;

    // final output

        var finalOutput = initialOutput - (initialOutput * 0.10);

   //output text
   
       var outputText = "php " + finalOutput;

       output.innerText = outputText;

}

calculateBtn.addEventListener("click", calculateOutput());