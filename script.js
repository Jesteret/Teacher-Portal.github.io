setTimeout(function() {
    document.getElementById('loader').classList.add('hide');
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
    }, 100);
}, 2000);