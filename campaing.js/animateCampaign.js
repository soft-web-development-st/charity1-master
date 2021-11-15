const  CounterValue  = document.querySelector('.counter-one')

function progressC(){

    let progress = setInterval(() => {
        value ++
        CounterValue.textContent = `${value}%`;
        
        progressBar.style.background = `conic-gradient(
         rgb(131, 131, 131) ${value * 3.6}deg,
         #fff ${value * 3.6}deg)`
       
            if (value == endValue) {
                clearInterval(progress)
            }
            
        },speed)
    }
    progressC()
    bol = true

    export default progressC