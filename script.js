// Unduh surat
localStorage.setItem("ID", "151120221");
document.getElementById('btn-lihat').addEventListener('click', () => {
    let localData = localStorage.getItem("ID")
    let idSurat = document.getElementById('id-surat').value
    if(idSurat == localData){
        Swal.fire({
            text: "Permohonan surat Anda telah selesai, silahkan mengunduh surat",
            iconHtml: '<ion-icon name="log-out-outline"></ion-icon>',
            iconColor: '#D90429',
            confirmButtonText: "Unduh Surat",
            confirmButtonColor: '#D90429',
            allowOutsideClick: false
        })
    } else if (idSurat == null) {
        Swal.fire({
            text: "Silahkan masukkan ID permohonan",
            iconHtml: '<ion-icon name="log-out-outline"></ion-icon>',
            iconColor: '#D90429',
            allowOutsideClick: true
        })
    } else {
        Swal.fire({
            text: "ID Permohonan tidak tersedia",
            iconHtml: '<ion-icon name="log-out-outline"></ion-icon>',
            iconColor: '#D90429',
            allowOutsideClick: true
        })
    }
})

// Daftar surat
function onButtonClickEdit() {
    window.location = "detail-surat.html";
}

// let localData = localStorage.getItem("PW")
// if(localData !== null){
//     document.getElementById('proses').innerHTML = '<p>Sukses</p>';
//     proses.style.cssText = "color:"
// }