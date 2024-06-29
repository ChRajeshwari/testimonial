const testimonials = [
    {
      name: "Eva Sawyer",
      job: "CEO, Fashworks",
      image: "./img1.jpeg",
      testimonial:
        "They are interpretative, or critical literary composition usually much shorter and less systematic and formal than a dissertation ",
    },
    {
      name: "Katey Topaz",
      job: "Developer, TechCrew",
      image: "./img2.webp",
      testimonial:
        "Secondary students are taught structured essay formats to improve their writing skills; admission essays are often used by universities in selecting applicants, and in the humanities and social sciences essays are often used as a way of assessing the performance of students during final exams.",
    },
    {
      name: "Jae Robin",
      job: "UI Designer, Affinity Agency",
      image: "./img3.webp",
      testimonial:
        "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis",
    },
    {
      name: "Nicola Blakely",
      job: "CEO,Zeal Wheels",
      image: "./img4.jpg",
      testimonial:
        "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
    },
  ];
  
   let i = 0;
   let j = testimonials.length;
  
  let testimonialContainer = document.getElementById("testimonial-container");
  let nextBtn = document.getElementById("next");
  let prevBtn = document.getElementById("prev");
  
  nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
  });
  prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
  });
  
  let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
      <p>${testimonials[i].testimonial}</p>
      <img src=${testimonials[i].image}>
      <h3>${testimonials[i].name}</h3>
      <h6>${testimonials[i].job}</h6>
    `;
  };
  window.onload = displayTestimonial;