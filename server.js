const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(express.json());



app.get('/', (req, res) => {
	res.send("<h1>API IS Working right </h1>");
});



app.post('/sendData', (req, res) => {
    try {
        const data = req.body.data;
		console.log(data);

		const evenNum = [];
		const oddNum = [];
		const alpha = [];


		data.forEach((itm) => {
			if (typeof itm == "number"){
				if (itm%2 == 0){
					evenNum.push(itm);
				}else{
					oddNum.push(itm);
				}
			}else{
				alpha.push(itm);
			}
		});

		return res.status(200).json({
			"is_success" : true,
			"user_id" : "sharma", "email" : "abc@gmail.com",
			"roll_number" : "2110990619",
			"odd_number" : oddNum,
			"even_number" : evenNum,
			"alphabets" : alpha
		});
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }	
});




	

app.listen(5000, () => {
	console.log('app listening at 5000');
});
