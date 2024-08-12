function validateAccess() {
    var kode = document.getElementById("kode").value;

    // Ganti kode_kurir dan kode_owner dengan kode akses yang sebenarnya
    var kode_owner = "130701";
    var kode_kurir = "5678";

    if (kode === kode_owner) {
        window.location.href = "owner.html";
    } else if (kode === kode_kurir) {
        window.location.href = "kurir.html";
    } else {
        alert("Kode akses salah!");
    }
}

function validateAccess() {
    var kode = document.getElementById("kode").value;
    var params = new URLSearchParams(window.location.search);
    var role = params.get('role');

    // Ganti kode_kurir dan kode_owner dengan kode akses yang sebenarnya
    var kode_owner = "130701";
    var kode_kurir = "5678";

    if (role === "owner" && kode === kode_owner) {
        window.location.href = "owner.html";
    } else if (role === "kurir" && kode === kode_kurir) {
        window.location.href = "kurir.html";
    } else {
        alert("Yah salah :(");
    }
}