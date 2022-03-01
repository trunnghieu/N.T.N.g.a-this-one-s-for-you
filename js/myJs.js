// Import Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js';
const firebaseConfig = {
  apiKey: "AIzaSyA5lD4snqKI4sWCEGtmbWoIUkJ_pdRx54g",
  authDomain: "icanbeyourdeer.firebaseapp.com",
  databaseURL: "https://icanbeyourdeer-default-rtdb.firebaseio.com",
  projectId: "icanbeyourdeer",
  storageBucket: "icanbeyourdeer.appspot.com",
  messagingSenderId: "282458903243",
  appId: "1:282458903243:web:e2c47500f438210fe4014e",
  measurementId: "G-LMJZXNSMR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function writePost(content, dateCreated) {
  set(ref(db, 'posts/' + dateCreated), {
    content: content,
    dateCreated: dateCreated,
  });
}

// Main
const textConfig = {
  text1: "CAUTION: This site may contains cheesy content",
  text2: "Helu Ngố, mình có điều này muốn hỏi, cần cậu trả lời thật lòng",
  text3: "Cậu có nhớ mình không?",
  text4: "Nếu không trả lời mà thoát ra thì mặc định là nhớ đó",
  text5: "Không",
  text6: "Có",
  text7: "Tâm sự gì thì bỏ vào đây nhé",
  text8: "Gửi",
  text9: "Nothing",
  text10: "Đôi lời nhắn nhủ",
  text11:
    'Mình biết bạn là một người mạnh mẽ, song không ai tránh được những thời điểm khó khăn. Những lúc như thế trang web này sẽ thay mình nhắc bạn rằng dù thế nào đi nữa, mình cũng sẽ không để bạn một mình. Vì đã 3 năm tự cách ly với gái, văn chương không giỏi, gần đây lại còn ngốc nghếch, nên bản thân cũng muốn cảm ơn bạn đã đồng hành đến cửa ải sến súa cuối cùng này. Song mình đã để cảnh báo từ đầu nên nếu có ý kiến gì về vấn đề này vui lòng ngậm miệng lại và tự giữ cho bản thân, mình cũng biết quê, thế nhé. Wo hui yizhi zai zheli.',
  text12: "Hoàn thành",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      // text: textConfig.text2,
      imageUrl: "img/main_pic.jpeg",
      imageWidth: 215,
      showCancelButton: false,
      confirmButtonColor: "#fe8a71",
      confirmButtonText: "Continue",
      background: 'url("img/input-bg.jpeg")',
      imageAlt: "Custom image"
    }).then(function () {
      $(".content").show(210);
      playSound();
    });
  }

  function playSound() {
    var audio = new Audio("sound/sound.mp3");
    audio.volume = 0.6;
    audio.play();
    if (typeof audio.loop == 'boolean') {
      audio.loop = true;
    }
    else {
      audio.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
      }, false);
    }
  }

  // switch button position
  function switchButton() {
    // var audio = new Audio("sound/duck.mp3");
    // audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    // var audio = new Audio("sound/Swish1.mp3");
    // audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    // var audio = new Audio("sound/tick.mp3");
    // audio.play();
    Swal.fire({
      title: textConfig.text7,
      // html: true,
      input: 'text',
      width: 900,
      padding: "2em",
      // html: "<input type='text' class='form-control' style='height:100px' id='txtReason'  placeholder=' '>",
      background: '#F8F8F8 url("img/puuung_landscape.png")',
      // backdrop: `
      //               rgba(0,0,123,0.4)
      //               url("img/giphy2.gif")
      //               left top
      //               no-repeat
      //             `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
      customClass: "swal-image-yes",
    }).then((result) => {
      if (result.value) {
        writePost(result.value, (new Date()).getTime());
        Swal.fire({
          width: '90%',
          confirmButtonText: textConfig.text12,
          background: '#F8F8F8',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://www.facebook.com/hieeu1.7/";
          },
        })
      }
    });

    // $("#txtReason").focus(function () {
    //   var handleWriteText = setInterval(function () {
    //     textGenerate();
    //   }, 10);
    //   $("#txtReason").blur(function () {
    //     clearInterval(handleWriteText);
    //   });
    // });
  });
});
