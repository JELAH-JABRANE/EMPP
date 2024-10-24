import mongoose, { Schema, model } from "mongoose";
import Diplome from "./diplome.js";

const UserSchema = new Schema({
    Nom: { type: String, required: true },
    Prenom: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    cne: { type: String, unique: true },
    sexe: {
        type: String,
        enum: ['male', 'female'],
    },
    role: {
        type: String,
        enum: ["admin", "Candidate"],
    },
    dateNaissance: {
        type: Date
    },
    LieuNaissance: { // Fixed typo and type
        type: String
    },
    Adresse: {
        type: String
    },
    codePostal: {
        type: String
    },
    Ville: {
        type: String
    },
    Pays: { // Fixed typo
        type: String
    },
    cellPhone: {
        type: String
    },
    phone: {
        type: String
    },
    profilImage: {
        type: String
    },
    diplome : {
        type : Schema.Types.ObjectId,
        ref : 'Diplome',
    }
});

const User = model('User', UserSchema);
export default User;
