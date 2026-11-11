// RAT SMP - Website Scripts

function copyServerIP() {
    const serverIP = document.getElementById("server-ip").textContent;

    navigator.clipboard.writeText(serverIP)
        .then(() => {
            alert("RAT SMP IP copied!");
        })
        .catch(() => {
            alert("Couldn't copy the IP. Please copy it manually.");
        });
}
