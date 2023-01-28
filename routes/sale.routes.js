import express from 'express';
const router = express.Router();
import {saveSale, getAllSales, getSalesByDate, getSalesByMonth, getSalesByYear, getSaleById, updateSale, deleteSale, getTotalIng, getTotal, getTotalEgr, getSalesByProduct, getSalesByCondition, getTotalEgrByMonth, getTotalIngByMonth, getTotalSalesByProduct, getTotalSalesByProductByMonth, getTotalSalesByYear} from '../controllers/sale.controllers.js';

router.post('/', saveSale);
router.get('/', getAllSales);
router.get('/totaling/:date', getTotalIng)     //total ingresos por fecha
router.get('/totalingmonth/:month', getTotalIngByMonth) //total ingresos por mes
router.get('/totalegrmonth/:month', getTotalEgrByMonth)
router.get('/totalegr/:date', getTotalEgr)     //total egresos por fecha
router.get('/total/:date', getTotal)     //total ventas por fecha
router.get('/totalingyear/:year', getTotalSalesByYear)
router.get('/date/:date', getSalesByDate);  //por fecha completa dd-mm-aaaa
router.get('/month/:month', getSalesByMonth);   //por mes
router.get('/year/:year', getSalesByYear);  //por año
router.get('/product/:product', getSalesByProduct)
router.get('/product/total/:product/:date', getTotalSalesByProduct) 
router.get('/totalsalesbypym/:product/:month', getTotalSalesByProductByMonth)
router.get('/condition/:condition', getSalesByCondition)
router.get('/byid/:id', getSaleById)
router.put('/:id', updateSale)
router.delete('/:id', deleteSale) 

export default router;