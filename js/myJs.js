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
  text1: "Day 99~ A day like any other",
  text3: "༼ つ ◕◕ ༽つ🍀🍀🍀",
  text4: "Bà Chồ, hôm trước tui vừa mới thả tim một bài post của bà đấy. Chẳng là đêm trước đó tui nằm mơ thấy bà, mơ thấy tui được nằm ngủ cạnh bà, ôm bà rồi trò chuyện. Diễn biến sau đó cũng có tiến triển theo hướng ấy ấy, thôi thì tui cũng xin lỗi vì đã biến thái trong giấc mơ, tui sẽ nghiêm túc kiểm điểm lại bản thân. Lúc mới tỉnh giấc, thú thật thì tui cũng vui, cảm giác mọi thứ với bà vẫn quen thuộc. Nhưng rồi lại chuyển sang cảm giác thất tình ấy, mãi cho đến hôm nay vẫn còn. Tui cứ phân vân hoài à, kh biết rằng liệu tui có nên tự cách mạng tư tưởng để quên bà đi kh. Nếu tui chọn thực hiện, đồng nghĩa tự tay tui cũng sẽ đóng lại mối quan hệ này, thứ mà tui cứ nuôi hi vọng suốt gần 100 ngày từ lúc bà đi, mơ mộng rằng sẽ có một ngày nào đó bà trở lại đây. Nhưng chẳng có giấc mơ nào thành hiện thực mà kh có hành động thực tế ha. Nhưng thay vì một hành động nổi bật và có thể làm bà khó xử như việc gửi đi một tin nhắn hỏi thăm, tui chọn thả tim bài post của bà thôi, hi vọng rằng điều đó sẽ kh làm phiền bà. Hôm nay tui vừa vào viện thăm Jensen về, ổng vẫn còn đau lắm. Bạn gái ổng bay từ Sydney về hôm thứ 5 để thăm ổng, chiều mai lại bay về Úc. Nhìn ổng được bồ chăm sóc với làm nũng mà tui thấy cũng ghen tị ghê, haha. Giờ lại còn ganh đua với cả bệnh nhân, nghe có sầu kh cơ chứ. Nghe ổng kể là bạn gái ổng đang tự custom bàn phím cơ cho ổng, bất giác tui nhớ lại ngày xưa cũng có người ngỏ lời hỏi tui có muốn dùng chuột công thái học kh. Tui cũng từng được một người vô cùng tuyệt vời chăm sóc đấy nhé. Trên đường về nhà ngẫm nghĩ cũng buồn, trong phút yếu lòng mắt có hơi nhoè xíu. Chẹp, thôi vững vàng cả trăm ngày dài rồi, cho bản thân nghỉ phép mít ướt 1 ngày cũng được z. Dù nhớ bà là vậy, nhưng tui kh còn thấy hỗn loạn như những ngày đầu nữa, mọi thứ bình yên nhẹ nhàng lắm. Tui đang cố gắng nhìn nhận lại và thay đổi hơn qua từng ngày r, tui kh muốn bản thân là phiên bản đã để lỡ mất bà nữa. Chắc sướt mướt đến đây thôi, xin phép kết bài nhé thúi cô nương, chúc ngủ ngon~",
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
