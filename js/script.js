let bar = document.querySelector("#progress");
window.addEventListener("scroll", () => {
  let max = document.body.scrollHeight - innerHeight;
  bar.style.width = `${(pageYOffset / max) * 100}%`;
});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

// function setupTypewriter(t) {
//   var HTML = t.innerHTML;

//   t.innerHTML = "";

//   var cursorPosition = 0,
//     tag = "",
//     writingTag = false,
//     tagOpen = false,
//     typeSpeed = 100,
//     tempTypeSpeed = 0;

//   var type = function () {
//     if (writingTag === true) {
//       tag += HTML[cursorPosition];
//     }

//     if (HTML[cursorPosition] === "<") {
//       tempTypeSpeed = 0;
//       if (tagOpen) {
//         tagOpen = false;
//         writingTag = true;
//       } else {
//         tag = "";
//         tagOpen = true;
//         writingTag = true;
//         tag += HTML[cursorPosition];
//       }
//     }
//     if (!writingTag && tagOpen) {
//       tag.innerHTML += HTML[cursorPosition];
//     }
//     if (!writingTag && !tagOpen) {
//       if (HTML[cursorPosition] === " ") {
//         tempTypeSpeed = 0;
//       } else {
//         tempTypeSpeed = Math.random() * typeSpeed + 50;
//       }
//       t.innerHTML += HTML[cursorPosition];
//     }
//     if (writingTag === true && HTML[cursorPosition] === ">") {
//       tempTypeSpeed = Math.random() * typeSpeed + 50;
//       writingTag = false;
//       if (tagOpen) {
//         var newSpan = document.createElement("span");
//         t.appendChild(newSpan);
//         newSpan.innerHTML = tag;
//         tag = newSpan.firstChild;
//       }
//     }

//     cursorPosition += 1;
//     if (cursorPosition < HTML.length - 1) {
//       setTimeout(type, tempTypeSpeed);
//     }
//   };

//   return {
//     type: type,
//   };
// }

// var typer = document.getElementById("typewriter");

// typewriter = setupTypewriter(typewriter);

// typewriter.type();
