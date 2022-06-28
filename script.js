let emailCollecterForm = document.getElementById("emailCollector");
let mainContentUpdate = document.getElementById("mainContent")
emailCollecterForm.addEventListener("submit", event => {
    event.preventDefault()

    let ourFormData = new FormData(event.target);

    let userFirstname = ourFormData.get("firstName");
    let userEmail = ourFormData.get("emailAddress");

    let updatedHtmlCotent = `
    <h2>Congratulation ${userFirstname}!</h2>
    <p>Your on your way to become a BBQ master.</p>

    <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmail}</p>`

    mainContentUpdate.innerHTML = updatedHtmlCotent;

}

)