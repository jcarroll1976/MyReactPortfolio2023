import React from 'react';
import "./testimonials.scss"

function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
        <h1>Testimonials</h1>
        <div className="container">
          <div className="card">
            <div className="top">
              <img src="assets/right-arrow.png" alt="" />
              <img src="https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
              <img src="assets/youtube.png" />
            </div>
            <div className="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
              ullam nemo, in aspernatur aut fuga.
            </div>
            <div className="bottom">
              <h3>Alex</h3>
              <h4>CEO of LAMA</h4>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Testimonials