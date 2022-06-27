

function submit(){      
      let feet = document.getElementById('feetTxt').value;
      let inch = document.getElementById('inchTxt').value;
      let solution = document.getElementById('solution');
      let inches = inch * feet;
      inches += 2;
      const cm = inches * 2.54;
      solution.textContent = `${cm}cm`;
}
