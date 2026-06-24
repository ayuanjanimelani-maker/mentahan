// ======================
// DATA SOAL
// ======================

const soalData = [

    {
        soal: "lim x→2 (x + 3)",
        jawaban: "5",
        pembahasan: `
            lim (x + 3)
            <br>
            x → 2
            <br><br>
            = 2 + 3
            <br>
            = 5
        `
    },

    {
        soal: "lim x→3 (x² + 1)",
        jawaban: "10",
        pembahasan: `
            lim (x² + 1)
            <br>
            x → 3
            <br><br>
            = 3² + 1
            <br>
            = 9 + 1
            <br>
            = 10
        `
    },

    {
        soal: "lim x→2 (2x + 1)",
        jawaban: "5",
        pembahasan: `
            = 2(2) + 1
            <br>
            = 4 + 1
            <br>
            = 5
        `
    },

    {
        soal: "lim x→1 (x² + 2x)",
        jawaban: "3",
        pembahasan: `
            = 1² + 2(1)
            <br>
            = 1 + 2
            <br>
            = 3
        `
    },

    {
        soal: "lim x→4 (x − 1)",
        jawaban: "3",
        pembahasan: `
            = 4 − 1
            <br>
            = 3
        `
    }

    // LANJUTKAN SAMPAI 50 SOAL

];

// ======================
// VARIABEL
// ======================

let nomorSoal = 0;
let skor = 0;

// ======================
// TAMPILKAN SOAL
// ======================

function tampilkanSoal() {

    const container =
        document.getElementById("soal-container");

    const progress =
        document.getElementById("progress");

    if (nomorSoal >= soalData.length) {

        let nilai =
            Math.round(
                (skor / soalData.length) * 100
            );

        container.innerHTML = `
            <div class="soal-box">

                <h2>Hasil Latihan</h2>

                <p>
                    Jawaban Benar : ${skor}
                </p>

                <p>
                    Jawaban Salah :
                    ${soalData.length - skor}
                </p>

                <h3>
                    Nilai Akhir :
                    ${nilai}
                </h3>

            </div>
        `;

        progress.innerHTML =
            "Latihan Selesai";

        return;
    }

    progress.innerHTML =
        "Soal " +
        (nomorSoal + 1) +
        " dari " +
        soalData.length;

    container.innerHTML = `

        <div class="soal-box">

            <h3>
                ${soalData[nomorSoal].soal}
            </h3>

            <input
                type="text"
                id="jawabanUser"
                placeholder="Masukkan jawaban"
            >

            <br><br>

            <button
                class="btn-jawab"
                onclick="cekJawaban()"
            >
                Cek Jawaban
            </button>

            <div id="hasil-jawaban"></div>

        </div>

    `;
}

// ======================
// CEK JAWABAN
// ======================

function cekJawaban() {

    const jawabanUser =
        document
        .getElementById("jawabanUser")
        .value
        .trim();

    const hasil =
        document
        .getElementById("hasil-jawaban");

    if (jawabanUser === "") {

        alert("Masukkan jawaban terlebih dahulu!");

        return;
    }

    if (
        jawabanUser ==
        soalData[nomorSoal].jawaban
    ) {

        skor++;

        hasil.innerHTML = `

            <div class="benar">

                ✅ Jawaban Benar

            </div>

            <br>

            <button
                class="btn-jawab"
                onclick="soalBerikutnya()"
            >
                Soal Berikutnya
            </button>

        `;

    } else {

        hasil.innerHTML = `

            <div class="salah">

                ❌ Jawaban Salah

            </div>

            <br>

            <button
                class="btn-jawab"
                onclick="lihatPembahasan()"
            >
                Lihat Pembahasan
            </button>

        `;

    }

}

// ======================
// PEMBAHASAN
// ======================

function lihatPembahasan() {

    const hasil =
        document
        .getElementById("hasil-jawaban");

    hasil.innerHTML += `

        <div class="pembahasan">

            <h4>Pembahasan</h4>

            ${soalData[nomorSoal].pembahasan}

            <br><br>

            <button
                class="btn-jawab"
                onclick="soalBerikutnya()"
            >
                Soal Berikutnya
            </button>

        </div>

    `;
}

// ======================
// NEXT SOAL
// ======================

function soalBerikutnya() {

    nomorSoal++;

    tampilkanSoal();

}

// ======================
// LOAD
// ======================

window.addEventListener(
    "DOMContentLoaded",
    function () {

        tampilkanSoal();

    }
);