let hour = document.querySelector('.clock__hour')
let min = document.querySelector('.clock__min')
let sec = document.querySelector('.clock__sec')



function clock() {

    const time = new Date();
    let hourArrow = time.getHours()
    let minuteArrow = time.getMinutes()
    let secondArrow = time.getSeconds()



    

    setTimeout(() => {
        clock()

    }, 1000);

    hour.innerHTML = hourArrow < 10 ? '0' + hourArrow : hourArrow
    min.innerHTML = minuteArrow < 10 ? '0' + minuteArrow : minuteArrow
    sec.innerHTML = secondArrow < 10 ? '0' + secondArrow : secondArrow
}

clock()