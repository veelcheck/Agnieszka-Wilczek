const goUpButton = document.getElementById('go-up');

export function ScrollToTop() {

  goUpButton.addEventListener('click', () => {
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
  }) 
}
