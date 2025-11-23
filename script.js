// 1. Interaktivitas Menggunakan JavaScript (Toggle dengan Confirm)
function toggleContentWithConfirm(headerElement, contentId) {
    const content = document.getElementById(contentId);
    
    // Pastikan konten sedang tersembunyi sebelum menampilkan pop-up
    if (content.classList.contains('hidden')) {
        const result = confirm("Apakah Anda ingin menampilkan konten di bawah?");
        
        if (result) {
            // Jika memilih "Ya", tampilkan konten
            content.classList.remove('hidden');
        } 
        // Jika memilih "Tidak", biarkan konten tetap tersembunyi (default)
    } else {
        // Jika konten sudah terbuka, langsung sembunyikan saat diklik lagi
        content.classList.add('hidden');
    }
}


// 2. Interaktivitas Menggunakan JavaScript (Toggle Mode Desain)
function toggleDesignMode() {
    const body = document.body;
    const modeSpan = document.getElementById('currentMode');
    
    if (body.classList.contains('mode-rapi')) {
        // Ganti ke Mode Berantakan
        body.classList.remove('mode-rapi');
        body.classList.add('mode-berantakan');
        modeSpan.textContent = 'Berantakan';
        console.log("Mode Berantakan Aktif");
    } else {
        // Ganti ke Mode Rapi
        body.classList.remove('mode-berantakan');
        body.classList.add('mode-rapi');
        modeSpan.textContent = 'Rapi';
        console.log("Mode Rapi Aktif");
    }
}