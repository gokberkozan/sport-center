import React from 'react';

function TrainerSection() {
  return (
    <section>
      <div className="part-3-section">
        <section className="part-3">
          <br />
          <div className="trainers">
            <h1 style={{ textAlign: 'center' }}>OUR BEST TRAINERS</h1>
            <p className="orangep" style={{ textAlign: 'center' }}>---------</p>
            <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error ullam ea commodi delectus pariatur illum esse unde, aperiam nostrum?</p>
          </div>
          <section className="part-3-up">
            <div className="image-container">
              <img src="../src/Images/trainer1.jpg" alt="" />
              <div className="divdiv2">
                <div className="divdiv3"></div>
              </div>
              <div className="bottombox">
                <div className="boxbox">
                  <div className="boxbox2"></div>
                </div>
                <div className="overlay">JOHNSSEN DOE<br />Coach</div>
              </div>
            </div>
            <div className="image-container">
              <img src="../src/Images/trainer2.jpg" alt="" />
              <div className="divdiv2">
                <div className="divdiv3"></div>
              </div>
              <div className="bottombox">
                <div className="boxbox">
                  <div className="boxbox2"></div>
                </div>
                <div className="overlay">ERSİN MUTLU<br />Powerlifter</div>
              </div>
            </div>
            <div className="image-container">
              <img src="../src/Images/trainer3.jpg" alt="" />
              <div className="divdiv2 ">
                <div className="divdiv3"></div>
              </div>
              <div className="bottombox">
                <div className="boxbox">
                  <div className="boxbox2"></div>
                </div>
                <div className="overlay">JOHNİFFER DOE<br />Cardio trainer</div>
              </div>
            </div>
          </section>
        </section>
        <section className="part-3-down">
          <div className="purchasetext">
            <h1>PURCHASE FROM US</h1>
            <p className="orangep" style={{ textAlign: 'center' }}>---------</p>
            <p style={{ textAlign: 'center' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, consectetur libero quia tempora non aspernatur ipsum, fugit cum magni eum, incidunt voluptate saepe dolorem! Iusto molestias magni veniam sunt numquam ex quidem qui reprehenderit nihil! Ea ducimus dolorem voluptatem assumenda eos doloribus?</p>
          </div>
          <section className="down-images">
            <div className="card">
              <img src="../src/Images/purchase1.jpg" alt="Kart resmi" />
              <div className="card-info">
                <h2>Ketllebel / 5 kg</h2>
                <p><s>89,99$</s> / 59.99$</p>
                <div className="card-icon">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqpO7rojXZGqfjRnVTTeAahaqa_zCmTXTrQ&usqp=CAU" alt="Sepet simgesi" className="cart-icon" />
                  <p>Add to Cart</p>
                </div>
              </div>
            </div>
            <div className="card">
              <img className="icon" src="../src/Images/purchase2.jpg" alt="Kart resmi" />
              <div className="card-info">
                <h2>Treadmill</h2>
                <p><s>899,99$</s> / 599.99$</p>
                <div className="card-icon">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqpO7rojXZGqfjRnVTTeAahaqa_zCmTXTrQ&usqp=CAU" alt="Sepet simgesi" className="cart-icon" />
                  <p>Add to Cart</p>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="../src/Images/purchase3.jpg" alt="Kart resmi" />
              <div className="card-info">
                <h2>Adjustable Dumbbell</h2>
                <p><s>89,99$</s> / 59.99$</p>
                <div className="card-icon">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqpO7rojXZGqfjRnVTTeAahaqa_zCmTXTrQ&usqp=CAU" alt="Sepet simgesi" className="cart-icon" />
                  <p>Add to Cart</p>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="../src/Images/purchase4.jpg" alt="Kart resmi" />
              <div className="card-info">
                <h2>Kettlebell / 3kg</h2>
                <p><s>89,99$</s> / 59.99$</p>
                <div className="card-icon">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqpO7rojXZGqfjRnVTTeAahaqa_zCmTXTrQ&usqp=CAU" alt="Sepet simgesi" className="cart-icon" />
                  <p>Add to Cart</p>
                </div>
              </div>
            </div>
          </section>
          <br /><br />
        </section>
      </div>
    </section>
  );
}

export default TrainerSection;
