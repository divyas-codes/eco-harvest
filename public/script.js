document.getElementById("pickupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const inputs = e.target.elements;

  const data = {
    name: inputs[0].value,
    email: inputs[1].value,
    phone: inputs[2].value,
    address: inputs[3].value,
    details: inputs[4].value
  };

  const res = await fetch("/api/pickup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    alert("Pickup request submitted!");
    e.target.reset();
  } else {
    alert("Error submitting request");
  }
});
