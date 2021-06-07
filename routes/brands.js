const { Router } = require('express');
const controllers = require('../controllers/brands');

const router = Router();

router.post('/brands', controllers.postBrand);
router.put('/brands/:id', controllers.patchBrand);
router.delete('/brands/:id',controllers.deleteBrand);

module.exports = router