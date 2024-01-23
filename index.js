let home = document.getElementById("home")
let guest = document.getElementById("guest")

let homeTeam = 0
let guestTeam = 0

function addhome1() {
    homeTeam += 1
    home.textContent = homeTeam
    console.log("home scores 1!")  
}
function addhome2() {
    homeTeam += 2
    home.textContent = homeTeam
    console.log("home scores 2!")
}
function addhome3() {
    homeTeam += 3
    home.textContent = homeTeam
    console.log("home scores 3!")
}
function addguest1() {
    guestTeam += 1
    guest.textContent = guestTeam
    console.log("home scores 1!")  
}
function addguest2() {
    guestTeam += 2
    guest.textContent = guestTeam
    console.log("guest scores 2!")
}
function addguest3() {
    guestTeam += 3
    guest.textContent = guestTeam
    console.log("guest scores 3!")
}