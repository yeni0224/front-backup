const figlet = require("figlet");
 
figlet("test", function(err, data) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});