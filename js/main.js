function calculateOutput (totalFootage, showRate) {
    var output = document.getElementById("output");
    var totalFootage = document.querySelector('input[name="total-footage"]').value;
    var showRate = document.querySelector("input[name='show-rate']").value;
    var alertOkayBtn = document.querySelector("#alert-okay-btn");
    //Validator
    if (totalFootage <=0 || totalFootage == "" || showRate <= 0 || showRate == "") {
        document.querySelector('.alert-msg-box').style.display = 'flex';
    }

    alertOkayBtn.addEventListener('click', function () {
        document.querySelector('.alert-msg-box').style.display = 'none';
    })

    // initial output
        var initialOutput = totalFootage * showRate;

    // final output
        var finalOutput = initialOutput - (initialOutput * 0.10);

   //output text
       var outputText = "php " + finalOutput;

       output.innerText = outputText;   
}

document.getElementById('calculate-button').addEventListener('click', calculateOutput);