const urlInput = document.getElementById("urlInput");
const goBtn = document.getElementById("goBtn");
const frame = document.getElementById("viewerFrame");
const cards = document.querySelectorAll(".card");

function normalizeUrl(value) {
  if (!value) return "";
  if (!value.startsWith("http://") && !value.startsWith("https://")) {
    return "https://" + value;
  }
  return value;
}

goBtn.addEventListener("click", () => {
  const url = normalizeUrl(urlInput.value.trim());
  if (url) {
    frame.src = url;
  }
});

urlInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    goBtn.click();
  }
});

cards.forEach(card => {
  card.addEventListener("click", () => {
    const url = card.getAttribute("data-url");
    urlInput.value = url;
    frame.src = url;
  });
});
