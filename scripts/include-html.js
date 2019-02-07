const includeHTML = function () {
  /*
   * @Effect
   * Mutates DOM. Adds HTML from path
   * */
  $(".headerbar").load("ajax/headerbar.html");
  $(".menubar").load("ajax/menubar.html a");
};
