// Dummy data array with more structured information
const dummyCaseStudies = [{
        id: 1,
        type: "Case Study",
        title: "Digital Transformation",
        description: "Embrace digital transformation to unlock boundless opportunities and foster growth in today's rapidly evolving market landscape. Propel your business forward with limitless possibilities and sustainable development",
        imageUrl: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1735906156/download_7_np7ugp.jpg",
        stickyTop: "70px",
        zIndex: 1
    },
    {
        id: 2,
        type: "Case Study",
        title: "Cloud Services",
        description: "Maximize your potential with our Cloud Services. Elevate your business to new heights and leverage the full power of the cloud to drive sustainable growth and innovation",
        imageUrl: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1735906054/Cloud_Computing_Courses_Training_fkjtok.jpg",
        stickyTop: "130px",
        zIndex: 2
    },
    {
        id: 3,
        type: "Case Study",
        title: "Product & Applications Engineering",
        description: "Customized solutions for the digital realm. Expertly crafting tailored strategies to navigate the complexities of the digital landscape with precision and innovation",
        imageUrl: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1735903175/download_1_gfdwez.jpg",
        stickyTop: "150px",
        zIndex: 3
    },
    {
        id: 4,
        type: "Case Study",
        title: "Advanced Infra Solutions",
        description: "Leading the way with innovative infrastructure solutions tailored to fuel your digital evolution and propel your organization towards unprecedented growth and success in the digital age",
        imageUrl: "https://res.cloudinary.com/dvhmy6a4u/image/upload/v1735903176/parisisarobot___bflcpt.jpg",
        stickyTop: "150px",
        zIndex: 4
    }
];

// Function to create HTML for each case study
// function createCaseStudyHTML(caseStudy) {
//     return `
//         <li class="case-study-card bg-black text-light rounded-5 card-${caseStudy.id} py-5 px-4">
//             <div class="d-flex flex-column flex-md-row py-md-5 px-md-4 p-lg-5">
//                 <div class="py-4">
//                     <p class="mb-3 mb-lg-5 btn btn-secondary">${caseStudy.type}</p>
//                     <h2 class="mb-3 fw-semibold mb-lg-5">${caseStudy.title}</h2>
//                     <p class="mb-3 mb-lg-5">${caseStudy.description}</p>
//                     <button type="button" class="btn px-4 py-2 btn-outline-light">
//                         Read More
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                             class="bi bi-arrow-right" viewBox="0 0 16 16">
//                             <path fill-rule="evenodd"
//                                 d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
//                         </svg>
//                     </button>
//                 </div>
//                 <div class="ps-4">
//                     <img src="${caseStudy.imageUrl}" 
//                          alt="${caseStudy.title}" 
//                          class="case-study-card-image mx-auto">
//                 </div>
//             </div>
//         </li>
//     `;
// }

function createCaseStudyHTML(caseStudy) {
    return `
        <li class="case-study-card bg-black text-light rounded-5 card-${caseStudy.id} py-5 px-4"
            style="top: ${caseStudy.stickyTop}; z-index: ${caseStudy.zIndex};">
            <div class="d-flex flex-column flex-md-row py-md-5 px-md-4 p-lg-5">
                <div class="py-4">
                    <p class="mb-3 mb-lg-5 btn btn-secondary">${caseStudy.type}</p>
                    <h2 class="mb-3 fw-semibold mb-lg-5">${caseStudy.title}</h2>
                    <p class="mb-3 mb-lg-5">${caseStudy.description}</p>
                    <button type="button" class="btn px-4 py-2 btn-outline-light">
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>
                    </button>
                </div>
                <div class="ps-0">
                    <img src="${caseStudy.imageUrl}" 
                         alt="${caseStudy.title}" 
                         class="case-study-card-image mx-auto">
                </div>
            </div>
        </li>
    `;
}


// Function to render case studies
async function renderCaseStudies() {
    const caseStudiesContainer = document.getElementById('case-study-cards');
    let caseStudiesData;

    try {
        // Try to fetch from API first
        const response = await fetch('YOUR_API_ENDPOINT');
        if (!response.ok) throw new Error('API fetch failed');
        caseStudiesData = await response.json();

        // Map API data to match our structure if necessary
        caseStudiesData = caseStudiesData.map((item, index) => ({
            ...item,
            stickyTop: dummyCaseStudies[index].stickyTop,
            zIndex: dummyCaseStudies[index].zIndex
        }));
    } catch (error) {
        console.log('Using dummy data:', error.message);
        caseStudiesData = dummyCaseStudies;
    }

    // Generate HTML for all case studies
    const caseStudiesHTML = caseStudiesData.map(createCaseStudyHTML).join('');

    // Update the container
    caseStudiesContainer.innerHTML = caseStudiesHTML;
}

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', renderCaseStudies);