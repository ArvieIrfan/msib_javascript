let frm = document.getElementById('penggajian')
let jabatans = ["Manager", "Asisten Manager","Staff"]
let pilihJabatan = `<option value=""> --- pilih jabatan --- </option>`
for(let j in jabatans){
    pilihJabatan += `<option value="${jabatans[j]}"> ${jabatans[j]}</option>`
}
frm.jabatan.innerHTML = pilihJabatan
let statusu = ["Menikah","Belum"]
let pilihStatus = `<option value=""> --- pilih status --- </option>`
for(let s in statusu){
    pilihStatus += `<option value="${statusu[s]}"> ${statusu[s]} </option>`
}
frm.status.innerHTML = pilihStatus
function gajian(){
    let nama = frm.nama.value
    let jabatan = frm.jabatan.value
    let status = frm.status.value

    let gapok
    if(jabatan == "Manager"){
        gapok = 15000000
    }
    else if(jabatan == "Asisten Manager"){
        gapok = 10000000
    }
    else if(jabatan == "Staff"){
        gapok = 5000000
    }
    else {
        gapok = 0
    }

    let tunjab = gapok * 0.15
    let bpjs = gapok * 0.1
    let tunkel = (status == "Menikah") ? gapok * 0.2 : 0

    let total_gaji = gapok + tunjab + bpjs + tunkel
    let no = 0
    let hasil = `
    <table align="center" border="1" cellpadding="10" cellspacing="0" width="65%">
        <thead>
            <tr>
                <th>#</th>
                <th>Nama Pegawai</th>
                <th>Jabatan</th>
                <th>Status</th>
                <th>Gaji Pokok</th>
                <th>Tunjangan Jabatan</th>
                <th>BPJS</th>
                <th>Tunjangan Keluarga</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>${nama}</td>
                <td>${jabatan}</td>
                <td>${status}</td>
                <td>Rp. ${gapok.toLocaleString()}</td>
                <td>Rp. ${tunjab.toLocaleString()}</td>
                <td>Rp. ${bpjs.toLocaleString()}</td>
                <td>Rp. ${tunkel.toLocaleString()}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th colspan="2">Total Gaji</th>
                <th colspan="6">Rp. ${total_gaji.toLocaleString()}</th>
            </tr>
        </tfoot>
    </table>
    `

    document.getElementById('hasil').innerHTML = hasil
}