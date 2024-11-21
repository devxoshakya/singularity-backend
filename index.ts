import express from 'express'
import { solver } from './solver'
const app = express()
const port = process.env.PORT || 6969

app.use(express.json());

app.get('/', async (req, res) => {
    const data = await solver(2300680100104);
    res.json(data);
})


app.post('/', async (req, res) => {
    const rollNo = req.body.rollNo;
    const data = await solver(rollNo);
    res.json(data);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})