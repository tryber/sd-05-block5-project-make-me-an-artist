function clearBoard() {
  for (let i = 0; i < 5; i+=1) {
    for (let n = 0; n < 5; n+=1) {
      document.querySelectorAll('.linha')[i].chil.style.backgroundColor = 'white';
    }
  }
}
