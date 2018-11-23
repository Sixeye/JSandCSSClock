var i = 0

function setDate() { 
    console.log("a second " + i);
    i++;
};

setInterval(setDate, 1000);