/*document.cookie = "nama=NilaiCookie";

function bacaCookie(nama) {
  var namaEQ = nama + "=";
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) == "") cookie = cookie.substring(1, cookie.length);
    if (cookie.indexOf(namaEQ) == 0)
      return cookie.substring(namaEQ.length, cookie.length);
  }
  return null;
}

console.log(bacaCookie("nama"));
console.log(bacaCookie("umur"));*/
