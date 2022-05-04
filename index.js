const fac = {
  method() {
    console.log("context : ", this); //fac
    let func1 = function () {
      console.log("[일반함수 func2] this : " , this);
    }
    let func2 = () => 
      console.log("[화살표함수 func2] this : " , this);
    
    func1(); // global
    func2(); // fac 화살표 함수이기때문에 호출된 위치인 method
  },
};

fac.method();