document.getElementById("iconUpload").addEventListener("change", function () {
  const fileInput = this;
  const tileIcon = document.getElementById("tileIcon");

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      tileIcon.src = e.target.result;
    };

    reader.readAsDataURL(fileInput.files[0]);
  }
});

function toggleLighting() {
  const miniserverAddress = document.getElementById("miniserverAddress").value;
  const controllerName = document.getElementById("controllerName").value;
  const statusElement = document.getElementById("status");

  // ill use API call to control the lighting circuit
  // toggle between On and Off for sample view
  const currentStatus = statusElement.innerText;
  const newStatus = currentStatus === "On" ? "Off" : "On";

  // Update the status
  statusElement.innerText = newStatus;

  // Send a command to the Miniserver
  console.log(
    `Lighting on ${controllerName} in Miniserver at ${miniserverAddress} is now ${newStatus}`
  );
}
