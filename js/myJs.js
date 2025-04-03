// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  update,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyA5lD4snqKI4sWCEGtmbWoIUkJ_pdRx54g",
  authDomain: "icanbeyourdeer.firebaseapp.com",
  databaseURL: "https://icanbeyourdeer-default-rtdb.firebaseio.com",
  projectId: "icanbeyourdeer",
  storageBucket: "icanbeyourdeer.appspot.com",
  messagingSenderId: "282458903243",
  appId: "1:282458903243:web:e2c47500f438210fe4014e",
  measurementId: "G-LMJZXNSMR5",
};

// Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

var key = null;

function writePost(content, dateCreated) {
  set(ref(db, "posts/" + dateCreated), {
    content: content,
    dateCreated: getTime(),
  });
}

function writeYesClickTime(dateTime) {
  set(ref(db, "yesClick/" + dateTime), {
    dateTime: getTime(),
  });
}

function writeVisitTime() {
  set(ref(db, "visits/" + key), {
    enterAt: getTime(),
  });
}

function writeExitTime() {
  update(ref(db, "visits/" + key), {
    leaveAt: getTime(),
  });
}

function getTime() {
  // Create a new Date object to get the current time
  const date = new Date();

  // Get the time zone offset in minutes
  const timeZoneOffsetMinutes = date.getTimezoneOffset();

  // Convert the offset to hours and calculate the sign
  const offsetHours = Math.abs(Math.floor(timeZoneOffsetMinutes / 60));
  const offsetSign = timeZoneOffsetMinutes > 0 ? "-" : "+";

  // Format the date to the desired format with the UTC/GMT offset
  const formattedDate = `${date.getFullYear()}/${String(
    date.getMonth() + 1
  ).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")} ${String(
    date.getHours()
  ).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(
    date.getSeconds()
  ).padStart(2, "0")} UTC${offsetSign}${String(offsetHours).padStart(
    2,
    "0"
  )}:${String(Math.abs(timeZoneOffsetMinutes) % 60).padStart(2, "0")}`;
  return formattedDate;
}

// Main
const textConfig = {
  text1: "Day 63~ A day like any other",
  text3: "༼ つ ◕◕ ༽つ🍀🍀🍀",
  text4: "Àn nhon, bạn đi làm về chưa dạ, nay là lần đầu tiên tui viết cho bạn vào buổi chiều đó. Hôm nay tui đăng ký nghỉ để đi cf ôn thêm IELTS, tính ra cũng hơi lưng chừng khi nghỉ thứ 5 rồi lại đi làm thứ 6, nhưng tui thấy off thứ 5 cảm giác thích hơn chút, vì thứ 6 thường công việc cũng nhẹ, cúp làm được. Tui lại khoá insta rồi, nhưng những ngày tui còn mở và mỗi lần bạn đăng story, tui rất muốn nhắn tin cho bạn, hỏi thăm bạn về một vài thứ và mối quan hệ của bạn thế nào rồi. Nhưng tui thấy như vậy cũng thật hồ đồ, tui kh muốn làm bạn khó xử chỉ vì tui muốn thử rằng liệu tụi mình còn cơ hội hay không. Vì nếu là tui đi, tui sẽ kh thích bạn gái của mình bị bạn trai cũ nhắn tin hỏi thăm. Tui tính kể chuyện này, xảy ra cũng lâu rồi, từ lúc mới hay tin bạn có bạn trai cơ. Lúc đó tui cũng chưa chấp nhận được, nên tui lục insta của bạn để tìm xem người mới của bạn là ai, tình cờ thấy có một account follow mỗi mình bạn à. Haha, lúc đó tui hơi mù quáng, thấy ngốc nghếch sao ấy, chứ bình thường tui hầu như kh stalk người ta vậy đâu, giờ nhắc lại có hơi xấu hổ với mất giá, nhưng chắc cũng kh sao vì bạn cũng kh đọc được. Giờ thì tui học cách chấp nhận hơn rồi, bạn trai mới của bạn là ai cũng kh còn quan trọng nữa, tui chỉ mong rằng bạn vẫn thật hạnh phúc. Thời gian cũng chữa lành một vài vết thương nhất định ha, nhưng nó vẫn chưa thể làm vơi đi tình cảm của tui, tui vẫn còn nhớ giọng nói và hình ảnh bạn cười với tui. Chẹp, chị Nga, em nhớ chị nhiều lắm, nhưng em chỉ muốn viết đến đây thôi, chị nghỉ ngơi đi nhé.",
  // text4: "A Toàn chị Tú, Js, nợ",
  text5: "Be sad",
  text6: "Be happy",
  text7: "I will still be here, no matter what happens",
  text8: "Send",
  text9: "Nothing",
  text10: "Just a little thing I wanna say",
  text11:
  "I do believe that we still have stories to tell",
  text12: "Come with me",
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
      imageUrl: "img/main-pic.jpeg",
      imageWidth: 440,
      showCancelButton: false,
      confirmButtonColor: "#fe8a71",
      confirmButtonText: "Tiếp tục",
      background: 'url("img/input-bg.jpeg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(350);
      playSound();
      key = new Date().getTime();
      writeVisitTime();
    });
  }

  function playSound() {
    var audio = new Audio("sound/music.mp3");
    audio.volume = 0.4;
    audio.play();
    if (typeof audio.loop == "boolean") {
      audio.loop = true;
    } else {
      audio.addEventListener(
        "ended",
        function () {
          this.currentTime = 0;
          this.play();
        },
        false
      );
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
  // move random button position
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
      input: "text",
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
        var time = new Date().getTime();
        // writeYesClickTime(time)
        if (result.value != null && result.value != "") {
          writePost(result.value, time);
        }
        Swal.fire({
          width: "90%",
          confirmButtonText: textConfig.text12,
          background: "#F8F8F8",
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://www.instagram.com/trunnghieu/";
          },
        });
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

window.addEventListener("beforeunload", () => {
  writeExitTime();
});
