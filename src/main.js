let demo = document.querySelector("#demo");

// let n = 0;
// demo.innerHTML = n;

// setTimeout(() => {
//   n += 1;
//   demo.innerHTML = n;
// }, 200);
//settimeout只会执行一次

//setInterval可以重复执行
//但是老手不会用setInterval
//会用递归的settimeout

// setInterval(() => {
//   n += 1;
//   demo.innerHTML = n;
// }, 5000);

let string = `
大家好，
众所周知，
郑秀晶是我老婆
啦啦啦啦啦

添加样式
body
{
    color:red
}`;

let string2 = "";
console.log(string.length);

let n = -1;

let step = () => {
  setTimeout(() => {
    console.log(n);
    n += 1;
    if (string[n] === "\n") {
      string2 += "<br>";
    } else {
      string2 += string[n];
    }

    demo.innerHTML = string2;
    if (n < string.length - 1) {
      step();
    }
  }, 100);
};

step();
