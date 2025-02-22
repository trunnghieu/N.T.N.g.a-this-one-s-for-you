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
  text1: "Day 21 ~ A day like any other",
  text3: "༼ つ ◕◕ ༽つ🍀🍀🍀",
  text4: "Chẹp, nay tui ngủ giấc lưng chừng, dậy thấy MĐ nhắn tối nay không về. Dưng tui thấy hơi chạnh lòng, MĐ đi với em nhỏ, chị nhiều khi cũng vừa đi với người ta về. Chắc thâm tâm tui chưa hoàn toàn chấp nhận được sự thật, hôm qua tui có vào trang của chính phủ Úc để điền thông tin Visa cho biết. Sau đó tui nhớ lại cảm giác hồ hởi gọi điện cho chị, nhưng chị lại phản ứng lạnh nhạt, chắc do khuya rồi nên chị không muốn nói nhiều, hôm sau thấy chị seen tin nhắn, rồi vài ngày sau chị bảo có bạn trai rồi. Vừa hay điền đến trang thứ 3, mục passport thì tui cũng không mang theo passport bên người. Vậy là tui dừng lại ở trang 3, mắt hơi rưng rưng, thấy mình cũng khờ. Ngày xưa tui tự hào với hai chữ bạn trai lắm đó, tại trước giờ chưa có ai gọi tui vậy cả, tui nghe lạ tai nên cũng thích lắm, tự hào được là bạn trai chị mà, lại còn là tình đầu chứ. Giờ chị dùng từ đó để nói với tui về anh chàng kia, còn tui vô tình mở lời hỏi thăm chị với vai trò người thứ 3. Nghe thất bại thiệt haha, trước giờ tui kh nghĩ tui sẽ có ngày này đâu. Nhưng sau cùng thì cũng là do tui mà ra, nên tui phải vực dậy bản thân thui, cũng không còn là em nhỏ của chị nữa. Tui mạnh mẽ lắm, chẳng ai biết tui buồn đâu. Trong mắt mọi người tui luôn là đứa nỗ lực, ngày nào tui cũng là người đến công ty sớm nhất và về muộn nhất, 6h sáng tui đến, 9h tối tui về. Tui làm việc ở công ty vừa đủ thôi, nhiều khi còn trốn việc công ty, 2 năm liền trong top performers với tui là đủ r, thời gian còn lại tui tranh thủ học hành thêm, về nhà viết vài dòng cho chị rồi đi ngủ, hôm sau lại vòng lặp như vậy. Mọi người hay trêu là tui búng tay cái là có bồ chứ gì, không quen ai là tại tui kén quá thôi, tui cũng chỉ cười trừ. Nghĩ cũng đúng, tại có mỗi chị mang lại cho tui sự bình yên và cảm giác mạnh mẽ về một tương lai chung như vậy mà. Nhưng chắc chị đi với tui lại thấy nhiều giông bão ha. Tui không hợp với chị thôi, chứ chị hợp với tui lắm. Tui nghĩ chắc giờ chị đã chọn được người hợp với chị rồi, tui cũng tò mò về ảnh, đoán là ảnh sẽ hơn tuổi tui, hoặc có quốc tịch rồi không chừng, được vậy thì cũng tốt cho chị. Chậc, đấy, hở ra thời gian trống một tí là tui lại nghĩ bao nhiêu thứ về chị, nên thôi tui đi ngủ lại đây, mai tui cày cuốc rồi đi đón mèo, hi vọng sẽ khuây khoả hơn xíu khi có bạn. Chị chắc đang say ngủ rồi phải không, ngon giấc nhé chị Nga thúi.",
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
