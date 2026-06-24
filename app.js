// ======================
// LOGIN
// ======================

function masuk() {

    let nama = document.getElementById("nama").value.trim();
    let npm = document.getElementById("npm").value.trim();
    let kelas = document.getElementById("kelas").value.trim();

    if (nama === "" || npm === "" || kelas === "") {
        alert("Silakan isi Nama, NPM, dan Kelas terlebih dahulu!");
        return;
    }

    document.getElementById("login-page").style.display = "none";
    document.getElementById("dashboard").style.display = "block";

    document.getElementById("welcome").innerHTML =
        "Selamat Datang, <b>" +
        nama +
        "</b> | NPM: " +
        npm +
        " | Kelas: " +
        kelas;

    showPage("materi");
}

// ======================
// NAVIGASI HALAMAN
// ======================

function showPage(id) {

    let pages = document.querySelectorAll(".page");

    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    document.getElementById(id).style.display = "block";
}

// ======================
// ACCORDION MATERI
// ======================

function toggleAccordion(id) {

    let content = document.getElementById(id);

    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

// ======================
// SAAT HALAMAN DIMUAT
// ======================

window.onload = function () {

    let dashboard =
        document.getElementById("dashboard");

    if (dashboard) {
        dashboard.style.display = "none";
    }

};

// ======================
// ENTER UNTUK LOGIN
// ======================

document.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        let loginPage =
            document.getElementById("login-page");

        if (
            loginPage &&
            loginPage.style.display !== "none"
        ) {
            masuk();
        }

    }

});