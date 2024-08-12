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
    var paket = document.getElementById("paket").value;
    var nama = document.getElementById("nama").value;
    var alamat = document.getElementById("alamat").value;
    var keterangan = document.getElementById("keterangan").value;
    var harga = formatRupiah(document.getElementById("harga").value);

    var pesan = `*Paket:* ${paket}\n\n*Nama:* ${nama}\n*Alamat:* ${alamat}\n*Keterangan:* ${keterangan}\n*Harga:* ${harga}`;

    document.getElementById("pesan").innerText = pesan;

    // Buat link WhatsApp dengan pesan
    var whatsappLink = `https://wa.me/6282299194875?text=${encodeURIComponent(pesan)}`;
    var linkButton = document.getElementById("whatsappLink");
    linkButton.setAttribute("href", whatsappLink);
    linkButton.style.display = "inline-block";

    // Kosongkan form setelah pesan dibuat
    document.getElementById("formOwner").reset();
}

function openWhatsApp() {
    var link = document.getElementById("whatsappLink").getAttribute("href");
    window.open(link, '_blank');
}