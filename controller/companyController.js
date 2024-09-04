const Company = require("../model/company");

exports.createCompany=async(req,res)=>{
    try {
        if (req.files) {
            if (req.files.cover && req.files.cover[0]) {
                req.body.cover = "/company/cover/" + req.files.cover[0].originalname;
              }
              if (req.files.profile && req.files.profile[0]) {
                req.body.profile = "/company/profile/" + req.files.profile[0].originalname;
              }
          }
          if(req.body.dealSummary){
          req.body.dealSummary=JSON.parse(req.body.dealSummary);
          }
          if(req.body.news){
          req.body.news=JSON.parse(req.body.news);
          }
          if(req.body.update){
          req.body.update=JSON.parse(req.body.update);
          }
          if(req.body.investDoc){
          req.body.investDoc=JSON.parse(req.body.investDoc);
          }
       
        const company=await Company.findById(req.body.creatorId);
        if(company){
            return res.status(403).json({message:'This Company already added '});
        }
        await new  Company(req.body).save();
        res.status(201).json("company addedd successfully");
    } catch (error) {
       console.log(error);
       res.status(500).json({messsage:"something went wrong!"});
    }
}

exports.updateCompany=async(req,res)=>{
    try {
        const company=await Company.findById(req.params.id);
        if(!company){
            return res.status(403).json({message:'Company Id invalid '});
        }
        if(req.body.dealSummary){
          req.body.dealSummary=JSON.parse(req.body.dealSummary);
          }
          if(req.body.news){
          req.body.news=JSON.parse(req.body.news);
          }
          if(req.body.update){
          req.body.update=JSON.parse(req.body.update);
          }
          if(req.body.investDoc){
          req.body.investDoc=JSON.parse(req.body.investDoc);
          }
          if (req.files) {
            if (req.files.cover && req.files.cover[0]) {
                req.body.cover = "/company/cover/" + req.files.cover[0].originalname;
              }
              if (req.files.profile && req.files.profile[0]) {
                req.body.profile = "/company/profile/" + req.files.profile[0].originalname;
              }
          }
        await Company.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json("Company update Successfully");
    } catch (error) {
        console.log(error);
        res.status(500).json({messsage:"something went wrong!"});
    }
}

exports.deleteCompany=async(req,res)=>{
    try {
        const company=await Company.findById(req.params.id);
        if(!company){
            return res.status(403).json({message:'Company Id invalid '});
        }
        await Company.findByIdAndDelete(req.params.id);
        res.status(200).json("Company delete Successfully");
    } catch (error) {
        console.log(error);
        res.status(500).json({messsage:"something went wrong!"});
    }
}

exports.getByIdCompany=async(req,res)=>{
    try {
        const company=await Company.findById(req.params.id);
        if(!company){
            return res.status(403).json({message:'Company Id invalid'});
        }
        res.status(200).json(company);
    } catch (error) {
        console.log(error);
        res.status(500).json({messsage:"something went wrong!"});
    }
}

exports.getAllCompany=async(req,res)=>{
    try {
        const companies=await Company.find();
        res.status(200).json(companies);
    } catch (error) {
        console.log(error);
        res.status(500).json({messsage:"something went wrong!"});
    }
}

exports.getAllByCreatorCompany=async(req,res)=>{
    try {
        const compnies=await Company.find({creator:req.params.creatorId});
        res.status(200).json(compnies);
    } catch (error) {
        console.log(error);
        res.status(500).json({messsage:"something went wrong!"});
    }
}

// new controller

exports.addNews=async(req,res)=>{
    try {
        const company=await Company.findById(req.params.companyId);
        if(!company){
            return res.status(403).json({message:'Company Id invalid'});
        }
        company.news.push(req.body);
        await company.save();
        res.status(200).json("News added successfully");
    } catch (error) {
        console.log(error);
        res.status(500).json({messsage:"something went wrong!"});
    }
}
exports.deleteNews=async(req,res)=>{
    try {
        const company=await Company.findById(req.params.companyId);
        if(!company){
            return res.status(403).json({message:'Company Id invalid'});
        }
           company.news= company.news.filter((v)=>v._id!==req.params.id);
        await company.save();
        res.status(200).json("News added successfully");
    } catch (error) {
        console.log(error);
        res.status(500).json({messsage:"something went wrong!"});
    }
}

exports.addUpdateDoc=async(req,res)=>{
    try {
        const company=await Company.findById(req.params.companyId);
        if(!company){
            return res.status(403).json({message:'Company Id invalid'});
        }
        let updateDoc;
        if (req.files) {
           updateDoc = "/company/doc/" + req?.files[0]?.originalname;
          }
          req.body.updateDoc ={
            updateDoc,date:new Date()
          }
        company.update.push(req.body);
        await company.save();
        res.status(200).json("News added successfully");
    } catch (error) {
        console.log(error);
        res.status(500).json({messsage:"something went wrong!"});
    }
}

exports.deleteUpdateDoc = async (req, res) => {
    try {
      const company = await Company.findById(req.params.companyId);
      if (!company) {
        return res.status(403).json({ message: 'Invalid Company ID' });
      }
  
      const docIndex = company.update.findIndex(doc => doc._id === req.params.id);
      if (docIndex === -1) {
        return res.status(404).json({ message: "Document not found in the updateDoc array" });
      }
  
      const documentToDelete = company.update[docIndex];
  
      if (documentToDelete.updateDoc) {
        const filePath = path.join(__dirname, '..', 'public', documentToDelete.updateDoc); 
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error('Error deleting file:', err);
            return res.status(500).json({ message: "Failed to delete the document file." });
          } else {
            console.log('File deleted:', filePath);
          }
        });
      }
  
      company.update.splice(docIndex, 1);
  
      await company.save();
  
      res.status(200).json("Document deleted successfully");
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong!" });
    }
  };

exports.addInvestDoc=async(req,res)=>{
    try {
        const company=await Company.findById(req.params.companyId);
        if(!company){
            return res.status(403).json({message:'Company Id invalid'});
        }
        let investDoc;
        if (req.files) {
           investDoc = "/company/invest/" + req?.files[0]?.originalname;
          }
          req.body.investDoc ={
            investDoc,date:new Date()
          }
        company.investDoc.push(req.body);
        await company.save();
        res.status(200).json("News added successfully");
    } catch (error) {
        console.log(error);
        res.status(500).json({messsage:"something went wrong!"});
    }
}

exports.deleteInvestDoc = async (req, res) => {
    try {
      const company = await Company.findById(req.params.companyId);
      if (!company) {
        return res.status(403).json({ message: 'Invalid Company ID' });
      }
  
      const docIndex = company.investDoc.findIndex(doc => doc._id === req.params.id);
      if (docIndex === -1) {
        return res.status(404).json({ message: "Document not found in the updateDoc array" });
      }
  
      const documentToDelete = company.investDoc[docIndex];
  
      if (documentToDelete.investDoc) {
        const filePath = path.join(__dirname, '..', 'public', documentToDelete.investDoc); 
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error('Error deleting file:', err);
            return res.status(500).json({ message: "Failed to delete the document file." });
          } else {
            console.log('File deleted:', filePath);
          }
        });
      }
  
      company.investDoc.splice(docIndex, 1);
  
      await company.save();
  
      res.status(200).json("Document deleted successfully");
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong!" });
    }
  };