$(document).ready(function () {
  let currentFloor = 02;
  let counterUp = $(".counter__up");
  let counterDown = $(".counter__down");
  let floorPath = $(".image__icon path");
  let modalButton = $(".button__primary");
  let modal = $(".modal");
  let modalClose = $(".modal__close");
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor");
    $(".counter__text").text(currentFloor);
  });
  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter__text").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
  counterDown.on("click", function () {
    if (currentFloor > 02) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter__text").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
  floorPath.on("click", toggleModal);
  modalClose.on("click", toggleModal);
  modalButton.on("click", toggleModal);

  function toggleModal() {
    modal.toggleClass("modal--active");
  }
});
