module.exports=(x,y,callback2)=>{
  if(x<=0 || y<=0){
    setTimeout(() =>
      callback2(new Error("Rectangle detail a = "+
        +x+" and b = "+y),
      null),
      2000);
  }
  else {
    setTimeout(() =>
      callback2(null,{
        perimeter : () =>(2*(x+y)),
        area : () =>(x*y)
      }),
    2000);
  }
}
