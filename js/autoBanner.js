function autoBanner() {
  bnnNum++;
  if (bnnNum > lastNum) bnnNum = 0;
  activation(slide, bnnNum, "active");
  activation(slideRoll, bnnNum, "on");

  autoBnn = setTimeout(autoBanner, 5000);
}
