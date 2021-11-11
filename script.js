var first = prompt("Birinchi sonni kiriting: ")
var second = prompt("Ikkinchi sonni kiriting: ")
var third = prompt("Uchinchi sonni kiriting")
if( first>second && first<third || first>third && first<second) {
    alert("Qiymati o'rtancha son bu: " + first)
}



else if(second>first && second<third || second>third && second<first){
    alert("Qiymati o'rtancha son bu: " + second)
}



else if(third>first && third<second || third>second && third<first){
    alert("Qiymati o'rtancha son bu: " + third)
}



else{
    alert('Batafsil malumot uchun "ok" tugmasini bosing')
}