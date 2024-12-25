const express =require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/products', controller.getProducts);
router.post('/addproduct', controller.addProducts);
router.put('/updateproduct', controller.updateProduct);
router.delete('/deleteproduct', controller.deleteProduct);

module.exports = router;