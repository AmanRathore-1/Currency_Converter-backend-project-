export const logger = (req, res, next) => {
    console.log("Request Received");
    next();
};

export const validateInput = (req, res, next) => {
    const { from, to, amount } = req.query;

    if (!from || !to || !amount) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    const amountValue = Number(amount);

    if (isNaN(amountValue)) {
        return res.status(400).json({
            success: false,
            message: "Amount must be a valid number"
        });
    }

    if (amountValue <= 0) {
        return res.status(400).json({
            success: false,
            message: "Amount must be greater than 0"
        });
    }

    const fromCurrency = from.toUpperCase();
    const toCurrency = to.toUpperCase();

    if (fromCurrency.length !== 3 || toCurrency.length !== 3) {
        return res.status(400).json({
            success: false,
            message: "Currency code must contain exactly 3 letters"
        });
    }

    req.query.from = fromCurrency;
    req.query.to = toCurrency;
    req.query.amount = amountValue;

    next();
};