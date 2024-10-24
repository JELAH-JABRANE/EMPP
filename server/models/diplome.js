import mongoose, { Schema } from "mongoose";

const diplomeSchema = new Schema({
  NomDiplome: {
    type: String,
    required: true,
  },
  SpecialiteDiplome: {
    type: String,
    required: true,
  },
  DomainSpecialite: {
    type: String,
    enum: ["Domain1", "Domain2", "Domain3"],  // Specify the actual options
  },
  EtablissementdeDiplome: {
    type: String,
    required: true,
  },
  NiveauDeDiplome: {
    type: String,
    enum: ["Bachelor", "Master", "PhD"],  // Specify the actual options
  },
  AnneeobtentationDeDiplome: {
    type: Date,
  },
  DiplomePdf: {
    type: String,
  },
  CertificatDeSpécialisation: {
    type: String,
  },
  IsDiplomeLocal: {
    type: String,
    enum: ["ressortissant", "Etranger"],  
  },

});

const Diplome = mongoose.model('Diplome', diplomeSchema);

export default Diplome
