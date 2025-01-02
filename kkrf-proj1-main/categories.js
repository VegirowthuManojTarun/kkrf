document
  .getElementById("productEngineeringBtn")
  .addEventListener("click", function () {
    const productEngineeringList =
      document.getElementById("productEngineering");
    const icon = document.querySelector("#productEngineeringBtn svg");

    // Toggle visibility of the productEngineering list
    productEngineeringList.classList.toggle("d-none");
  });

document
  .getElementById("digitalExpertiseBtn")
  .addEventListener("click", function () {
    const digitalExpertiseList = document.getElementById(
      "digitalExpertiseList"
    );
    const icon = document.querySelector("#digitalExpertiseBtn svg");

    // Toggle visibility of the digitalExpertise list
    digitalExpertiseList.classList.toggle("d-none");
  });

document.getElementById("aimlBtn").addEventListener("click", function () {
  const aimlList = document.getElementById("aimlList");
  const icon = document.querySelector("#digitalExpertiseBtn svg");

  // Toggle visibility of the digitalExpertise list
  aimlList.classList.toggle("d-none");
});
