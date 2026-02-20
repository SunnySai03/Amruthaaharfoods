function trackOrder() {
  const awb = document.getElementById("awb").value.trim();
  const courier = document.getElementById("courier").value;

  if (!awb || !courier) {
    alert("Please enter AWB number and select courier.");
    return;
  }

  let url = "";

  if (courier === "delhivery") {
    url = `https://www.delhivery.com/track/package/${awb}`;
  }

  if (courier === "ekart") {
    url = `https://ekartlogistics.com/track/${awb}`;
  }

  window.open(url, "_blank");
}
