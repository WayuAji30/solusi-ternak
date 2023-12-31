document.addEventListener("DOMContentLoaded", function () {
  const paragraphs = [
    "manajemen-penanaman",
    "manajemen-pembibitan",
    "manajemen-kandang",
    "manajemen-pengelolaan",
    "manajemen-forum-sosial",
    "manajemen-integrasi-iot",
  ];

  let currentParagraphIndex = 0; // Set default to 'mobile-manajemen-penanaman'

  function updateParagraph() {
    const currentParagraphId = paragraphs[currentParagraphIndex];

    // Hide all divs
    paragraphs.forEach((paragraphId) => {
      const div = document.getElementById(paragraphId);
      if (div) {
        div.style.display = "none";
      }
    });

    // Show the current div
    const currentDiv = document.getElementById(currentParagraphId);
    if (currentDiv) {
      currentDiv.style.display = "block";
    }
  }

  function nextParagraph() {
    currentParagraphIndex = (currentParagraphIndex + 1) % paragraphs.length;
    updateParagraph();
    setButtonOnClick();
  }

  function prevParagraph() {
    currentParagraphIndex =
      (currentParagraphIndex - 1 + paragraphs.length) % paragraphs.length;
    updateParagraph();
    setButtonOnClick();
  }

  function setButtonOnClick() {
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    const currentId = paragraphs[currentParagraphIndex];

    // Define a function to set onclick attributes
    const setOnClickAttributes = (prevId, nextId) => {
      prevButton.setAttribute("onclick", showContent("${prevId}"));
      nextButton.setAttribute("onclick", showContent("${nextId}"));
    };

    switch (currentId) {
      case "mobile-manajemen-penanaman":
        setOnClickAttributes(
          "mobile-manajemen-integrasi-iot",
          "mobile-manajemen-pembibitan"
        );
        break;
      case "mobile-manajemen-pembibitan":
        setOnClickAttributes(
          "mobile-manajemen-penanaman",
          "mobile-manajemen-kandang"
        );
        break;
      case "mobile-manajemen-kandang":
        setOnClickAttributes(
          "mobile-manajemen-pembibitan",
          "mobile-manajemen-pengelolaan"
        );
        break;
      case "mobile-manajemen-pengelolaan":
        setOnClickAttributes(
          "mobile-manajemen-kandang",
          "mobile-manajemen-forum-sosial"
        );
        break;
      case "mobile-manajemen-forum-sosial":
        setOnClickAttributes(
          "mobile-manajemen-pengelolaan",
          "mobile-manajemen-integrasi-iot"
        );
        break;
      case "mobile-manajemen-integrasi-iot":
        setOnClickAttributes(
          "mobile-manajemen-forum-sosial",
          "mobile-manajemen-penanaman"
        );
        break;
      default:
        // Kasus khusus jika di awal, kembali ke paragraf terakhir
        setOnClickAttributes(
          "mobile-manajemen-forum-sosial",
          "mobile-manajemen-integrasi-iot"
        );
        break;
    }
  }

  function showContent(contentId) {
    // Find index of contentId in paragraphs array
    const index = paragraphs.indexOf(contentId);

    if (index !== -1) {
      currentParagraphIndex = index;
      updateParagraph();
      setButtonOnClick();
    }
  }

  // Attach event listeners to buttons
  document.getElementById("next").addEventListener("click", nextParagraph);
  document.getElementById("prev").addEventListener("click", prevParagraph);

  // Initial update
  updateParagraph();
  setButtonOnClick();
});
