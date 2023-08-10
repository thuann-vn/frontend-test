import React from 'react';

function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  return (
    <button onClick={scrollToTop} className='scroll-to-top'>
        <img src='/Imagine/scroll_to_top.png' alt='トップへ' />
    </button>
  );
}

export default ScrollToTopButton;