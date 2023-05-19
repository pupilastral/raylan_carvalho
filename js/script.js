// function adjustFooterPosition() {
//     const content = document.querySelector('.content');
//     const footer = document.querySelector('footer');
//     const windowHeight = window.innerHeight;
//     const contentHeight = content.offsetHeight;
//     const footerHeight = footer.offsetHeight;
  
//     if (windowHeight > contentHeight + footerHeight) {
//       footer.style.position = 'fixed';
//       footer.style.bottom = 0;
//     } else {
//       footer.style.position = 'static';
//     }
//   }
  
//   window.addEventListener('load', adjustFooterPosition);
//   window.addEventListener('resize', adjustFooterPosition);