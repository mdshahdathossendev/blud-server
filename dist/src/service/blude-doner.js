"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = __importDefault(require("../lib/prisma"));
const router = express_1.default.Router();
router.get('/blude-doner', async (req, res) => {
    try {
        const donorPosts = await prisma_1.default.donorPost.findMany({
            orderBy: { createdAt: 'desc' },
        });
        res.json({
            success: true,
            message: 'Blude donor posts fetched successfully',
            data: donorPosts,
        });
    }
    catch (error) {
        console.error('Error fetching blude donor posts:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch blude donor posts',
        });
    }
});
router.post('/blude-doner', async (req, res) => {
    try {
        const { title, description, donorName, donorPhone, donorEmail, bloodGroup, location, isActive, } = req.body;
        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: 'Title and description are required',
            });
        }
        const donorPost = await prisma_1.default.donorPost.create({
            data: {
                title,
                description,
                donorName: donorName || null,
                donorPhone: donorPhone || null,
                donorEmail: donorEmail || null,
                bloodGroup: bloodGroup || null,
                location: location || null,
                isActive: isActive ?? true,
            },
        });
        return res.status(201).json({
            success: true,
            message: 'Blude donor post created successfully',
            data: donorPost,
        });
    }
    catch (error) {
        console.error('Error creating blude donor post:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to create blude donor post',
        });
    }
});
exports.default = router;
