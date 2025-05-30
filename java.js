document.addEventListener("DOMContentLoaded", () => {
  const images = ["https://i.pinimg.com/736x/2a/f3/45/2af3450f97f94aa7bc94e49175b3454b.jpg", "https://i.pinimg.com/736x/7b/65/a9/7b65a90b8abb094a329bf444721ee46a.jpg","https://i.pinimg.com/736x/25/64/8c/25648cbb1ba3b7a63b9ea75ccb8320dd.jpg", "https://i.pinimg.com/736x/bf/17/6a/bf176a99fe805739df08543d430b99e2.jpg"]; // Suas imagens
  let currentIndex = 0;

  const imgElement = document.getElementById("carousel-image");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imgElement.src = images[currentIndex];
  });
});
