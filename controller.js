const Product = require('./model');

const getProducts = (req, res, next) => {
    Product.find()
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        })
}

const addProducts = (req, res, next) => {
    const product = new Product({
        id: req.body.id,
        productname: req.body.productname,
        description: req.body.description,
        imgurl: req.body.imgurl,
        category: req.body.category,
        price: req.body.price,
    });
    product.save()
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}


const updateProduct = (req, res, next) => {
    const { id, productname, description, imgurl, category, price } = req.body;
    Product.updateOne({ id: id }, { $set: { productname: productname } })
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}

const deleteProduct = (req, res, next) => {
    const id = req.body.id;
    Product.deleteOne({ id: id })
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}

exports.getProducts = getProducts;
exports.addProducts = addProducts;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct
