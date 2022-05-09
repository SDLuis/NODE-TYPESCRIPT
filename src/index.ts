import express from 'express'
import postRouter from './routes/post.routes'
const app = express();
app.use(express.json());

const PORT = 5000;

app.use('/post',postRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});