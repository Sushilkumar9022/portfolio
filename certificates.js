// ======================================
// CERTIFICATE VIEWER
// ======================================

function openCertificate(imageName) {

    const modal =
        document.getElementById("certificateModal");

    const preview =
        document.getElementById("certificatePreview");


    preview.src = imageName;

    modal.classList.add("show");


    // Prevent background scrolling
    document.body.style.overflow = "hidden";
}



// ======================================
// CLOSE CERTIFICATE
// ======================================

function closeCertificate() {

    const modal =
        document.getElementById("certificateModal");


    modal.classList.remove("show");


    // Enable scrolling again
    document.body.style.overflow = "auto";
}



// ======================================
// CLICK OUTSIDE IMAGE
// ======================================

document
    .getElementById("certificateModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeCertificate();

        }

    });



// ======================================
// ESC KEY
// ======================================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeCertificate();

        }

    }
);