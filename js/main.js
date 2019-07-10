function calculateOutput (totalFootage, showRate) {
    var output = document.getElementById("output");
    var totalFootage = document.querySelector('input[name="total-footage"]').value;
    var showRate = document.querySelector("input[name='show-rate']").value;


    // initial output

        var initialOutput = totalFootage * showRate;

    // final output

        var finalOutput = initialOutput - (initialOutput * 0.10);

   //output text
   
       var outputText = "php " + finalOutput;

       output.innerText = outputText;   
}

document.getElementById('calculate-button').addEventListener('click', calculateOutput);