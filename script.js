// RAT SMP - Website Scripts

// Copy the server IP
function copyServerIP() {
    const serverIP = "rats444.aternos.me ";

    navigator.clipboard.writeText(serverIP)
        .then(() => {
            alert("Server IP copied!");
        })
        .catch(() => {
            alert("Couldn't copy the server IP. Please copy it manually.");
        });
}

