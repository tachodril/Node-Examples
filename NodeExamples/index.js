var rect= require('./rectangle');
function solveRect(l,b){
  console.log("Solving for rectangle with l = "+l+" and b = "+b);

  rect(l,b,(err,result) =>{
    if(err){
      console.log("Error is "+err.message);
    }
    else{
      console.log("Area = "+result.area()
      +" and perimeter is "+result.perimeter());
    }
  });

  console.log("Thereafter bhkloli --!!--QUALITY");

}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);
