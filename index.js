/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const loveAnswer = document.getElementById("love-ans")
const kissAnswer = document.getElementById("kiss-ans")
const hugAnswer = document.getElementById("hug-ans")
const convertLove = 5000.281
const convertKiss = 4500.264
const convertHug = 3500.204
const inputValue = document.getElementById("input-value")


function convert(){
    let value = parseFloat(inputValue.value)
    let loveInJay = value * convertLove
    let kissInJay = value * convertKiss
    let hugInJay = value * convertHug
    
    let loveInJayRounded = loveInJay.toFixed(3)
    let kissInJayRounded = kissInJay.toFixed(3)
    let hugInJayRounded = hugInJay.toFixed(3)
    
    if (value > 1) {
        loveAnswer.innerHTML = `${value} Chanti "I love you's" is equal to ${loveInJayRounded} Jay's "I love you's"`
        kissAnswer.innerHTML = `${value} Chanti kisses is equal to ${kissInJayRounded} Jay's kisses`
        hugAnswer.innerHTML = `${value} Chanti hugs is equal to ${hugInJayRounded} Jay's hugs`
    } else {
    loveAnswer.innerHTML = `${value} Chanti "love you" is equal to ${loveInJayRounded} Jay's "I love you's"`
    kissAnswer.innerHTML = `${value} Chanti kiss is equal to ${kissInJayRounded} Jay's kisses`
    hugAnswer.innerHTML = `${value} Chanti hug is equal to ${hugInJayRounded} Jay's hugs`
    }
}
