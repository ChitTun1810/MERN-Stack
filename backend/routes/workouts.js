const express = require('express');
const {
    createWorkout,
    getWorkouts,
    getWorkout,
} = require('../controllers/workoutController');

const router = express.Router();
// gET all workouts
router.get('/', getWorkouts);
// GET a single workout
router.get('/:id', getWorkout);
// POST a new workout
router.post('/', createWorkout)  
//dELETE a workout
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'DELETE a workout route' });
})
// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'UPDATE a workout route' });
})


module.exports = router;