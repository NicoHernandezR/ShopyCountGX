function cards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const content = card.querySelector('.card-content');


      const buttons = content.querySelectorAll('button');

      card.addEventListener('mouseenter', () => {
        content.style.opacity = 1;
        content.style.visibility = 'visible';
        console.log('A')
        buttons.forEach(button => button.disabled = true);
        setTimeout(() => buttons.forEach(button => button.disabled = false),300);
      });
      card.addEventListener('mouseleave', () => {
        content.style.opacity = 0;
        content.style.visibility = 'hidden';
        buttons.forEach(button => button.disabled = true);
      });
    });
  }