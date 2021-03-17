import $ from "jquery";
import "./app1.css";

const $output = $(".output > span");
let result = localStorage.getItem("n") || 100;
$output.text(result);
console.log(`result: ${result}`);

$("#add1").on("click", () => {
  result = Number($output.text()) + 1;
  localStorage.setItem("n", result);
  $output.text(result);
});

$("#minus1").on("click", () => {
  result = Number($output.text()) - 1;
  localStorage.setItem("n", result);
  $output.text(result);
});

$("#multi2").on("click", () => {
  result = Number($output.text()) * 2;
  localStorage.setItem("n", result);
  $output.text(result);
});

$("#divide2").on("click", () => {
  result = Number($output.text()) / 2;
  localStorage.setItem("n", result);
  $output.text(result);
});
