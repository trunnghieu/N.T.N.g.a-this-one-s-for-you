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
  text1: "Day 27 ~ A day like any other",
  text3: "༼ つ ◕◕ ༽つ🍀🍀🍀",
  text4: "Bánh bao thúi, thời tiết Adelaide hôm nay có vẻ cũng dễ chịu hơn mọi hôm ha, thấy giờ này trời cũng mát mẻ rồi, hi vọng thời tiết kh độc, kh ảnh hưởng đến làn da xinh đẹp của chị. Trời SG nắng nóng lắm, vài buổi chiều lại có thêm mưa phùn, trời này kh khéo lại đổ đau ấy chứ. Kể nghe, hôm nay tui có dịp tám với sếp, mới nhớ lại chuyện ngày xưa hai người có dịp tán gẫu, tui hỏi sếp là ông trông đẹp trai so với độ tuổi, cũng nhiều ng khen ông với tui lắm, vợ ông có lo lắng khi ông đc nhiều phụ nữ để ý kh. Sếp mới bảo là kh, tại sếp đi đâu làm gì cũng chụp hình cho vợ hết, xong ổng đưa ảnh mỗi lần đi nhậu đều chụp lại gửi cho vợ trong nhóm chat gia đình. Quào, tui nghĩ tới chị liền, tui thật thiếu kiến thức mà, cái này có vẻ là cơ bản và là điều mà ai cũng nên biết, vậy mà tui lại làm chị buồn từ những thứ nhỏ nhất như vậy. Xong sếp bồi thêm một câu: 'Nhưng nếu tao là mày thì vợ tao sẽ lo lắng đấy'. Hừ, sếp quỷ này thảo mai thấy ghét hihi. Có một điều giờ tui mới dám nói thật lòng, tui nghĩ cũng tại xưa giờ tui cứ ỷ y con gái người ta sẽ luôn theo đuổi tui á, nên tui không đầu tư nuôi dưỡng mối quan hệ. Giờ tui mới vỡ lẽ thì cũng muộn rồi ha. Thật day dứt vì sự vô tâm ngu ngốc của nô tì đã làm tổn thương tiểu thư yêu kiều ngọc ngà như cô nương đây. Tui viết mấy dòng này cũng không hi vọng chị sẽ đọc được, càng kh dám mơ mộng chị sẽ đọc được mà quay lại với tui, chỉ mong vài dòng văn thô kệch của tui có thể giúp chị vơi đi những kỉ niệm buồn về mối tình đầu. Và biết đâu một ngày chị buồn, chị không có ai có thể san sẻ, chị lại tìm thấy tui, thì tui vô tình giúp chị một ngày tốt hơn haha. Tin nhắn cuối cùng chị gửi tui qua web này đã là 1 năm 4 ngày trước rồi đó, chị gọi tui là nguoiiudau, đáng iu xĩu. Hừ, đáng iu mà cũng đáng ghét, dám để trẫm một mình ngày ngày viết tâm thư. Nhưng tui cũng muốn nghe về những câu chuyện chị kể đấy, về quốc tịch, công việc, hay có lẽ là cả tình yêu của chị. Tui cũng tưởng tượng cảnh tui với chị có một buổi cf nói về mọi thứ xảy ra với hai đứa từ lúc xa nhau, nhưng chắc tui sẽ chỉ lắng nghe và mở lời để chị nói thui. Nói văn vẻ z thui chứ phần nào đó trong tui cũng kh muốn để chuyện đó xảy ra đâu, hehe, vì tui còn thương chị nhiều lắm, ngố ạ. Ngủ ngon nhé.",
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
