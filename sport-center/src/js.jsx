import React, { useState } from 'react';

function ClassesSection() {
    const [navbarBgColor, setNavbarBgColor] = useState('transparent');

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

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setNavbarBgColor('#355592');
        } else {
            setNavbarBgColor('transparent');
        }
    };

    window.addEventListener('scroll', handleScroll);

    const calculateBMI = () => {
        const height = parseFloat(document.querySelector("#height").value);
        const weight = parseFloat(document.querySelector("#weight").value);

        const bmi = weight / ((height / 100) * (height / 100));

        const bmiValueElement = document.querySelector("#bmiValue");
        bmiValueElement.textContent = "Your BMI: " + bmi.toFixed(2);

        const screenWidth = window.innerWidth;
        const divdirAfter = document.querySelector(".divdir2");

        if (screenWidth > 576) {
            if (bmi < 18.5) {
                divdirAfter.style.left = "93px";
            } else if (bmi >= 18.5 && bmi < 25) {
                divdirAfter.style.left = "190px";
            } else if (bmi >= 25 && bmi < 30) {
                divdirAfter.style.left = "290px";
            } else if (bmi >= 30 && bmi < 35) {
                divdirAfter.style.left = "390px";
            } else {
                divdirAfter.style.left = "490px";
            }
        } else {
            if (bmi < 18.5) {
                divdirAfter.style.left = "60px";
            } else if (bmi >= 18.5 && bmi < 25) {
                divdirAfter.style.left = "125px";
            } else if (bmi >= 25 && bmi < 30) {
                divdirAfter.style.left = "190px";
            } else if (bmi >= 30 && bmi < 35) {
                divdirAfter.style.left = "255px";
            } else {
                divdirAfter.style.left = "320px";
            }
        }

        document.querySelector("#height").value = "";
        document.querySelector("#weight").value = "";
        if (isNaN(height) || isNaN(weight)) {
            divdirAfter.style.left = "";
        }
    };

    return (
        <section>
            {/* Your JSX content here */}
        </section>
    );
}

export default ClassesSection;
