"useStrict";
{
  const energyEfficiency = document.querySelector(".energy-efficiency");
  const countValues = document.querySelectorAll(".count-value");
  let countingNumber = 0;
  let flag = true;

  const updateCounter = () => {
    countValues.forEach((countValue) => {
      const targetNumber = Number(countValue.dataset.value);
      const counter = setInterval(() => {
        ++countingNumber;
        countValue.textContent = countingNumber;
        if (targetNumber < countingNumber) {
          clearInterval(counter);
        }
      }, 1);
      flag = false;
    });
  };
  const wheelHandler = () => {
    if (flag && energyEfficiency.classList.contains("active")) {
      updateCounter();
    }
  };

  window.addEventListener("wheel", wheelHandler);
}
