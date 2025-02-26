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
  text1: "Day 26 ~ A day like any other",
  text3: "༼ つ ◕◕ ༽つ🍀🍀🍀",
  text4: "Bánh bao, tui hết đau bụng rồi, nhưng đầu tui đau nhức không chịu nổi, ngồi còn đỡ chứ đi là xoay như chong chóng. Mom bảo chắc tui thiếu máu, tại mặt tui cũng hơi xanh, nên tui nhờ MĐ mua thuốc rầu. Nay tui ở nhà xem phim, nội dung cũng về tình cảm, xem xong tui càng nhớ chị thêm. Rồi tui lại nhớ về chuyện cũ, ngày trước nhiều lần chị giận tui vì không bao giờ chủ động nhắn kể cho chị về những thứ xung quanh tui. Hồi đó tui kh biết vậy là một cách thể hiện tình cảm, tui cứ thấy mấy chuyện đó nhỏ nhặt vậy mà giận hoài, đâm ra cư xử trẻ con, làm chị càng thêm buồn. Giờ tui biết nghĩ, biết trân trọng tình cảm hơn thì kh còn chị ở đây nữa. Chị chưa từng quen ai mà chị lại khéo léo hơn tui nhiều ha, chị đỉnh thiệt haha, tui nghĩ một người chững chạc như vậy hẳn đã trải qua nhiều nỗi đau rồi, tui muốn san sẻ cho chị lắm. Những thứ chị chỉ tui, tui cũng kh muốn dùng với ng khác đâu, tui kh muốn nỗi buồn của chị với tui đổi lại bằng hạnh phúc cho những ng con gái khác. Tui đã và sẽ còn chững chạc hơn nhiều nữa, tin tui đi. Chắc chị kh biết, hồi lâu, chị muốn dừng lại, bảo hai đứa mình chắc không kéo dài được đâu, rồi chị im lặng với tui, ngày nào tui cũng nhắn ở đây cho chị đó. À, sực nhớ, giờ mọi thứ qua rồi, tui cũng muốn nói chuyện này cho nhẹ lòng, vì tui đã từng kh dám nói thẳng. Chị nhớ hôm trc khi bay đi Mel, tui hỏi chị như hỏi cung kh. Tại tui chỉ muốn biết chị đi chơi với ai thui, mà chị kh trả lời liền, nên tui mới nghĩ bụng hay chị có ng khác rồi, đâm ra hỏi nhiều hơn làm chị khó chịu. Cũng tại lo lắng mà bị phũ nữa, thành ra tui bận lòng, xin lỗi đã làm phiền chị nha, tại vẫn thương chị mà, có đọc được thì bỏ qua cho tui hen hehe. Tui cũng kh nghĩ là c sẽ giấu diếm gì đâu. Chỉ là đến một hồi lâu sau nch lại, c lại bảo đã có bạn trai r, thành ra tui cũng kh biết phải làm gì nữa. Ngày trước Thảo chia tay Nhẽo, Thảo dù chưa có gì, nhưng cũng bảo với Nhẽo là đã có người mới rồi đó. Nhẽo nghe xong cũng trách Thảo nhiều lắm, dứt cái một luôn. Thảo nói với tui là nói vậy để Nhẽo mau quên. Kh biết có khi nào c cũng làm vậy với tui kh nhỉ, chắc kh đâu, nhưng nếu vậy thật thì tui kh dứt liền đc như Nhẽo đâu. Tui bây giờ đã trót thương ai rồi thì khó mà dứt lắm. Có một câu chị từng nói giống với cảm giác của tui hiện tại lắm. 'Somewhere in the world, someone is missing you. But you dont know.' Và trên đoạn đường sắp đến tui đi, tui sẽ còn nhớ chị nhiều, chị thúi ạ.",
  // Cũng y như lần này vậy, biết đâu một ngày chị buồn, chị không có ai ở cạnh để san sẻ, chị lại tìm thấy tui, tui vô tình giúp chị một ngày tốt hơn haha. Tin nhắn cuối cùng chị gửi tui đã là 1 năm 3 ngày trước rồi đó, chị gọi tui là nguoiiudau, đáng iu xĩu. Hừ, đáng iu mà cũng đáng ghét, dám để trẫm một mình ngày ngày viết tâm thư. Nhưng tui cũng muốn nghe về những câu chuyện chị kể đấy, về quốc tịch, công việc, hay cả tình yêu của chị. Tui cũng tưởng tượng cảnh tui với chị có một buổi cf nói về mọi thứ xảy ra với hai đứa từ lúc xa nhau, nhưng chắc tui sẽ chỉ lắng nghe và mở lời để chị nói thui.
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
