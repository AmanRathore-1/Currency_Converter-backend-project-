import axios from "axios";

export const convertCurrency = async (req, res) => {
    try {
        const { from, to, amount } = req.query;

        const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${from}/${to}/${amount}`;

        const response = await axios.get(url);
        const data = response.data;

        return res.json({
            from: data.base_code,
            to: data.target_code,
            amount,
            conversionRate: data.conversion_rate,
            convertedAmount: data.conversion_result
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
};