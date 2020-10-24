document.getElementById("btn").addEventListener("click", nmbr);

function nmbr() {
  var number = parseInt(document.getElementById("my_number").value);
  var i = 1;
  var toplam = 0;
  for (i; i < number; i++) {
    if (number % i === 0) {
      toplam += i;
    }
  }
  if (toplam === number) {
    document.getElementById("result").innerText = "it is a prime number";
  } else {
    document.getElementById("result").innerText = "it is a NOT prime number";
  }
  document.getElementById("my_number").value = " ";
}
