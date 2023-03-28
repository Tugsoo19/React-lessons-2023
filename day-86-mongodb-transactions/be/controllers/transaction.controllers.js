const Product = require("../models/Product");
const ShippingAddress = require("../models/ShippingAddress");
const User = require("../models/user")


exports.createTransaction = async (req, res) => {

    try {
        const session = await User.startSession();
        session.startTransaction();
        const product = await Product.updateOne({
            _id: "64224db9fa62bcc9fa88b1a6",
            quantity: 4,
        }, { session })
        const user = await User.create(req.body.user, { session });
        const shippingAddress = await ShippingAddress.create(
            req.body.shippingAddress,
            { session }
        );
        await session.commitTransaction();
        session.endSession();
        res.json({ status: true, user, shippingAddress, product });
    } catch (error) {
        res.json({ status: false, error })
    }

};

exports.createTransactionWithoutSession = async (req, res) => {

    try {

        const product = await Product.updateOne({
            _id: "64224db9fa62bcc9fa88b1a6",
            quantity: 2,
        })
        const user = await User.create(req.body.user);
        const shippingAddress = await ShippingAddress.create({
            address: req.body.shippingAddress,
            user_id: user._id,
        }

        );
        res.json({ status: true, user, shippingAddress, product });
    } catch (error) {
        res.json({ status: false, error })
    }

};

