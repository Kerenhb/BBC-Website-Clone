
// Get todays date in correct format
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

var today = new Date();
var dateString = dayNames[today.getDay()] + ", " + today.getDate() + " " + monthNames[today.getMonth()];
document.getElementById("date").innerText = dateString;

// 'Customise your homepage' popup box
function customise () {
    alert(`Make the Homepage yours
          'Add and remove topics ${today}
          'Get recommended TV for you
          'Set your location to see weather and local news
          'Sign in to your BBC account, or Register

                      hello
          'Sign in or Register`);
}