// Get all the Products
const getAllProducts = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  homeCardSection(data);
  loadAllProducts(data);
};

// Load Products data with Categories

const categoryProductsGetData = async (category) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`,
  );
  const data = await res.json();
  const allProductsContainer = document.getElementById("all-products");
  allProductsContainer.innerHTML = "";
  // electronicsProducts(data);
  createCard(data, allProductsContainer);
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
                <button class="btn flex-1 rounded-xl" onclick="show_details_button.showModal(); handleSingleProductData(${product.id})"><i class="fa-solid fa-eye"></i> Details
                </button>
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

  const categoryButtons = document.getElementById("category-buttons");
  categoryButtons.addEventListener("click", async (event) => {
    if (event.target.tagName === "BUTTON") {
      const buttons = categoryButtons.querySelectorAll("button");
      buttons.forEach((button) => {
        button.classList.remove("bg-[#4f39f6]", "text-white");
      });
      event.target.classList.add("bg-[#4f39f6]", "text-white");

      const buttonText = event.target.innerText;
      if (buttonText === "Electronics") {
        categoryProductsGetData("electronics");
      } else if (buttonText === "Jewelry") {
        categoryProductsGetData("jewelery");
      } else if (buttonText === "Men's Clothing") {
        categoryProductsGetData("men's clothing");
      } else if (buttonText === "Women's Clothing") {
        categoryProductsGetData("women's clothing");
      } else if (buttonText === "All") {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        const allProductsContainer = document.getElementById("all-products");
        allProductsContainer.innerHTML = "";
        createCard(data, allProductsContainer);
      }
    }
  });
};

// Load all products
const loadAllProducts = (products) => {
  const allProductsContainer = document.getElementById("all-products");
  const categoryButtons = document.getElementById("category-buttons");
  const allButton = categoryButtons.querySelector("button");
  allButton.classList.add("bg-[#4f39f6]", "text-white");
  createCard(products, allProductsContainer);
};

// create card #MOTHER FUNCTION
const createCard = (products, container) => {
  products.forEach((product) => {
    const div1 = document.createElement("div");
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
              <!-- Open the modal using ID.showModal() method -->
                <button class="btn flex-1 rounded-xl" onclick="show_details_button.showModal(); handleSingleProductData(${product.id})"><i class="fa-solid fa-eye"></i> Details
                </button>
                <button class="btn btn-primary flex-1 rounded-xl shadow-none"><i class="fa-solid fa-cart-shopping"></i>Add</button>
              </div>
            </div>
          </div>
    `;
    container.appendChild(div1);
  });
};
// get the data of product one(1)
const handleSingleProductData = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  showProductWithDetails(data);
};

// show product with details

const showProductWithDetails = (product) => {
  const productTitle = document.getElementById("product_title");
  productTitle.innerText = product.title;
  const productDetails = document.getElementById("product_description");
  productDetails.innerText = product.description;
  const productPhoto = document.getElementById("product_photo");
  productPhoto.innerHTML = `
  <img  src="${product.image}" alt="" class="bg-[#e5e7eb] p-3 bg-cover bg-no-repeat w-[386px] h-[450px] lg:h-[292px] transition-colors duration-300 ease-in-out hover:bg-transparent">
  `;
  const productPrice = document.getElementById("product_price");
  productPrice.innerHTML = `<p class="text-2xl font-bold">Price:$ ${product.price}</p>`;
  const productRating = document.getElementById('product_rating');
  productRating.innerHTML = `<p class="text-gray-500 text-base font-normal">
                <i class="fa-solid fa-star text-yellow-300"></i> ${product.rating.rate} (${product.rating.count})
              </p>`;
};
getAllProducts();
