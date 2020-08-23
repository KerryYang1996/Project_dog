const string = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    // background: yellow;
  }
  .dog {
    border:1px solid black;
    margin:0 auto;
    height: 50vh;
    position: relative;
    background:yellow;
  }
  .head {
    width: 100px;
    height: 80px;
    border-radius: 40%;
    background: white;
    position: relative;
    z-index: 3;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .head > .face {
    position: absolute;
    z-index: 4;
    background: #f79e38;
    width: 50px;
    height: 40px;
  }
  .face_left {
    top: -13px;
    left: -17px;
    border-radius: 30%;
    transform: rotate(10deg);
  }
  
  .face_right {
    top: -10px;
    right: -7px;
    border-radius: 0 10%;
  }
  .head > .eye {
    position: absolute;
    top: 20px;
    z-index: 5;
    border: 1px solid black;
    width: 8px;
    height: 8px;
    background: black;
    border-radius: 50%;
    animation: shinning 5s infinite;
  }
  @keyframes shinning {
    0%,
    100% {
      animation-timing-function: step-end;
    }
    50%,
    55% {
      animation-timing-function: step-start;
      opacity: 0;
    }
  }
  .eye_left {
    left: 32px;
  }
  .eye_right {
    right: 30px;
  }
  .ear {
    width: 40px;
    height: 70px;
    position: absolute;
    z-index: 2;
    background: #e88f36;
    top: 50%;
    left: 50%;
    

}
  .ear_left {
    border-radius: 20% 80%;
    transform: translate(-130%, -115%);
  }
  .ear_right {
    border-radius: 80% 20%;
    transform: translate(30%,-115%);
  }
  .nose {
     
    position: absolute;
    z-index:4;
    // top: 245px;
    // left: 185px;
    top: 50%;
    left: 50%;
    transform: translateX(-65%);
    width: 100px;
    height: 100px;
  }
  .nose_white {
    position: absolute;
    background: white;
    z-index: 6;
    top: -8px;
    left: 0px;
    width: 70px;
    height: 40px;
    border-radius: 10% 0 40% 30%/50%;
    transform: rotateZ(20deg);
  }
  
  .nose_black {
    position: absolute;
    z-index: 7;
    top: -20px;
    left: 0px;
    width: 25px;
    height: 20px;
    background: black;
    border-radius: 40% 50%;
  }
  
  .head > .mouth {
    border: 3px solid black;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 18px;
    left: 40px;
    z-index: 5;
    border-radius: 50%;
    transform: rotateZ(30deg);
    border-color: transparent black black transparent;
  }
  .body {

    width: 250px;
    height: 100px;
    position: relative;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-10%,-90%);
    border-radius: 10px 40px;
    background: #f79e38;
  }
  .body > .neck {
    width: 100px;
    height: 100px;
    position: relative;
    z-index: 2;
    border-radius: 30px 30px 30px 40px;
    background: white;
  }
  .body > .neck_fur {
    width: 8px;
    height: 50px;
    background: white;
    border-radius: 40%;
    position: absolute;
  }
  .fur1 {
    top: 36px;
    left: 0;
  }
  .fur2 {
    top: 46px;
    left: 10px;
  }
  
  .legs {
    width: 200px;
    height: 100px;
    position: relative;
    z-index: 0;
    top: -50%;
    left: 50%;
    transform: translateY(190px);
  }
  .leg_front {
    width: 25px;
    height: 60px;
    position: absolute;
    border-radius: 50%/20%;
    background: #f79e38;
  }
  .front_left {
    left:10px;
    transform: rotate(30deg);
    animation: left 1s ease infinite;
  }
  
  .white {
    position: absolute;
    height: 18px;
    width: 25px;
    top: 42px;
    border-radius: 0 0 50% 50%;
    background: white;
  }
  
  .front_right {
    left: 60px;
    transform:rotate(-30deg);
    animation: right 1s ease infinite;
  }
  
  .leg_back {
    width: 25px;
    height: 60px;
    position: absolute;
    z-index: 0;
    border-radius: 50%/20%;
    background: #f79e38;
  }
  .back_left {
    left: 130px;
    transform: rotate(30deg);
    animation: left 1s ease infinite;
  }
  .back_right {
    left: 180px;
    transform:rotate(-30deg);
    animation: right 1s ease infinite;
  }
  @keyframes left {
    0%,
    100% {
      transform:rotate(30deg);
    }
    25%,
    75% {
      transform:rotate(0);
    }
    50% {
      transform: rotate(-30deg);
    }
  }
  @keyframes right {
    0%,
    100% {
      transform: rotate(-30deg);
    }
    25%,
    75% {
      transform:rotate(0);
    }
    50% {
      transform:rotate(30deg);
    }
  }
  .tail {
    width: 50px;
    height: 25px;
    border-radius: 30% 30% 60%/80% 40%;
    position: absolute;
    z-index: 0;
    background: #f79e38;
    top: 50%;
    left: 50%;
    transform: translate(200px,-5px) rotate(-30deg);
    transform-origin: left center;
    animation: wave 300ms ease infinite;
  }
  @keyframes wave {
    0% {
      transform:translate(200px,-5px) rotate(-30deg);
    }
    25% {
      transform:translate(200px,-5px) rotate(-60deg);
    }
    50% {
      transform:translate(200px,-5px) rotate(-30deg);
    }
    75% {
      transform:translate(200px,-5px) rotate(0deg);
    }
    100% {
      transform:translate(200px,-5px) rotate(-30deg);
    }
  }
  
`;
const demo = document.querySelector("#demo");
const demo2 = document.querySelector("#demo2");
let n = 0;
let time = 100;
let id;

const player = {
  init: () => {
    demo.innerText = string.substring(0, n);
    demo2.innerHTML = string.substring(0, n);
    player.play();
    player.bindEvents();
  },
  bindEvents: () => {
    const hashTable = {
      "#play": player.play,
      "#pause": player.pause,
      "#fast": player.fast,
      "#normal": player.normal,
      "#slow": player.slow,
    };
    for (let key in hashTable) {
      document.querySelector(key).onclick = hashTable[key];
    }
  },
  run: () => {
    n += 1;
    if (n > string.length) {
      window.clearInterval(id);
      return;
    }
    console.log(n + ":" + string.substring(0, n));
    demo.innerText = string.substring(0, n);
    demo2.innerHTML = string.substring(0, n);
    demo.scrollTop = 9999;
  },
  play: () => {
    id = setInterval(player.run, time); //没time ms调用一次play.run函数
  },
  pause: () => {
    window.clearInterval(id); //取消setInterval，不重复
  },
  fast: () => {
    player.pause();
    time = 0;
    player.play();
  },
  normal: () => {
    player.pause();
    time = 100;
    player.play();
  },
  slow: () => {
    player.pause();
    time = 300;
    player.play();
  },
};
player.init();
