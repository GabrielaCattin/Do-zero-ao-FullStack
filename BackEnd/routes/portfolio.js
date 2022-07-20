const router = require('express').Router()
const Portfolio = require('../models/Portfolio') 

// read
router.get('/', async (req, res) => {
    try{
        const portfolio = await Portfolio.find()

        res.json({
            sucess: true,
            data: portfolio
        })
    }catch(err){
        res.json({
            sucess: false,
            message: err
        })
    }
});

router.get('/:slug', async (req, res) => {
    try{
        const portfolio = await Portfolio.findOne({
            slug: req.params.slug
        })
        res.json({
            sucess: true,
            data: portfolio
        })
    }catch(err){
    res.json({
        sucess: false,
        message: err
    })
    }
});

// create
router.post('/', (req, res) => {
    const portfolio = new Portfolio({
        title: req.body.title,
        description: req.body.description
    });

    portfolio
        .save()
        .then((data) => {
            res.json({
                sucess: true,
                data
            })
        })
        .catch((err) =>{
            res.json({
                sucess: true,
                message: err
            });
        })
});

//update
router.patch('/:slug', async (req, res) => {
    try{
        const updatedPortfolio = await Portfolio.updateOne({
            slug: req.params.slug
        },
        {
            title: req.body.title,
            description: req.body.description
        })

        res.json({
            sucess: true,
            data: updatedPortfolio
        })
    }catch(err){
        res.json({
        sucess: false,
        message: err
        })
    }
})

//delete
router.delete('/:slug', async (req, res) => {
    try{
        const deletedPortfolio = await Portfolio.deleteOne({
            slug: req.params.slug
        });

        res.json({
            sucess: true,
            data: deletedPortfolio.deletedCount
        })

    } catch(err){
        res.json({
            sucess: false,
            message: err
        })
    }
})
module.exports = router;