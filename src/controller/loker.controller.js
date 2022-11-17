import Loker from "../../database/models/loker.model.js";
import mongoose from "mongoose";

export default class LokerAdmin {
  constructor() {}
  
  async getAllLoker(req, res, next) {
    try {
      const loker = await Loker.find().populate("user", "email")
      // populate('author', 'name'). 
      // user nama fieldnya
      // only return the Persons name
      if (loker) {
        return res.status(200).send({
          status: res.statusCode,
          message: `Success Get All Data Loker`,
          data: loker
        });        
      } else {
        return res.status(404).send({
          status: res.statusCode,
          message: `Data Loker Tidak Ditemukan`,
        });
      }
    } catch (error) {
      console.log(error);
			return res.status(500).send({ status: res.statusCode, message: `Internal Server Error` });
    }
  }

  async getLokerByID (req, res, next) {
    try {    
      const params = req.params;      
      const loker = await Loker.findOne({ _id: mongoose.Types.ObjectId(params)});      

      if (loker) {
        return res.status(200).send({
          status: res.statusCode,
          message: `Success Get Data Loker`,
          data: loker
        });        
      } else {
        // Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer
        // tes >> 637653a2ec1b3ed5242c9a9b
        return res.status(404).send({
          status: res.statusCode,
          message: `Data Loker Tidak Ditemukan`,
        });
      }
    } catch (error) {
      console.log(error);
			return res.status(500).send({ status: res.statusCode, message: `Internal Server Error` });
    }    
  }

  async addLoker(req, res, next) {
    try {
      const data = req.body
      const loker = new Loker(data)
      loker.save()

      return res.status(200).send({
        status: res.statusCode,
        message: `Success Create Loker`,
      });      
    } catch (error) {
      console.log(error);
			return res.status(500).send({ status: res.statusCode, message: `Internal Server Error` });
    }
  }

  async deleteLokerByID (req, res, next) {
    try {    
      const params = req.params;      
      const loker = await Loker.findOneAndDelete({ _id: mongoose.Types.ObjectId(params)});
      
      return res.status(202).send({
        status: res.statusCode,
        message: `Success Delete Loker`,
      });        
    } catch (error) {
      console.log(error);
			return res.status(500).send({ status: res.statusCode, message: `Internal Server Error` });
    }    
  }

  async updateLokerByID (req, res, next) {
    try {    
      const params = req.params;
      const data = req.body;      

      if (!data) {
        res.send({
          message: "Masukkan Semua Data"
        })
      }

      const lokerOld = await Loker.findOne({ _id: mongoose.Types.ObjectId(params)});
      const loker = await Loker.findOneAndUpdate({ _id: mongoose.Types.ObjectId(params)}, data, {new: true});      
      
      if (loker) {
        return res.status(200).send({
          status: res.statusCode,
          message: `Success Get Data Loker`,
          old_data: lokerOld,
          new_data: loker,
        });        
      } else {
        // Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer
        // tes >> 637653a2ec1b3ed5242c9a9b
        return res.status(404).send({
          status: res.statusCode,
          message: `Data Loker Tidak Ditemukan`,
        });
      }
    } catch (error) {
      console.log(error);
			return res.status(500).send({ status: res.statusCode, message: `Internal Server Error` });
    }
  }
}