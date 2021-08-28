export let message = "";
export function cosmicCalculator(hmya){
    
    let result;
    console.log(hmya);
    // Variables i had to put on global scope
   

    // VARIABLES
    let year_sec = 31536000 // sec in a year;
    let universe_sec = 435196800000000000n // sec in 13.8 billion y/o universe;
    let day_sec = 86400 // sec in a day;

    let months = [[], [], [], [], [], [], [], [], [], [], [], []]
    let lastday = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    let month_names = ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October",
    "November", "December"];

    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let veracity = [];
    let ampm = "";

    function when(x){
        var date = [];

        var month_count = 11;
        var cal_day = x;
        // var cal_sec = hmcsa;
        var month_days = months[month_count].length;
        var day_count = month_days;

        let mark = false;
        while (mark === false){

            if (cal_day < day_count) {
               date.push(month_names[month_count]) // month
               var feedday = day_count - cal_day;
               date.push(feedday); // day
               var feedhour = (feedday - Math.floor(feedday))*24;
               date.push(feedhour); // hour
               var feedmin = (feedhour - Math.floor(feedhour))*60;
               date.push(feedmin); // minutes
               var feedsec = (feedmin - Math.floor(feedmin))*60;
               date.push(feedsec); // seconds
               mark = true;
               console.log("inside if...")
            }
            else {
                month_count -= 1;
                month_days = (months[month_count]).length;
                day_count += month_days;
                console.log("inside else...");
            }
            
        }
        return date;
    }
    

    // for loop... fills up the months with the days number
    months.forEach(i => {
        var day = 1;
        var total = lastday[months.indexOf(i)];
        while (day <= total){
            i.push(day);
            day += 1;
        }
    })

    // Check input
    for(var i=0; i < hmya.length; i++){
        if(numbers.includes(hmya[i])){
            veracity.push("yes");
        }
        else {
            veracity.push("no");
        }
    }

    // reject input, ask again 
    if(veracity.includes("no")){
        console.log("Sorry, the entered value is not supported.\n");
        veracity = [];
        message = "Sorry, the entered value is not supported.\n";
        
    }
    else if(hmya == ""){ //checks if empty
        console.log("No value detected. Try again.\n");
        message = "No value detected. Try again.\n";
    }
    else if(parseInt(hmya) == 13800000000){
        console.log("It is the beginning of space and time, the Big Bang!\n");
        message = "It is the beginning of space and time, the Big Bang!\n";
    }
    else if(parseInt(hmya) == 0){
        console.log("It is the present. What will the future hold?\n")
        message = "It is the present. What will the future hold?\n";
        // return "It is the present. What will the future hold?\n";
    }
    else if(parseInt(hmya) > 13800000000){
        console.log("That many years ago is before the beginning of time!");
        console.log("Try a smaller number.\n");
        message = "That many years ago is before the beginning of time!\n" + 
        "Try a smaller number";
    }

    // proceed with input and program

    else {
        let hmsa = parseInt(hmya) * year_sec; // hmsa = how many seconds ago
        let hmcsa = (hmsa * year_sec) / parseInt(universe_sec); // hmcsa = how many cal seconds ago
        let hmcda = hmcsa / day_sec; // hmcda = how many calendar days ago
        let dateArr = when(hmcda);

        //pre printing modifications
        dateArr[1] = (parseInt(Math.floor(dateArr[1] + 1))).toString();
        if(dateArr[2] > 12){
            dateArr[2] = (parseInt(Math.floor(dateArr[2] - 12))).toString();
            ampm = "PM";
        }
        else {
            dateArr[2] = parseInt(Math.floor(dateArr[2]));
            ampm = "AM";
        }

        if(dateArr[2] == 0){
            dateArr[2] = "12";
        }

        dateArr[3] = parseInt(Math.floor(dateArr[3])).toString();
        dateArr[4] = parseInt(Math.floor(dateArr[4])).toString();

        if(dateArr[3].length == 1){
            dateArr[3] = "0" + dateArr[3];
        }

        if(dateArr[4].length == 1){
            dateArr[4] = "0" + dateArr[4];
        }

        // final result:
        result = "The date is " + dateArr[0] + " " + dateArr[1] + 
        " at " + dateArr[2] + ":" + dateArr[3] + ":" + dateArr[4] + " " + ampm + "\n";


    }

    


    return result; 
}

