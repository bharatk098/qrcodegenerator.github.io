const generateButton = document.getElementById('generate-button');
const textInput = document.getElementById('text-input');
const qrCodeContainer = document.getElementById('qr-code-container');
const downloadLink = document.getElementById('download-link');

generateButton.addEventListener('click', async () => {
    const text = textInput.value;
    if (text.trim() !== '') {
        const apiEndpoint = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
            text
        )}`;

        try {
            const response = await fetch(apiEndpoint);
            if (response.ok) {
                const data = await response.blob();

                // Display QR code image
                const qrCodeImage = document.createElement('img');
                qrCodeImage.src = URL.createObjectURL(data);
                qrCodeContainer.innerHTML = '';
                qrCodeContainer.appendChild(qrCodeImage);

                // Show download link
                downloadLink.style.display = 'inline-block';
                downloadLink.href = qrCodeImage.src;
                downloadLink.download = 'qrcode.png';
            } else {
                throw new Error('Failed to generate QR code');
            }
        } catch (error) {
            console.error(error);
        }
    }
});
