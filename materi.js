const materiHTML = `

<div class="accordion">

    <button class="accordion-btn"
        onclick="toggleAccordion('m1')">

        📘 Pengertian Limit

    </button>

    <div id="m1" class="accordion-content">

        <p>
            Limit adalah nilai yang didekati oleh suatu fungsi
            ketika variabelnya mendekati suatu nilai tertentu.
        </p>

        <div class="rumus">
            lim f(x)<br>
            x → a
        </div>

        <div class="contoh">

            <b>Contoh:</b><br><br>

            lim (x + 3)<br>
            x → 2

            <br><br>

            Penyelesaian:

            <br>

            = 2 + 3

            <br>

            = 5

        </div>

    </div>

</div>

<!-- ====================== -->

<div class="accordion">

    <button class="accordion-btn"
        onclick="toggleAccordion('m2')">

        📚 Jenis-Jenis Limit

    </button>

    <div id="m2" class="accordion-content">

        <ul>

            <li>Limit Aljabar</li>

            <li>Limit Faktorisasi</li>

            <li>Limit Akar Sekawan</li>

            <li>Limit Tak Hingga</li>

            <li>Limit Trigonometri</li>

        </ul>

    </div>

</div>

<!-- ====================== -->

<div class="accordion">

    <button class="accordion-btn"
        onclick="toggleAccordion('m3')">

        ➕ Limit Aljabar

    </button>

    <div id="m3" class="accordion-content">

        <p>
            Limit aljabar dapat diselesaikan dengan
            substitusi langsung jika tidak menghasilkan
            bentuk tak tentu.
        </p>

        <div class="contoh">

            <b>Contoh:</b>

            <br><br>

            lim (x² + 1)
            <br>
            x → 3

            <br><br>

            = 3² + 1

            <br>

            = 9 + 1

            <br>

            = 10

        </div>

    </div>

</div>

<!-- ====================== -->

<div class="accordion">

    <button class="accordion-btn"
        onclick="toggleAccordion('m4')">

        ✂️ Limit Faktorisasi

    </button>

    <div id="m4" class="accordion-content">

        <p>
            Digunakan jika substitusi menghasilkan
            bentuk 0/0.
        </p>

        <div class="contoh">

            <b>Contoh:</b>

            <br><br>

            lim (x² − 4)/(x − 2)
            <br>
            x → 2

            <br><br>

            = (x−2)(x+2)/(x−2)

            <br>

            = x + 2

            <br>

            = 2 + 2

            <br>

            = 4

        </div>

    </div>

</div>

<!-- ====================== -->

<div class="accordion">

    <button class="accordion-btn"
        onclick="toggleAccordion('m5')">

        √ Limit Akar Sekawan

    </button>

    <div id="m5" class="accordion-content">

        <p>
            Digunakan jika terdapat bentuk akar
            yang menghasilkan bentuk tak tentu.
        </p>

        <div class="contoh">

            <b>Contoh:</b>

            <br><br>

            lim (√(x+1)-2)/(x-3)
            <br>
            x → 3

            <br><br>

            Kalikan dengan akar sekawan

            <br><br>

            (√(x+1)+2)

            <br><br>

            = 1/(√(x+1)+2)

            <br>

            = 1/4

        </div>

    </div>

</div>

<!-- ====================== -->

<div class="accordion">

    <button class="accordion-btn"
        onclick="toggleAccordion('m6')">

        ∞ Limit Tak Hingga

    </button>

    <div id="m6" class="accordion-content">

        <p>
            Digunakan ketika x mendekati tak hingga.
        </p>

        <div class="contoh">

            <b>Contoh:</b>

            <br><br>

            lim (5x²−x+1)/(3x²+2)
            <br>
            x → ∞

            <br><br>

            Pangkat tertinggi sama

            <br><br>

            = 5 / 3

        </div>

    </div>

</div>

<!-- ====================== -->

<div class="accordion">

    <button class="accordion-btn"
        onclick="toggleAccordion('m7')">

        📐 Limit Trigonometri

    </button>

    <div id="m7" class="accordion-content">

        <p>
            Menggunakan limit istimewa.
        </p>

        <div class="rumus">

            lim sin x / x = 1
            <br>
            x → 0

        </div>

        <div class="rumus">

            lim tan x / x = 1
            <br>
            x → 0

        </div>

        <div class="contoh">

            <b>Contoh:</b>

            <br><br>

            lim sin x / x
            <br>
            x → 0

            <br><br>

            = 1

        </div>

    </div>

</div>

<!-- ====================== -->

<div class="accordion">

    <button class="accordion-btn"
        onclick="toggleAccordion('m8')">

        📝 Ringkasan Rumus

    </button>

    <div id="m8" class="accordion-content">

        <div class="rumus">

            lim sin x / x = 1

        </div>

        <div class="rumus">

            lim tan x / x = 1

        </div>

        <div class="rumus">

            a² − b² = (a−b)(a+b)

        </div>

        <div class="rumus">

            (a+b)² = a² + 2ab + b²

        </div>

        <div class="rumus">

            (a−b)² = a² − 2ab + b²

        </div>

    </div>

</div>

`;

window.addEventListener("DOMContentLoaded", function () {

    const container =
        document.getElementById("materi-container");

    if (container) {

        container.innerHTML = materiHTML;

    }

});