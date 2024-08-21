import React from 'react';

function ClassesSection() {
  const showContent = (contentId) => {
    document.querySelectorAll('.organic > div').forEach(div => {
      div.style.display = 'none';
    });

    document.getElementById(contentId + 'Content').style.display = 'block';

    document.querySelectorAll('.image-content img').forEach(img => {
      img.style.display = 'none';
    });

    let imageId = '';
    switch (contentId) {
      case 'yoga':
        imageId = 'yogaImage';
        break;
      case 'group':
        imageId = 'groupImage';
        break;
      case 'solo':
        imageId = 'soloImage';
        break;
      case 'stretching':
        imageId = 'stretchingImage';
        break;
      default:
        break;
    }
    if (imageId !== '') {
      document.getElementById(imageId).style.display = 'block';
    }
  };

  return (
    <section className="secondback">
      <div className="back"></div>
      <div className="divdivdiv">
        <br />
        <h1>OUR CLASSES</h1>
        <p className="orangep" style={{ textAlign: 'center' }}>---------</p>
        <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illum accusantium non ea explicabo corporis quod culpa qui enim rem.</p>
      </div>
      <section className="ortala">
        <div className="container">
          <div className="direction-group">
            <ul className="direction">
              <li><button onClick={() => showContent('yoga')}>Yoga</button></li>
              <li><button onClick={() => showContent('group')}>Group</button></li>
            </ul>
          </div>
          <div className="direction-group">
            <ul className="direction">
              <li><button onClick={() => showContent('solo')}>Solo</button></li>
              <li><button onClick={() => showContent('stretching')}>Stretching</button></li>
            </ul>
          </div>
        </div>
        <div className="btnimg">
          <section className="organic">
            <div id="yogaContent">
              <h2>Why Are Your Yoga Time</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem pariatur accusamus natus dolorem amet sunt ad corporis animi sequi nulla.</p>
              <br /><br />
              <h2>When comes Yoga Your Time</h2>
              <p>Saturday-Sunday:8:00am - 10:00am</p>
              <p>Monday-Tuesday:10:00am - 12:00pm</p>
              <p>Wednesday-Friday:3:00pm - 6:00pm</p>
            </div>
            <div id="groupContent" style={{ display: 'none' }}>
              <h2>Why Are Your Group Time</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni pariatur est facere corporis excepturi sed facilis atque alias hic molestias?</p>
              <br /><br />
              <h2>When comes Group Your Time</h2>
              <p>Saturday-Sunday:8:00am - 18:00am</p>
              <p>Monday-Tuesday:10:00am - 11:00pm</p>
              <p>Wednesday-Friday:3:00pm - 11:00pm</p>
            </div>
            <div id="soloContent" style={{ display: 'none' }}>
              <h2>Why Are Your Solo Time</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores dolore non ullam fugit mollitia delectus excepturi ad. Ex ea commodi distinctio.</p>
              <br /><br />
              <h2>When comes Solo Your Time</h2>
              <p>Saturday-Sunday:8:00am - 11:00am</p>
              <p>Monday-Tuesday:10:00am - 13:00pm</p>
              <p>Wednesday-Friday:3:00pm - 7:00pm</p>
            </div>
            <div id="stretchingContent" style={{ display: 'none' }}>
              <h2>Why Are Your Stretching Time</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, doloremque ex adipisci provident amet illum aspernatur soluta nisi.</p>
              <br /><br />
              <h2>When comes Stretching Your Time</h2>
              <p>Saturday-Sunday:8:00am - 14:00am</p>
              <p>Monday-Tuesday:10:00am - 15:00pm</p>
              <p>Wednesday-Friday:3:00pm - 9:00pm</p>
            </div>
          </section>
          <div className="image-content">
            <img id="yogaImage" src="../src/Images/yoga.jpg" alt="" />
            <img id="groupImage" src="../src/Images/group.webp" alt="" style={{ display: 'none' }} />
            <img id="soloImage" src="../src/Images/solo.jpg" alt="" style={{ display: 'none' }} />
            <img id="stretchingImage" src="../src/Images/stret.webp" alt="" style={{ display: 'none' }} />
          </div>
        </div>
      </section>
      <br /><br />
    </section>
  );
}

export default ClassesSection;
