$(function () {
  $("#discord-link").click(function () {
    $("#myPopup")
      .addClass("show-popup")
      .delay(1500)
      .queue(function () {
        $(this).removeClass("show-popup").dequeue();
      });
    copyToClipboard("Ina Den #1062");
  });
});

// delegate event from footer to child element, because it was loaded with .load and the code above doesnt work in this case
// https://api.jquery.com/on/#direct-and-delegated-events
$(function () {
  $("#footer").on("click", "#footerDiscordLink", function () {
    $("#footerPopup")
      .addClass("show-popup")
      .delay(1500)
      .queue(function () {
        $(this).removeClass("show-popup").dequeue();
      });
    copyToClipboard("Ina Den #1062");
  });
});
