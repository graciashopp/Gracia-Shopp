function sendOrder() {
    var nama = document.getElementById("nama").value;
    var alamat = document.getElementById("alamat").value;
    var telp = document.getElementById("telp").value;

    var pesan = `*Pesanan Baru:*\n\n*Nama:* ${nama}\n*Alamat:* ${alamat}\n*No telp/WhatsApp:* ${telp}`;

    // Buat link WhatsApp dengan pesan
    var whatsappLink = `https://wa.me/6285280596278?text=${encodeURIComponent(pesan)}`;

    // Arahkan pengguna ke WhatsApp
    window.open(whatsappLink, '_blank');

    // Tampilkan alert
    alert("Anda telah membuat pesanan, berarti siap membayar. Terimakasih...");
    
    // Kosongkan form setelah pesan dikirim
    document.getElementById("formCustomer").reset();
}

document.getElementById('telp').addEventListener('input', function() {
    var telp = document.getElementById('telp');
    if (!telp.value.startsWith("+62")) {
        telp.value = "+62" + telp.value.slice(3);
    }
});

function sendOrder() {
    var nama = document.getElementById("nama").value;
    var alamat = document.getElementById("alamat").value;
    var telp = document.getElementById("telp").value;

    var pesan = `*Nama:* ${nama}\n*Alamat:* ${alamat}\n*No Telp/WhatsApp:* ${telp}`;
    var whatsappLink = `https://wa.me/6285280596278?text=${encodeURIComponent(pesan)}`;
    
    alert('Anda so ba pesan, berarti siap mobayar. Terimakasih...');
    window.open(whatsappLink, '_blank');

    document.getElementById("formCustomer").reset();
    document.getElementById("telp").value = "+62"; // Set default value back to +62 after reset
}