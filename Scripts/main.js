// Get all the Products
const getAllProducts = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  homeCardSection(data);
  loadAllProducts(data);
};

// Show only 3 card in the Home Section
const homeCardSection = (products) => {
  const productContainer = document.getElementById("productCard-container");
  const first3 = products.slice(0, 3);
  first3.forEach((product) => {
    const div1 = document.createElement("div");
    div1.classList.add("flex", "justify-evenly", "items-center", "p-2");
    div1.innerHTML = `
    <div class="card max-w-96 h-[744px] lg:h-auto shadow-sm">
            <figure>
              <img
                src="${product.image}"
                alt="Shoes"
                class="bg-[#e5e7eb] p-3 bg-cover bg-no-repeat w-[386px] h-[550px] lg:h-[292px] transition-colors duration-300 ease-in-out hover:bg-transparent"
              />
            </figure>
            <div class="flex justify-between items-center p-3">
              <p
                class="text-[#5046b8] text-lg font-normal bg-[#e0e7ff] px-2 py-1 rounded-xl p-5"
              >
                ${product.category}
              </p>
              <p class="text-gray-500 text-base font-normal">
                <i class="fa-solid fa-star text-yellow-300"></i> ${product.rating.rate} (${product.rating.count})
              </p>
            </div>
            <div class="flex flex-col px-3">
              <h2 class="card-title my-title">
               ${product.title}
              </h2>
              <h2 class="text-2xl font-bold">$ ${product.price}</h2>
              <div class="card-actions py-5">
                <button class="btn flex-1 rounded-xl"><i class="fa-regular fa-eye"></i> Details</button>
                <button class="btn btn-primary flex-1 rounded-xl shadow-none"><i class="fa-solid fa-cart-shopping"></i>Add</button>
              </div>
            </div>
          </div>
    `;
    productContainer.appendChild(div1);
  });
};
// Home page JS

const homePage = () => {
  document.getElementById("banner").classList.remove("hidden");
  document.getElementById("home").classList.remove("hidden");
  document.getElementById("section-2").classList.add("hidden");
};

// Products page JS

const ShowAllProducts = (products) => {
  document.getElementById("banner").classList.add("hidden");
  document.getElementById("home").classList.add("hidden");
  document.getElementById("section-2").classList.remove("hidden");
  const navBar = document.querySelector("nav");
  navBar.classList.add("shadow-lg");
  document
    .getElementById("category-buttons")
    .addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
        event.target.classList.add(
          "bg-[#4f39f6]",
          "text-white",
          'border-[#4f39f6"]',
        );
        if (event.target.innerText === "All") {
          console.log("all");
        } else if (event.target.innerText === "Electronics") {
          console.log("Electronics");
        } else if (event.target.innerText === "Jewelry") {
          console.log("Jewelry");
        } else if (event.target.innerText === "Men's Clothing") {
          console.log("Men's Clothing");
        } else if (event.target.innerText === "Women's Clothing") {
          console.log("Women's Clothing");
        }
      }
    });
};

// Load all products

const loadAllProducts = (products) => {
  const allProductsContainer = document.getElementById("all-products");
  products.forEach((product) => {
    const div1 = document.createElement("div");
    // div1.classList.add("grid", "grid-cols-4");
    div1.innerHTML = `
     <div class="card max-w-96 h-[744px] lg:h-auto shadow-sm">
            <figure>
              <img
                src="${product.image}"
                alt="Shoes"
                class="bg-[#e5e7eb] p-3 bg-cover bg-no-repeat w-[386px] h-[550px] lg:h-[292px] transition-colors duration-300 ease-in-out hover:bg-transparent"
              />
            </figure>
            <div class="flex justify-between items-center p-3">
              <p
                class="text-[#5046b8] text-lg font-normal bg-[#e0e7ff] px-2 py-1 rounded-xl p-5"
              >
                ${product.category}
              </p>
              <p class="text-gray-500 text-base font-normal">
                <i class="fa-solid fa-star text-yellow-300"></i> ${product.rating.rate} (${product.rating.count})
              </p>
            </div>
            <div class="flex flex-col px-3">
              <h2 class="card-title my-title">
               ${product.title}
              </h2>
              <h2 class="text-2xl font-bold">$ ${product.price}</h2>
              <div class="card-actions py-5">
                <button class="btn flex-1 rounded-xl"><i class="fa-regular fa-eye"></i> Details</button>
                <button class="btn btn-primary flex-1 rounded-xl shadow-none"><i class="fa-solid fa-cart-shopping"></i>Add</button>
              </div>
            </div>
          </div>
    `;
    allProductsContainer.appendChild(div1);
  });
};

// ShowAllProducts();
getAllProducts();
