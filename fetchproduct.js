
const htmlBox = document.getElementById("product-container");



fetch("http://localhost:3001/api/products")
.then(function(res){
  return res.json();
}).then(function(data){
  console.log(data.response);

  const catalog = data.response.map((item)=>{

    // let title = item.title;
    // let shorttitle = title.slice(0,15);

    // let description = item.description;
    // let shortDescription = description.slice(0,15);

    

    return ` <div class="box1" id="box1">
                <div class="items">
                    <img src="${item.imgurl}" alt="${item.description}" width="180px" height="150px">
                </div>
                <div class="heading">${item.productname}</div>
                <p>${item.description}</p>
                <p class = "category">category : <span>${item.category}</span></p>
                <div class="price">${item.price}</div>
                <a href="Cart.html">
                 <button class="red_btn" >Add Cart</button>  
                </a> 
            </div>` 
  })

  htmlBox.innerHTML = catalog;

})

