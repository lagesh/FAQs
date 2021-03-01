const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener('click', event => {
    const currentlyActiveHeader = document.querySelector('.accordion-item-header.active');
    if (currentlyActiveHeader && currentlyActiveHeader !== accordionItemHeader) {
      currentlyActiveHeader.classList.toggle('active');
      currentlyActiveHeader.nextElementSibling.style.maxHeight = 0;
    }
    accordionItemHeader.classList.toggle('active');
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains('active')) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  })
})