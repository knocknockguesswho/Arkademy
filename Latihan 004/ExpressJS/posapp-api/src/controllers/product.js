/* menyimpan parameter berbentuk function untuk mengambil data dengan get(). lalu mengirim ke get(), put(), post(), delete() sbg argumen */
const helper = require('../helper/index');
const productModel = require('../models/product');

module.exports = {
    getAllProducts: async function(request, response){
        try{
            const result = await productModel.getAllProductModel();
            return helper.response(response, 'success', result, 200); //mengirim parameter result menjadi json ke 'route'
        } catch(error){
            console.log(error);
            return helper.response(response, 'fail', 'Internal Server Error', 500);
        }
    },
    postProduct: async function(request, response){
        const setData = request.body;
        try{
            const result = await productModel.postProductModel(setData);
            return helper.response(response, 'success', result, 201);
        } catch(error){
            console.log(error)
            return helper.response(response, 'fail', 'Internal Server Error', 500);
        }
    },
    updateProduct: async function(request, response){
        const setData = request.body;
        const id = request.params.id;
        try{
            const result = await productModel.updateProductModel(setData, id);
            return helper.response(response, 'success', result, 200);
        } catch(error){
            console.log(error);
            return helper.response(response, 'fail', 'Internal Server Error', 500);
        }
    },
    deleteProduct: async function(request, response){
        const id = request.params.id;
        try{
            const result = await productModel.deleteProductModel(id);
            return helper.response(response, 'success', result, 200)
        } catch(error){
            console.log(error);
            return helper.response(response, 'fail', 'Internal Server Error', 500);
        }
    }
};