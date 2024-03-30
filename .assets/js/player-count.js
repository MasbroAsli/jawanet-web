const on = document.getElementById("on");
const off = document.getElementById("off");

const API = "https://api.mcsrvstat.us/bedrock/3/jawa.servermc.xyz:10251";

function UpdateStats() {
  fetch(API)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error bang!");
      }
      return res.json();
    })
    .then((d) => {
      setTimeout(UpdateStats, 1000);
      if (d.online == true) {
        off.style.display = "none";
        on.style.display = "block";
      } else if (d.online == false) {
        off.style.display = "block";
        on.style.display = "none";
      }
    });
}

UpdateStats();
