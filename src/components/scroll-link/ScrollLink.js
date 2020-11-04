import './ScrolLink.scss';
import React from 'react';

function ScrollLink() {
   
  return (
    <section className="scroll">
      <a href="#" className="scroll_link">
        <p className="scroll_text">
          keep scrolling, there is still more to come
        </p>
      </a>
    </section>
  );
}

export default ScrollLink;