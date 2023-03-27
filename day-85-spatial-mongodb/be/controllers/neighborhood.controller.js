const Neighborhood = require("../models/neighborhoods")


exports.getNeighborhood = async (req, res) => {

    try {
        const result = await Neighborhood.find({}).limit(10)
        res.status(200).json({
            data: result,
        })
    } catch (error) {
        res.status(500).json({
            error: error,
        })
    }

}