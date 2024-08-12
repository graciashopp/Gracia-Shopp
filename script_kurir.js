function formatRupiah(angka) {
    angka = angka + '000';
    var number_string = angka.replace(/[^,\d]/g, '').toString(),
        split = number_string.split(','),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    return 'Rp.' + rupiah;
}

function generateMessage() {
    var nama = document.getElementById("nama").value;
    var alamat = document.getElementById("alamat").value;
    var keterangan = document.getElementById("keterangan").value;
    var harga = formatRupiah(document.getElementById("harga").value);
    var wa = document.getElementById("wa").value;

    var pesan = `Halo *${nama}*, kami dari *Gracia'Shop* akan melakukan pengantaran paket COD:\n\n*Nama:* ${nama}\n*Alamat:* ${alamat}\n*Keterangan:* ${keterangan}\n*Harga:* ${harga}\n\nMohon kesediaannya untuk membayar pesanan anda seharga *${harga}*, Terima kasih...
    Silahkan shareloc (Berbagi Lokasi) anda jika bersedia menerima paket!`;

    document.getElementById("pesan").innerText = pesan;

    // Buat link WhatsApp dengan pesan
    var whatsappLink = `https://wa.me/${wa}?text=${encodeURIComponent(pesan)}`;
    var linkButton = document.getElementById("whatsappLink");
    linkButton.setAttribute("href", whatsappLink);
    linkButton.style.display = "inline-block";

    // Kosongkan form setelah pesan dibuat
    document.getElementById("formKurir").reset();
}

function openWhatsApp() {
    var link = document.getElementById("whatsappLink").getAttribute("href");
    window.open(link, '_blank');
}