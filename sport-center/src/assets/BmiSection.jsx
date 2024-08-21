import React, { useState } from 'react';

function BmiSection() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [divdirLeft, setDivdirLeft] = useState('');

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));

    const screenWidth = window.innerWidth;
    let leftPosition;
    if (screenWidth > 576) {
      if (bmiValue < 18.5) {
        leftPosition = "93px";
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        leftPosition = "190px";
      } else if (bmiValue >= 25 && bmiValue < 30) {
        leftPosition = "290px";
      } else if (bmiValue >= 30 && bmiValue < 35) {
        leftPosition = "390px";
      } else {
        leftPosition = "490px";
      }
    } else {
      if (bmiValue < 18.5) {
        leftPosition = "60px";
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        leftPosition = "125px";
      } else if (bmiValue >= 25 && bmiValue < 30) {
        leftPosition = "190px";
      } else if (bmiValue >= 30 && bmiValue < 35) {
        leftPosition = "255px";
      } else {
        leftPosition = "320px";
      }
    }
    setDivdirLeft(leftPosition);

    setHeight('');
    setWeight('');
  };

  return (
    <section className="bmi">
      <div className="bmiContet">
        <h2>BMI Calculator</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi totam dolore consequatur iure a nihil ut incidunt non nemo, atque molestiae eius dolores molestias distinctio repudiandae libero, dolorem odio expedita reprehenderit eveniet! Ea perferendis amet, repellat repudiandae, id suscipit officiis omnis laboriosam, perspiciatis tempora non libero sed cupiditate quae optio.</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, natus recusandae. Soluta aliquid incidunt dolorum at quisquam, illo ut tempora repellendus totam provident porro molestias, dolorem a, quidem amet voluptatibus id quod veritatis beatae! Enim nisi doloremque odit, asperiores maxime vero? Adipisci pariatur corporis consequatur culpa dicta eveniet rerum provident..</p>
        <br /><br />
        <section className="text">
          <input
            type="number"
            id="height"
            placeholder="Your Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            type="number"
            id="weight"
            placeholder="Your Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <button onClick={calculateBMI}>Calculate BMI</button>
        </section>
      </div>
      <div className="yourbm" id="part-3">
        <h1>Your BMI</h1>
        <p id="bmiValue" style={{ textAlign: 'center' }}>{bmi}</p>
        <div className="divdir">
          <img className="image" src="../src/Images/bmi-index.jpg" alt="" />
          <div className="divdir2" style={{ left: divdirLeft }}></div>
        </div>
        <br />
      </div>
    </section>
  );
}

export default BmiSection;
