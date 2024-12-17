
const htmlBox = document.getElementById("product-container");



fetch("https://fakestoreapi.com/products")
.then(function(res){
  return res.json();
}).then(function(data){
  // console.log(data);

  const catalog = data.map((item)=>{

    let title = item.title;
    let shorttitle = title.slice(0,15);

    let description = item.description;
    let shortDescription = description.slice(0,15);

    

    return ` <div class="box1" id="box1">
                <div class="items">
                    <img src="${item.image}" alt="${shorttitle}" width="180px" height="150px">
                </div>
                <div class="heading">${shorttitle}</div>
                <p>${shortDescription}</p>
                <p class = "category">${item.category}<span>Pizza</span></p>
                <div class="price">${item.price}</div>
                <a href="Cart.html">
                 <button class="red_btn" >Add Cart</button>  
                </a> 
            </div>` 
  })

  htmlBox.innerHTML = catalog;

})