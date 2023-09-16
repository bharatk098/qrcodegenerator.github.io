// Get elements by their IDs
const inputText = document.getElementById("inputText");
const generateButton = document.getElementById("generateButton");
const qrcode = document.getElementById("qrcode");
const downloadButton = document.getElementById("downloadButton");


generateButton.addEventListener("click", function () {
    const inputValue = inputText.value;

    if (inputValue.trim() !== "") {
        
        qrcode.innerHTML = "";

        
        const qr = new QRCode(qrcode, {
            text: inputValue,
            width: 200,
            height: 200,
        });

        
        downloadButton.style.display = "block";
    }
});


downloadButton.addEventListener("click", function () {

    const timestamp = Date.now();

   
    const a = document.createElement("a");

    
    a.href = qrcode.querySelector("img").src;

    
    a.download = `qr-code-${timestamp}.png`;

    
    a.click();
});
