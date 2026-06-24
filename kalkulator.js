function hitungLimit() {

    const fungsi =
        document.getElementById("fungsi").value.trim();

    const nilai =
        document.getElementById("nilai").value.trim();

    const hasil =
        document.getElementById("hasil-limit");

    if (!fungsi || !nilai) {

        hasil.innerHTML =
            "<h3>Masukkan fungsi dan nilai x.</h3>";

        return;
    }

    try {

        let limitResult = "";

        // LIMIT TRIGONOMETRI ISTIMEWA

        if (
            fungsi.replace(/\s/g, "") === "sin(x)/x" &&
            nilai === "0"
        ) {

            limitResult = `
                <h3>Penyelesaian</h3>

                <p>Gunakan limit istimewa:</p>

                <div class="rumus">
                lim sin(x)/x = 1
                <br>
                x → 0
                </div>

                <h2>Jawaban Akhir = 1</h2>
            `;

            hasil.innerHTML = limitResult;
            return;
        }

        if (
            fungsi.replace(/\s/g, "") === "tan(x)/x" &&
            nilai === "0"
        ) {

            limitResult = `
                <h3>Penyelesaian</h3>

                <p>Gunakan limit istimewa:</p>

                <div class="rumus">
                lim tan(x)/x = 1
                <br>
                x → 0
                </div>

                <h2>Jawaban Akhir = 1</h2>
            `;

            hasil.innerHTML = limitResult;
            return;
        }

        // CEK SUBSTITUSI LANGSUNG

        let ekspresiSub =
            fungsi.replaceAll("x", "(" + nilai + ")");

        let hasilSub =
            math.evaluate(ekspresiSub);

        if (
            hasilSub !== Infinity &&
            hasilSub !== -Infinity &&
            !isNaN(hasilSub)
        ) {

            hasil.innerHTML = `

                <h3>Penyelesaian</h3>

                <p>Substitusi langsung:</p>

                <div class="rumus">
                ${ekspresiSub}
                </div>

                <h2>${hasilSub}</h2>

            `;

            return;
        }

        // FAKTORISASI DENGAN ALGEBRITE

        const expr =
            fungsi.replaceAll("^", "**");

        const numerator =
            expr.split("/")[0]
                .replace("(", "")
                .replace(")", "");

        const denominator =
            expr.split("/")[1]
                .replace("(", "")
                .replace(")", "");

        const faktorAtas =
            Algebrite.factor(numerator).toString();

        const faktorBawah =
            Algebrite.factor(denominator).toString();

        hasil.innerHTML = `

            <h3>Penyelesaian</h3>

            <p>
            Substitusi menghasilkan bentuk tak tentu (0/0).
            </p>

            <p>Faktorisasi:</p>

            <div class="rumus">

            Atas:
            <br>
            ${faktorAtas}

            <br><br>

            Bawah:
            <br>
            ${faktorBawah}

            </div>

            <p>
            Lakukan penyederhanaan secara manual.
            </p>

        `;

    }

    catch (error) {

        hasil.innerHTML = `

            <h3>Perhitungan gagal</h3>

            <p>
            Bentuk soal belum didukung kalkulator.
            </p>

        `;
    }
}

function resetKalkulator() {

    document.getElementById("fungsi").value = "";
    document.getElementById("nilai").value = "";

    document.getElementById("hasil-limit").innerHTML = "";
}