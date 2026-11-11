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

async function updateServerStatus() {
    const status = document.getElementById("server-status");
    const players = document.getElementById("player-count");

    try {
        const response = await fetch(
            "https://api.mcstatus.io/v2/status/java/rats444.aternos.me"
        );

        if (!response.ok) {
            throw new Error("Status request failed");
        }

        const data = await response.json();

        if (data.online) {
            status.textContent = "● ONLINE";
            status.className = "online";

            const online = data.players?.online ?? "?";
            const max = data.players?.max ?? "?";

            players.textContent = `${online} / ${max}`;
        } else {
            status.textContent = "● OFFLINE";
            status.className = "offline";
            players.textContent = "0 / --";
        }
    } catch (error) {
        status.textContent = "STATUS UNAVAILABLE";
        status.className = "";
        players.textContent = "-- / --";
    }
}

updateServerStatus();
setInterval(updateServerStatus, 60000);
