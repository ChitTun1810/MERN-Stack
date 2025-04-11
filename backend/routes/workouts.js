const express = require('express');
const Workout = require('../models/workoutmodel');

const router = express.Router();
// gET all workouts
router.get('/', (req, res) => {
    res.json({ mssg: ' gET Workouts route' });
})
// GET a single workout
router.get('/:id', (req, res) => {
    res.json({ mssg: ' gET single workout route' });
})
// POST a new workout
router.post('/', async (req, res) => {
    const { title, load, reps } = req.body;
    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

    res.json({ mssg: 'POST a new workout route' });
})  
//dELETE a workout
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'DELETE a workout route' });
})
// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'UPDATE a workout route' });
})


module.exports = router;