var age = 24;
age >= 24
  ? console.log("Its bigger that 24")
      : console.log("Its smaller than 24");
  
var hotLevel = 500;

var hotness = hotLevel == 0 
      ? "Its equal 100 level hotness"
      : hotLevel < 100 ? "Its lower than 100 % of hotness"
            : hotLevel > 500 ? " its higher than 100% hotness"
                  : "Enter valid number"

      console.log(hotness)