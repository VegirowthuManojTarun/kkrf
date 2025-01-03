const categoriesImgGalleryEl = document.getElementById("categoriesImgGallery");

const productEngineeringImgEl = document.getElementById(
  "productEngineeringImg"
);
const dataScienceImgEl = document.getElementById("dataScienceImg");
const aimlImgEl = document.getElementById("aimlImg");
const cloudImgEl = document.getElementById("cloudImg");
const sapImgEl = document.getElementById("sapImg");
const nexGenImgEl = document.getElementById("nexGenImg");
const digitalExperienceImgEl = document.getElementById("digitalExperienceImg");

const productEngineeringList = document.getElementById("productEngineering");
const digitalExperienceList = document.getElementById("digitalExperience");
const aimlList = document.getElementById("aiml");
const sapList = document.getElementById("sap");
const dataScienceList = document.getElementById("dataScience");
const cloudList = document.getElementById("cloud");
const nexGenList = document.getElementById("nexGen");

const productEngineeringIconEl = document.getElementById(
  "productEngineeringIcon"
);
const digitalExperienceIconEl = document.getElementById(
  "digitalExperienceIcon"
);
const aimlIconEl = document.getElementById("aimlIcon");
const sapIconEl = document.getElementById("sapIcon");
const dataScienceIconEl = document.getElementById("dataScienceIcon");
const cloudIconEl = document.getElementById("cloudIcon");
const nexGenIconEl = document.getElementById("nexGenIcon");

document
  .getElementById("productEngineeringBtn")
  .addEventListener("click", function () {
    const icon = document.getElementById("productEngineeringIcon");
    // Toggle visibility of the productEngineering list
    const productEngineeringBtnEl = document.getElementById(
      "productEngineeringBtn"
    );
    const productEngineeringOuterEl = document.getElementById(
      "productEngineeringOuter"
    );
    productEngineeringImg.classList.remove("d-none");
    dataScienceImg.classList.add("d-none");
    aimlImg.classList.add("d-none");
    cloudImg.classList.add("d-none");
    sapImg.classList.add("d-none");
    nexGenImg.classList.add("d-none");
    digitalExperienceImg.classList.add("d-none");

    if (productEngineeringList.classList.contains("d-none")) {
      productEngineeringList.classList.remove("d-none");
      productEngineeringBtnEl.classList.add("rounded-bottom-4");
      productEngineeringOuterEl.classList.add("bg-light");
      digitalExperienceList.classList.add("d-none");
      aimlList.classList.add("d-none");
      sapList.classList.add("d-none");
      dataScienceList.classList.add("d-none");
      cloudList.classList.add("d-none");
      nexGenList.classList.add("d-none");
      productEngineeringIconEl.classList.add("bi-dash-square-fill");
      productEngineeringIconEl.classList.remove("bi-plus-square-fill");

      digitalExperienceIconEl.classList.remove("bi-dash-square-fill");
      digitalExperienceIconEl.classList.add("bi-plus-square-fill");

      aimlIconEl.classList.remove("bi-dash-square-fill");
      aimlIconEl.classList.add("bi-plus-square-fill");

      sapIconEl.classList.remove("bi-dash-square-fill");
      sapIconEl.classList.add("bi-plus-square-fill");

      dataScienceIconEl.classList.remove("bi-dash-square-fill");
      dataScienceIconEl.classList.add("bi-plus-square-fill");

      cloudIconEl.classList.remove("bi-dash-square-fill");
      cloudIconEl.classList.add("bi-plus-square-fill");

      nexGenIconEl.classList.remove("bi-dash-square-fill");
      nexGenIconEl.classList.add("bi-plus-square-fill");
    } else {
      productEngineeringList.classList.add("d-none");
      productEngineeringBtnEl.classList.remove("rounded-bottom-4");
      productEngineeringOuterEl.classList.remove("bg-light");
      icon.classList.remove("bi-dash-square-fill");
      icon.classList.add("bi-plus-square-fill");
    }
  });

document
  .getElementById("digitalExperienceBtn")
  .addEventListener("click", function () {
    const icon = document.getElementById("digitalExperienceIcon");
    // Toggle visibility of the digitalExperience list
    const digitalExperienceBtnEl = document.getElementById(
      "digitalExperienceBtn"
    );
    const digitalExperienceOuterEl = document.getElementById(
      "digitalExperienceOuter"
    );
    productEngineeringImg.classList.add("d-none");
    dataScienceImg.classList.add("d-none");
    aimlImg.classList.add("d-none");
    cloudImg.classList.add("d-none");
    sapImg.classList.add("d-none");
    nexGenImg.classList.add("d-none");
    digitalExperienceImg.classList.remove("d-none");

    if (digitalExperienceList.classList.contains("d-none")) {
      digitalExperienceList.classList.remove("d-none");
      digitalExperienceBtnEl.classList.add("rounded-bottom-4");
      digitalExperienceOuterEl.classList.add("bg-light");
      productEngineeringList.classList.add("d-none");
      aimlList.classList.add("d-none");
      sapList.classList.add("d-none");
      dataScienceList.classList.add("d-none");
      cloudList.classList.add("d-none");
      nexGenList.classList.add("d-none");
      digitalExperienceIconEl.classList.add("bi-dash-square-fill");
      digitalExperienceIconEl.classList.remove("bi-plus-square-fill");

      productEngineeringIconEl.classList.remove("bi-dash-square-fill");
      productEngineeringIconEl.classList.add("bi-plus-square-fill");

      aimlIconEl.classList.remove("bi-dash-square-fill");
      aimlIconEl.classList.add("bi-plus-square-fill");

      sapIconEl.classList.remove("bi-dash-square-fill");
      sapIconEl.classList.add("bi-plus-square-fill");

      dataScienceIconEl.classList.remove("bi-dash-square-fill");
      dataScienceIconEl.classList.add("bi-plus-square-fill");

      cloudIconEl.classList.remove("bi-dash-square-fill");
      cloudIconEl.classList.add("bi-plus-square-fill");

      nexGenIconEl.classList.remove("bi-dash-square-fill");
      nexGenIconEl.classList.add("bi-plus-square-fill");
    } else {
      digitalExperienceList.classList.add("d-none");
      digitalExperienceBtnEl.classList.remove("rounded-bottom-4");
      digitalExperienceOuterEl.classList.remove("bg-light");
      icon.classList.remove("bi-dash-square-fill");
      icon.classList.add("bi-plus-square-fill");
    }
  });

document.getElementById("aimlBtn").addEventListener("click", function () {
  console.log(1);
  const icon = document.getElementById("aimlIcon");
  // Toggle visibility of the aiml list
  productEngineeringImg.classList.add("d-none");
  dataScienceImg.classList.add("d-none");
  aimlImg.classList.remove("d-none");
  cloudImg.classList.add("d-none");
  sapImg.classList.add("d-none");
  nexGenImg.classList.add("d-none");
  digitalExperienceImg.classList.add("d-none");

  const aimlBtnEl = document.getElementById("aimlBtn");
  const aimlOuterEl = document.getElementById("aimlOuter");
  if (aimlList.classList.contains("d-none")) {
    aimlList.classList.remove("d-none");
    aimlBtnEl.classList.add("rounded-bottom-4");
    aimlOuterEl.classList.add("bg-light");
    productEngineeringList.classList.add("d-none");
    digitalExperienceList.classList.add("d-none");
    sapList.classList.add("d-none");
    dataScienceList.classList.add("d-none");
    cloudList.classList.add("d-none");
    nexGenList.classList.add("d-none");
    aimlIconEl.classList.add("bi-dash-square-fill");
    aimlIconEl.classList.remove("bi-plus-square-fill");

    productEngineeringIconEl.classList.remove("bi-dash-square-fill");
    productEngineeringIconEl.classList.add("bi-plus-square-fill");

    digitalExperienceIconEl.classList.remove("bi-dash-square-fill");
    digitalExperienceIconEl.classList.add("bi-plus-square-fill");

    sapIconEl.classList.remove("bi-dash-square-fill");
    sapIconEl.classList.add("bi-plus-square-fill");

    dataScienceIconEl.classList.remove("bi-dash-square-fill");
    dataScienceIconEl.classList.add("bi-plus-square-fill");

    cloudIconEl.classList.remove("bi-dash-square-fill");
    cloudIconEl.classList.add("bi-plus-square-fill");

    nexGenIconEl.classList.remove("bi-dash-square-fill");
    nexGenIconEl.classList.add("bi-plus-square-fill");
  } else {
    aimlList.classList.add("d-none");
    aimlBtnEl.classList.remove("rounded-bottom-4");
    aimlOuterEl.classList.remove("bg-light");
    icon.classList.remove("bi-dash-square-fill");
    icon.classList.add("bi-plus-square-fill");
  }
});

document.getElementById("sapBtn").addEventListener("click", function () {
  const icon = document.getElementById("sapIcon");
  productEngineeringImg.classList.add("d-none");
  dataScienceImg.classList.add("d-none");
  aimlImg.classList.add("d-none");
  cloudImg.classList.add("d-none");
  sapImg.classList.remove("d-none");
  nexGenImg.classList.add("d-none");
  digitalExperienceImg.classList.add("d-none");

  // Toggle visibility of the sap list
  const sapBtnEl = document.getElementById("sapBtn");
  const sapOuterEl = document.getElementById("sapOuter");
  if (sapList.classList.contains("d-none")) {
    sapList.classList.remove("d-none");
    sapBtnEl.classList.add("rounded-bottom-4");
    sapOuterEl.classList.add("bg-light");
    productEngineeringList.classList.add("d-none");
    digitalExperienceList.classList.add("d-none");
    aimlList.classList.add("d-none");
    dataScienceList.classList.add("d-none");
    cloudList.classList.add("d-none");
    nexGenList.classList.add("d-none");
    sapIconEl.classList.add("bi-dash-square-fill");
    sapIconEl.classList.remove("bi-plus-square-fill");

    productEngineeringIconEl.classList.remove("bi-dash-square-fill");
    productEngineeringIconEl.classList.add("bi-plus-square-fill");

    digitalExperienceIconEl.classList.remove("bi-dash-square-fill");
    digitalExperienceIconEl.classList.add("bi-plus-square-fill");

    aimlIconEl.classList.remove("bi-dash-square-fill");
    aimlIconEl.classList.add("bi-plus-square-fill");

    dataScienceIconEl.classList.remove("bi-dash-square-fill");
    dataScienceIconEl.classList.add("bi-plus-square-fill");

    cloudIconEl.classList.remove("bi-dash-square-fill");
    cloudIconEl.classList.add("bi-plus-square-fill");

    nexGenIconEl.classList.remove("bi-dash-square-fill");
    nexGenIconEl.classList.add("bi-plus-square-fill");
  } else {
    sapList.classList.add("d-none");
    sapBtnEl.classList.remove("rounded-bottom-4");
    sapOuterEl.classList.remove("bg-light");
    icon.classList.remove("bi-dash-square-fill");
    icon.classList.add("bi-plus-square-fill");
  }
});

document
  .getElementById("dataScienceBtn")
  .addEventListener("click", function () {
    const icon = document.getElementById("dataScienceIcon");
    productEngineeringImg.classList.add("d-none");
    dataScienceImg.classList.remove("d-none");
    aimlImg.classList.add("d-none");
    cloudImg.classList.add("d-none");
    sapImg.classList.add("d-none");
    nexGenImg.classList.add("d-none");
    digitalExperienceImg.classList.add("d-none");

    // Toggle visibility of the dataScience list
    const dataScienceBtnEl = document.getElementById("dataScienceBtn");
    const dataScienceOuterEl = document.getElementById("dataScienceOuter");
    if (dataScienceList.classList.contains("d-none")) {
      dataScienceList.classList.remove("d-none");
      dataScienceBtnEl.classList.add("rounded-bottom-4");
      dataScienceOuterEl.classList.add("bg-light");

      productEngineeringList.classList.add("d-none");
      digitalExperienceList.classList.add("d-none");
      aimlList.classList.add("d-none");
      sapList.classList.add("d-none");
      cloudList.classList.add("d-none");
      nexGenList.classList.add("d-none");
      dataScienceIconEl.classList.add("bi-dash-square-fill");
      dataScienceIconEl.classList.remove("bi-plus-square-fill");

      productEngineeringIconEl.classList.remove("bi-dash-square-fill");
      productEngineeringIconEl.classList.add("bi-plus-square-fill");

      digitalExperienceIconEl.classList.remove("bi-dash-square-fill");
      digitalExperienceIconEl.classList.add("bi-plus-square-fill");

      aimlIconEl.classList.remove("bi-dash-square-fill");
      aimlIconEl.classList.add("bi-plus-square-fill");

      sapIconEl.classList.remove("bi-dash-square-fill");
      sapIconEl.classList.add("bi-plus-square-fill");

      cloudIconEl.classList.remove("bi-dash-square-fill");
      cloudIconEl.classList.add("bi-plus-square-fill");

      nexGenIconEl.classList.remove("bi-dash-square-fill");
      nexGenIconEl.classList.add("bi-plus-square-fill");
    } else {
      dataScienceList.classList.add("d-none");
      dataScienceBtnEl.classList.remove("rounded-bottom-4");
      dataScienceOuterEl.classList.remove("bg-light");
      icon.classList.remove("bi-dash-square-fill");
      icon.classList.add("bi-plus-square-fill");
    }
  });

document.getElementById("cloudBtn").addEventListener("click", function () {
  const icon = document.getElementById("cloudIcon");
  // Toggle visibility of the cloud list
  productEngineeringImg.classList.add("d-none");
  dataScienceImg.classList.add("d-none");
  aimlImg.classList.add("d-none");
  cloudImg.classList.remove("d-none");
  sapImg.classList.add("d-none");
  nexGenImg.classList.add("d-none");
  digitalExperienceImg.classList.add("d-none");

  const cloudBtnEl = document.getElementById("cloudBtn");
  const cloudOuterEl = document.getElementById("cloudOuter");
  if (cloudList.classList.contains("d-none")) {
    cloudList.classList.remove("d-none");
    cloudBtnEl.classList.add("rounded-bottom-4");
    cloudOuterEl.classList.add("bg-light");
    productEngineeringList.classList.add("d-none");
    digitalExperienceList.classList.add("d-none");
    aimlList.classList.add("d-none");
    sapList.classList.add("d-none");
    dataScienceList.classList.add("d-none");
    nexGenList.classList.add("d-none");
    cloudIconEl.classList.add("bi-dash-square-fill");
    cloudIconEl.classList.remove("bi-plus-square-fill");

    productEngineeringIconEl.classList.remove("bi-dash-square-fill");
    productEngineeringIconEl.classList.add("bi-plus-square-fill");

    digitalExperienceIconEl.classList.remove("bi-dash-square-fill");
    digitalExperienceIconEl.classList.add("bi-plus-square-fill");

    aimlIconEl.classList.remove("bi-dash-square-fill");
    aimlIconEl.classList.add("bi-plus-square-fill");

    sapIconEl.classList.remove("bi-dash-square-fill");
    sapIconEl.classList.add("bi-plus-square-fill");

    dataScienceIconEl.classList.remove("bi-dash-square-fill");
    dataScienceIconEl.classList.add("bi-plus-square-fill");

    nexGenIconEl.classList.remove("bi-dash-square-fill");
    nexGenIconEl.classList.add("bi-plus-square-fill");
  } else {
    cloudList.classList.add("d-none");
    cloudBtnEl.classList.remove("rounded-bottom-4");
    cloudOuterEl.classList.remove("bg-light");
    icon.classList.remove("bi-dash-square-fill");
    icon.classList.add("bi-plus-square-fill");
  }
});

document.getElementById("nexGenBtn").addEventListener("click", function () {
  const icon = document.getElementById("nexGenIcon");
  // Toggle visibility of the nexGen list
  productEngineeringImg.classList.add("d-none");
  dataScienceImg.classList.add("d-none");
  aimlImg.classList.add("d-none");
  cloudImg.classList.add("d-none");
  sapImg.classList.add("d-none");
  nexGenImg.classList.remove("d-none");
  digitalExperienceImg.classList.add("d-none");

  const nexGenBtnEl = document.getElementById("nexGenBtn");
  const nexGenOuterEl = document.getElementById("nexGenOuter");
  if (nexGenList.classList.contains("d-none")) {
    nexGenList.classList.remove("d-none");
    nexGenBtnEl.classList.add("rounded-bottom-4");
    nexGenOuterEl.classList.add("bg-light");
    productEngineeringList.classList.add("d-none");
    digitalExperienceList.classList.add("d-none");
    aimlList.classList.add("d-none");
    sapList.classList.add("d-none");
    cloudList.classList.add("d-none");
    dataScienceList.classList.add("d-none");
    nexGenIconEl.classList.add("bi-dash-square-fill");
    nexGenIconEl.classList.remove("bi-plus-square-fill");

    productEngineeringIconEl.classList.remove("bi-dash-square-fill");
    productEngineeringIconEl.classList.add("bi-plus-square-fill");

    digitalExperienceIconEl.classList.remove("bi-dash-square-fill");
    digitalExperienceIconEl.classList.add("bi-plus-square-fill");

    aimlIconEl.classList.remove("bi-dash-square-fill");
    aimlIconEl.classList.add("bi-plus-square-fill");

    sapIconEl.classList.remove("bi-dash-square-fill");
    sapIconEl.classList.add("bi-plus-square-fill");

    dataScienceIconEl.classList.remove("bi-dash-square-fill");
    dataScienceIconEl.classList.add("bi-plus-square-fill");

    cloudIconEl.classList.remove("bi-dash-square-fill");
    cloudIconEl.classList.add("bi-plus-square-fill");
  } else {
    nexGenList.classList.add("d-none");
    nexGenBtnEl.classList.remove("rounded-bottom-4");
    nexGenOuterEl.classList.remove("bg-light");
    icon.classList.remove("bi-dash-square-fill");
    icon.classList.add("bi-plus-square-fill");
  }
});

///hover
// Loop through each section and apply hover functionality