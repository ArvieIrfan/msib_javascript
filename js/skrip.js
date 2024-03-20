function dataPerson(){
    let forms = document.getElementById('frm')
    let nama = forms.nama.value
    let kerjaan = forms.kerjaan.value
    let hobi = forms.hoby.value

    let ket = "Halo teman teman <br> nama saya adalah " + nama + " pekerjaan saya sekarang adalah sebagai seorang " + kerjaan
               + "<br> dan saya memiliki berbagai hobi yang di mana hobi saya adalah " + hobi
    let no_ket = "Ada data yang tidak diisi dimohon untuk mengisi semua data yang ada"
    let hasil = (nama && kerjaan && hobi != '') ? ket : no_ket

    document.getElementById('hasil').innerHTML = hasil

    // tugasnya adalah lengkapi kode berikut dan tampilkan hasilnya pada HTML
    // 1. isian nama
    // 2. isian pekerjaan
    // 3. isian hobby
}