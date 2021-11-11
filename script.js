var a = prompt("Birinchi sonni kiriting: ")
var b = prompt("Ikkinchi sonni kiriting: ")
var c = prompt("Uchinchi sonni kiriting")
if( b<a && a<c || c<a && a<b) {
    alert("Qiymati o'rtancha son bu: " + a)
}



else if(a<b && b<c || c<b && b<a){
    alert("Qiymati o'rtancha son bu: " + b)
}



else if( a<c && c<b || b<c && c<a){
    alert("Qiymati o'rtancha son bu: " + c)
}



else{
    alert('Batafsil malumot uchun "ok" tugmasini bosing')
}