let products = [
 {name:"Lipstick", price:499, cat:"lip"},
 {name:"Lip Balm", price:299, cat:"lip"},
 {name:"Foundation", price:899, cat:"face"},
 {name:"Blush", price:499, cat:"face"},
 {name:"Eye Shadow", price:699, cat:"eye"},
 {name:"Mascara", price:599, cat:"eye"},
 {name:"Lipgloss", price:999, cat:"lip"},
{name:"eyeliner", price:799, cat:"eye"},
{name:"Highlighter", price:999, cat:"face"},
   {name:"kajal", price:399, cat:"eye"},
   {name:"Loose powder", price:599, cat:"face"},
   {name:"primer", price:499, cat:"face"},
 {name:"Lip plumper", price:899, cat:"lip"},
   {name:"contour", price:399, cat:"face"},
   {name:"concealer", price:499, cat:"face"}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// LOGIN
function login(){
  localStorage.setItem("user", "true");
  window.location = "shop.html";
}

// LOAD PRODUCTS
if(document.getElementById("products")){
  showProducts(products);
}

function showProducts(list){
  let box = document.getElementById("products");
  box.innerHTML="";
  list.forEach(p=>{
    box.innerHTML += `
      <div class="product">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="add('${p.name}',${p.price})">Add</button>
      </div>
    `;
  });
}

function filter(){
  let c = document.getElementById("category").value;
  if(c=="all") showProducts(products);
  else showProducts(products.filter(p=>p.cat==c));
}

// CART
function add(name, price){
  cart.push({name,price});
  localStorage.setItem("cart",JSON.stringify(cart));
  showCart();
}

function showCart(){
  let ul = document.getElementById("cart");
  if(!ul) return;
  ul.innerHTML="";
  let total=0;
  cart.forEach((i, index)=>{
    total+=i.price;
    ul.innerHTML += `<li>${i.name} ₹${i.price} 
    <button onclick="remove(${index})">❌</button></li>`;
  });
  document.getElementById("total").innerText = total;
  localStorage.setItem("total", total);
}

function remove(i){
  cart.splice(i,1);
  localStorage.setItem("cart",JSON.stringify(cart));
  showCart();
}

showCart();

// CHECKOUT
if(document.getElementById("final")){
 document.getElementById("final").innerText = localStorage.getItem("total");
}

function order(){
  alert("Order placed successfully 💄");
  localStorage.clear();
  window.location="index.html";
}
