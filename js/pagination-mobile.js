document.addEventListener("DOMContentLoaded", function () {
  const paragraphs = [
    "mobile-manajemen-penanaman",
    "mobile-manajemen-pembibitan",
    "mobile-manajemen-kandang",
    "mobile-manajemen-pengelolaan",
    "mobile-manajemen-forum-sosial",
    "mobile-manajemen-integrasi-iot",
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

    switch (currentId) {
      case "mobile-manajemen-penanaman":
        prevButton.setAttribute(
          "onclick",
          "showContent('manajemen-integrasi-iot')"
        );
        nextButton.setAttribute(
          "onclick",
          "showContent('manajemen-pembibitan')"
        );
        break;
      case "mobile-manajemen-pembibitan":
        prevButton.setAttribute(
          "onclick",
          "showContent('manajemen-penanaman')"
        );
        nextButton.setAttribute("onclick", "showContent('manajemen-kandang')");
        break;
      case "mobile-manajemen-kandang":
        prevButton.setAttribute(
          "onclick",
          "showContent('manajemen-pembibitan')"
        );
        nextButton.setAttribute(
          "onclick",
          "showContent('manajemen-pengelolaan')"
        );
        break;
      case "mobile-manajemen-pengelolaan":
        prevButton.setAttribute(
          "onclick",
          "showContent('manajemen-pembibitan')"
        );
        nextButton.setAttribute(
          "onclick",
          "showContent('manajemen-forum-sosial')"
        );
        break;
      case "mobile-manajemen-forum-sosial":
        prevButton.setAttribute(
          "onclick",
          "showContent('manajemen-pengelolaan')"
        );
        nextButton.setAttribute(
          "onclick",
          "showContent('manajemen-integrasi-iot')"
        );
        break;
      case "mobile-manajemen-integrasi-iot":
        prevButton.setAttribute(
          "onclick",
          "showContent('manajemen-forum-sosial')"
        );
        nextButton.setAttribute(
          "onclick",
          "showContent('manajemen-penanaman')"
        );
        break;
      default:
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
