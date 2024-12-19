import React, { useRef } from "react";
import { gsap } from "gsap";

const CardList = () => {
  const cardsRef = useRef([]);
  
  // Function to trigger GSAP animation on click
  const handleAnimate = () => {
    gsap.to(cardsRef.current, {
      x: -50,
      opacity: 0,
      stagger: 0.3,
      ease: "power1.out",
      duration: 1,
    });
  };

  return (
    <div className="card-list">
      <button onClick={handleAnimate} style={{ marginBottom: "20px" }}>
        Trigger Animation
      </button>
      {[1, 2, 3, 4, 5].map((card, index) => (
        <div
          key={index}
          className="card"
          ref={(el) => (cardsRef.current[index] = el)} // Set each card to its index in cardsRef array
          style={{
            width: "200px",
            height: "100px",
            margin: "10px",
            background: "#ccc",
            opacity: 1, // Ensure it's visible before animation
          }}
        >
          Card {card}
        </div>
      ))}
    </div>
  );
};

export default CardList;
