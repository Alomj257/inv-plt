const { createDeal, updateDeal, deleteDeal, getByIdDeal, getAllBycompanyIdDeal, getAllDeal, getDealsByInvestor } = require("../controller/dealController");

const dealRoutes=require("express").Router();
dealRoutes.post("/",createDeal);
dealRoutes.put("/:id",updateDeal);
dealRoutes.delete("/:id",deleteDeal);
dealRoutes.get("/:id",getByIdDeal);
dealRoutes.get("/company/:companyId",getAllBycompanyIdDeal);
dealRoutes.get("/investor/:investorEMail",getDealsByInvestor);
dealRoutes.get("/",getAllDeal);



module.exports=dealRoutes;