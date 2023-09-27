const time_zone_list = ["Europe/London", "Africa/Djibouti","Europe/Talinn","Asia/Istanbul","Asia/Dubai","Indian/Maldives", "Asia/Dhaka", "Asia/Jakarta",
"Asia/Hong_Kong", "Asia/Seoul", "Australia/Canberra", "Pacific/Noumea", "Pacific/Nauru" ];

window.addEventListener('load', () =>{

    const triggerModalButton = document.querySelector("#triggerModal")
        triggerModalButton.addEventListener('click' , () =>{
        MicroModal.show('modal-1')
    })

    currentUTC = "Europe/London"
    displayHour(currentUTC);
    displayDate(currentUTC);

    const list = document.querySelector('#modal__content select');
    const select = document.getElementById('timezone');
    const modalButton = document.querySelector('#modal__content button');

    createTimezone(list, time_zone_list);

    list.addEventListener('change', (e) => {
        currentUTC = e.target.value
    })

    modalButton.addEventListener('click', (e) => {
        e.preventDefault()
        displayHour(select.options[select.selectedIndex].value);
        displayDate(select.options[select.selectedIndex].value)
    })

})


const displayHour = (timezone) => {

    // Display the current hour in the format => hh : mm : ss

    const hourDisplay = document.querySelector('.display-hour__hour')

    var now = new dayjs.utc().tz(timezone);
    const date = now.$d.toString();

    const hour = date.split(" ")[4] // The fith element of the date string is the current hour

    hourDisplay.innerHTML = hour;

}

const displayDate = (timezone) =>{

    // Dipsplay the current date in the format => day_in_letter, dd month_in_letter, yyyy

    const dateDisplay = document.querySelector('.display-hour__date')

    var now = new dayjs.utc().tz(timezone);
    const date = now.$d.toString()

    const month = date.split(" ")[1] // The second element of the date string is the current month
    const year = now.year();
    const day_of_month = now.date();
    const day_of_week = getDay(now.day());

    
    dateDisplay.innerHTML = day_of_week + ", " + day_of_month + " " + month + ", " + year; // Display the date in the correct format

}

const getDay = (index) =>{
    switch (index) {
        case 1:
            day = 'Monday'
            break;
        case 2:
            day = 'Tuesday'
            break;
        case 3:
            day = 'Wednesday'
            break;
        case 4:
            day = 'Thursday'
            break;
        case 5:
            day = 'Friday'
            break;
        case 6:
            day = 'Saturday'
            break;
        case 7:
            day = 'Sunday'
            break;  
        default:
            break;
    }
    return day;
}


const createTimezone = (listItem, tzList) => {
    
    tzList.forEach(tz => {

        let option = document.createElement('option');
        option.value = tz;
        option.textContent = tz

        listItem.appendChild(option);     
    })
}

