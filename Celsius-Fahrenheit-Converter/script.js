function fahrenheit() {
    // alert(Math.round((document.getElementById("fahrenheit").value - 32) / 1.8) + "C")
    document.getElementById("celsius").value = Math.round((document.getElementById("fahrenheit").value - 32) / 1.8)
}

function celsius() {
    // alert(Math.round(document.getElementById("celsius").value * 1.8 + 32))
    document.getElementById("fahrenheit").value = Math.round(document.getElementById("celsius").value * 1.8 + 32)
}