export default function handler(req, res) {
    // rec: request
    // res: response
    res.status(200).json({ name: 'Dashboard API route'})
    // .status sets the status code
    // .json sends out the json response
    }