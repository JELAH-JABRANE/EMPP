import  Diplome  from "../models/diplome.js";


export const createDiplome = async (req, res) => {
    const { NomDiplome,
        SpecialiteDiplome,
        DomainSpecialite,
        EtablissementdeDiplome,
        NiveauDeDiplome,
        AnneeobtentationDeDiplome,
        DiplomePdf,
        CertificatDeSpécialisation,
        IsDiplomeLocal,
         } = req.body
    try {
        if (!SpecialiteDiplome || !DomainSpecialite || !EtablissementdeDiplome || !NiveauDeDiplome || !AnneeobtentationDeDiplome || !DiplomePdf || !CertificatDeSpécialisation || !IsDiplomeLocal) {
            return res.status(400).json({ message: "all fields required" })
        }
        const diplome = new Diplome({
            NomDiplome,
            SpecialiteDiplome,
            DomainSpecialite,
            EtablissementdeDiplome,
            NiveauDeDiplome,
            AnneeobtentationDeDiplome,
            DiplomePdf,
            CertificatDeSpécialisation,
            IsDiplomeLocal,
        })
        const saveDiplome = await diplome.save();
        return res.status(201).json({ message: "Diplome created " })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Error status 500" })
    }
}

export const DeleteDiplome = async (req, res) => {
    const DiplomeId = req.params.id;

    try {
        const deleteDiplome = await Diplome.findByIdAndDelete(DiplomeId)
        if (!deleteDiplome) {
            return res.status(400).json({ message: "Diplome not deleted" })
        }
        res.status(200).json({ message: "Diplome Deleted Succussfully" })



    } catch (error) {
        console.error(error)
    }
}

export const updateDiplome = async (req, res) => {
    const updateData = req.body

    const DiplomeId = req.params.id
    try {
        const UpdateDiplome = await Diplome.findByIdAndUpdate(DiplomeId, updateData, { new: true })
        if (!updateDiplome) {
            return res.status(400).json({ message: "the diplome didnt updated" })
        }
        res.status(200).json({ message: "diplome updated" })
    } catch (error) {
        console.error(error)

    }
}

