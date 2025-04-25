let bookmarksFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let submitBtnEl = document.getElementById("submitBtn");


function createBookmark(siteName, siteUrl) {
    let bookmarkItemContainer = document.createElement("div");
    bookmarkItemContainer.classList.add("form-container");

    let bookmarkItemEl = document.createElement("li");
    bookmarkItemEl.classList.add("bookmark-item");

    let anchorTagEl = document.createElement("a");
    anchorTagEl.href = siteUrl;
    anchorTagEl.target = "_blank"; // Open link in a new tab
    anchorTagEl.textContent = ` (${siteUrl})`;

    let siteNameEl = document.createElement("h1");
    siteNameEl.classList.add("result-bookmark-heading");
    siteNameEl.textContent = `${siteName}`;


    bookmarkItemEl.appendChild(anchorTagEl);

    bookmarkItemContainer.appendChild(siteNameEl);
    bookmarkItemContainer.appendChild(bookmarkItemEl);
    return bookmarkItemContainer;
}


siteNameInputEl.addEventListener("change", function() {
    if (siteNameInputEl.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
        siteNameErrMsgEl.style.color = "#dc3545";
    } else {
        siteNameErrMsgEl.textContent = "";
    }

});
siteUrlInputEl.addEventListener("change", function() {
    if (siteUrlInputEl.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
        siteUrlErrMsgEl.style.color = "#dc3545";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }

});

function validateFormInputs() {
    let isValid = true;

    if (siteNameInputEl.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
        siteNameErrMsgEl.style.color = "#dc3545";
        isValid = false;
    }

    if (siteUrlInputEl.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
        siteUrlErrMsgEl.style.color = "#dc3545";
        isValid = false;
    }

    return isValid;
}

bookmarksFormEl.addEventListener("submit", function(event) {
    event.preventDefault();

    if (validateFormInputs()) {
        let newBookmarkItem = createBookmark(
            siteNameInputEl.value,
            siteUrlInputEl.value
        );
        document.getElementById("bookmarksList").appendChild(newBookmarkItem);

        // Clear input fields after successful submission
        siteNameInputEl.value = "";
        siteUrlInputEl.value = "";

        // Clear error messages after successful submission
        siteNameErrMsgEl.textContent = "";
        siteUrlErrMsgEl.textContent = "";
    }
});