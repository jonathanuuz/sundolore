// Assuming you want to rotate an element with the ID "second" based on a variable called "second":
const second = 45; // Example value, replace with your desired rotation angle in degrees
const rotationStyle = `rotate(${second}deg)`;
$('#second').css("transform", rotationStyle);
