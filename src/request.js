import express from 'express';

const router = express.Router();

router.use(express.json());

router.post('/', (req, res) => {
    console.log('Requst Method:', req.method, ' request data: ', req.body);
    res.status(200).json({
        status: 'OK',
        message: req.body
   });
});

router.put('/', (req, res) => {
   console.log('Requst Method:', req.method, ' request data: ', req.body);
   res.status(200).json({
        status: 'OK',
        message: req.body
   });
});

router.use((req, res) => {
    console.log('Requst Method:', req.method, "Method not allowed");
    res.status(405).json({
        status: 'Method Not Allowed',
        message: 'The requested method is not allowed on this endpoint.'
    });
});

export default router;