import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    themes: {
        type: String,
        required: false,
    },
    platform: {
        type: String,
        required: true,
    },
    yearPublished: {
        type: Number,
        required: true,
    },
    physicalDigital: {
        type: String,
        enum: ['physical', 'digital'],
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    developer: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 10,
        required: true,
    },
    images: [
        {
            type: String,
            required: false,
        },
    ],
});

const Game = mongoose.models.Game || mongoose.model('Game', gameSchema);

export default Game;