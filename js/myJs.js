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
  text1: "Day 23 ~ A day like any other",
  text3: "༼ つ ◕◕ ༽つ🍀🍀🍀",
  text4: "Tui vừa đi đón mèo về rồi này, mua em này 600k từ một anh đồng nghiệp. Trước có một chị tính cho tui một con mèo Anh lông ngắn, mà hồi đó nhà cũ chưa được nuôi, giờ tui chuyển qua nhà mới rồi. Tui cho nó gặp mẹ tui xong, dùng những đại từ nhân xưng như bà nội với cháu nội để thuốc mẹ tui, nào tui đi mẹ tui còn nuôi nó. Nó biết ẻ ở chậu cát r nha, giỏi lắm, quậy một chặp giờ đi ngủ rồi. Nó cũng quấn tui, chắc tại mới xa mèo mẹ nên còn thiếu hơi, cào cắn chân tui hoài. Nó làm tui nhớ first date ngày trước, chị cũng vậy với tui đó, quấn tui từ sân bay tới homestay. Nhờ nghĩ lại thấy giống mèo con thật, haha, dễ thương, cũng một kỉ niệm đẹp. Tiện thể thì tui vừa đi xỏ khuyên đấy, một bên trái thôi, đeo khuyên tròn có gắn thêm biểu tượng, đi cứ lủng lẳng lủng lẳng. Tui nhớ ngày xưa chị không cho tui xỏ phải không? Tui cũng nghe lời chứ haha, chị không cho tui cũng hết hứng thú luôn. Giờ không có chị cản nữa, tui cũng muốn thử thay đổi chút. Chẹp, mặt tui trông đểu hơn hẳn đấy, vài người bạn tui cũng nói vậy, nhưng tui thấy cũng cá tính hơn. Tui nghĩ nếu giờ chưa từng gặp nhau, chị nhìn bề ngoài tui chắc sẽ kh muốn quen tui tí nào đâu haha. Tui cũng muốn thử thay đổi thêm chút nữa, nhưng tui gắn nó với vài mục tiêu của tui rồi, nào hoàn thành thì tui mới đi thử. Tui cũng kh làm bậy bạ gì vì thất tình đâu haha, dù đúng là tui còn vấn vương chị thật, chỉ là tui muốn thay đổi một vài thứ thôi. Sắp vào tuần mới rồi, giờ tui phải ngủ lại đúng giờ, hôm qua trái lịch một bữa mà nay ong cả đầu. Chị ngủ ngon nhé đồ thúi.",
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
