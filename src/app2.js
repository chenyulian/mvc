import $ from "jquery";
import "./app2.css";

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .content");
$tabBar.on("click", "li", (e) => {
  const $li = $(e.currentTarget);
  const index = $li.index();
  $li.addClass("selected");
  $li.siblings().removeClass("selected");
  console.log(index);
  $tabContent
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});
