function makeRed() {
    document.body.style.backgroundColor = "red";
  }
  
  // handel blue button click by setting function name
  const blueButton = document.getElementById("make-blue-button");
  // jst the set on the function
  blueButton.onclick = makeBlue;
  function makeBlue() {
    document.body.style.backgroundColor = "blue";
  }
  
  const greenButton = document.getElementById("make-green-button");
  // anonymous function
  greenButton.onclick = function makegreen() {
    document.body.style.backgroundColor = "green";
  };
  
  // handale by using eventlistener
  const goldenbutton = document.getElementById("make-goldenrod");
  goldenbutton.addEventListener("click", makeGoldenRod);
  
  function makeGoldenRod() {
    document.body.style.backgroundColor = "goldenrod";
  }
  
  // add eventlistener
  const hotpinkButton = document.getElementById("make-hotpink");
  console.log(hotpinkButton);
  
  hotpinkButton.addEventListener("click", function makePink9() {
    document.body.style.backgroundColor = "hotpink";
  });
  
  // DIRECT shortcart 
  document.getElementById('make-light-blue').addEventListener('click', function(){
      document.body.style.backgroundColor= '#ADD8E6';
    })