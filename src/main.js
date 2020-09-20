let html = document.querySelector("#demo");

let style = document.querySelector("#style");

let string = `
/*大家好，
今天来给大家画一个太极图

首先
把背景色稍微加深一些*/
body{
  background:#e3e3e3;
}

/*
*然后
*我要生成一个div
*/
#div1{
  border:1px solid black;
  width:200px;
  height:200px;
}

/*
接下来
我要把这个div变成一个圆
*/
#div1{
  border-radius:50%;
  box-shadow:0 0 3px rgba(0,0,0,0.4);
  border:none
}

/*
* 太极是一黑一白的
*/

#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/*
*画出黑白两条鱼
*/

#div1::before{
  width:100px;
  height:100px;
  top:0;
  left:50%;
  transform:translateX(-50%);
  background:#000;
  border-radius:50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}


#div1::after{
  width:100px;
  height:100px;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  background:#ffffff;
  border-radius:50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;

let string2 = "";
console.log(string.length);

let n = -1;

let step = () => {
  setTimeout(() => {
    console.log(n);

    n += 1;

    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }

    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);

    window.scrollTo(0, 999999);
    demo.scrollTo(0, 999999);
    if (n < string.length - 1) {
      step();
    }
  }, 1);
};

step();
