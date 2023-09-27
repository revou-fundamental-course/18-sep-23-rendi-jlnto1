        // Logika JavaScript untuk validasi form
        function validasiForm() {
            const nama = document.getElementById('nama').value;
            const email = document.getElementById('email').value;
            const pilihanBarang = document.getElementById('pilihan-barang').value;

            if (nama === "" || email === "" || pilihanBarang === "") {
                alert("Mohon isi semua kolom!");
                return false;
            }
            return true;
        }

        // Logika JavaScript untuk menambahkan barang ke keranjang
        function tambahKeKeranjang(namaBarang) {
            // Tambahkan logika sesuai kebutuhan Anda untuk mengelola keranjang belanja
            alert(namaBarang + " ditambahkan ke keranjang.");
        }
        // auto slide show
        // Auto Slide JavaScript
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".menu-item");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Ubah gambar setiap 3 detik
}

showSlides();
 
