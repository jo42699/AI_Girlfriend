
async function sendPrompt() {
 const prompt = document.getElementById('promptInput').value;

    try {
        const res = await fetch('http://localhost:3000/v1/aiSlop', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt })
        });

        const data = await res.json();
        document.getElementById('responseBox').textContent = data.result;

    } catch (error) {
        console.error('Error sending prompt:', error);
    }

}

window.sendPrompt = sendPrompt;




