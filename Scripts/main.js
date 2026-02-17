// Get all the Products
const getAllProducts = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  homeCardSection(data);
};

// Show only 3 card in the Home Section
const homeCardSection = (products) => {
  const productContainer = document.getElementById("productCard-container");
  const first3 = products.slice(0, 3);
  first3.forEach((product) => {
    const div1 = document.createElement("div");
    div1.classList.add("flex", "justify-evenly", "items-center", "p-2");
    div1.innerHTML = `
    <div class="card max-w-96 h-[744px] lg:h-au">
            <figure>
              <img
                src="${product.image}"
                alt="Shoes"
                class="bg-[#e5e7eb] p-3 bg-cover bg-no-repeat w-[386px] h-[550px]"
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
            <div class="flex flex-col">
              <h2 class="card-title my-title">
               ${product.title}
              </h2>
              <h2 class="text-2xl font-bold">$ ${product.price}</h2>
              <div class="card-actions pt-5">
                <button class="btn flex-1 rounded-xl"><i class="fa-regular fa-eye"></i> Details</button>
                <button class="btn btn-primary flex-1 rounded-xl shadow-none"><i class="fa-solid fa-cart-shopping"></i>Add</button>
              </div>
            </div>
          </div>
    `;
    productContainer.appendChild(div1);
  });
};

getAllProducts();
