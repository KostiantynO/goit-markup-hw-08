(() => {
  if (
    document.getElementById("secondary") != null &&
    document.getElementById("secondary").parentNode != undefined
  ) {
    document
      .getElementById("secondary")
      .parentNode.removeChild(document.getElementById("secondary")),
      console.log(`id "secondary" removed`);
  }

  if (
    document.getElementById("comments") != null &&
    document.getElementById("comments").parentNode != undefined
  ) {
    document.getElementById("comments").parentNode.removeChild(document.getElementById("comments")),
      console.log(`id "comments" removed`);
  }

  if (
    document.querySelector(".html5-endscreen") != null &&
    document.querySelector(".html5-endscreen").parentNode != undefined
  ) {

    document.querySelector(".html5-endscreen").parentNode.removeChild(document.querySelector(".html5-endscreen")),

    console.log(`class "html5-endscreen" removed`);
  }



  if (
    document.getElementsByTagName("ytm-engagement-panel") != null &&
    document.getElementsByTagName("ytm-engagement-panel").parentNode != undefined
  ) {
    document
      .getElementsByTagName("ytm-engagement-panel")
      .parentNode.removeChild(document.getElementsByTagName("ytm-engagement-panel")),
      console.log(`tag "ytm-engagement-panel" removed`);
  }

  if (
    document.getElementsByClassName("ytp-mdx-popup-dialog") != null &&
    document.getElementsByClassName("ytp-mdx-popup-dialog").parentNode != undefined
  ) {
    document
      .getElementsByClassName("ytp-mdx-popup-dialog")
      .parentNode.removeChild(document.getElementsByClassName("ytp-mdx-popup-dialog")),
      console.log(`class "ytp-mdx-popup-dialog" removed`);
  }

  if (
    document.getElementsByClassName("ytp-pause-overlay") != null &&
    document.getElementsByClassName("ytp-pause-overlay").parentNode != undefined
  ) {
    document
      .getElementsByClassName("ytp-pause-overlay")
      .parentNode.removeChild(document.getElementsByClassName("ytp-pause-overlay")),
      console.log(`class "ytp-pause-overlay" removed`);
  }

  if (
    document.getElementsByClassName("ytp-autonav-endscreen-countdown-container") != null &&
    document.getElementsByClassName("ytp-autonav-endscreen-countdown-container").parentNode !=
      undefined
  ) {
    document
      .getElementsByClassName("ytp-autonav-endscreen-countdown-container")
      .parentNode.removeChild(
        document.getElementsByClassName("ytp-autonav-endscreen-countdown-container"),
      ),
      console.log(`class "ytp-autonav-endscreen-countdown-container" removed`);
  }
})();
