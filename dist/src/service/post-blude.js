"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = __importDefault(require("../lib/prisma"));
const router = express_1.default.Router();
router.get('/blude', async (req, res) => {
    try {
        const bludePosts = await prisma_1.default.bludePost.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return res.json({
            success: true,
            message: 'Blude posts fetched successfully',
            data: bludePosts,
        });
    }
    catch (error) {
        console.error('Error fetching blude posts:', error);
        return res.status(500).json({ success: false, message: 'Failed to fetch blude posts' });
    }
});
router.post('/blude', async (req, res) => {
    try {
        const { title, description, category, location, posterName, posterPhone, posterEmail, posterAddress, posterAge, posterGender, posterProfession, contactName, contactPhone, contactEmail, isActive, } = req.body;
        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: 'Title and description are required',
            });
        }
        const bludePost = await prisma_1.default.bludePost.create({
            data: {
                title,
                description,
                category: category || null,
                location: location || null,
                posterName: posterName || contactName || null,
                posterPhone: posterPhone || contactPhone || null,
                posterEmail: posterEmail || contactEmail || null,
                posterAddress: posterAddress || null,
                posterAge: posterAge ?? null,
                posterGender: posterGender || null,
                posterProfession: posterProfession || null,
                isActive: isActive ?? true,
            },
        });
        return res.status(201).json({
            success: true,
            message: 'Blude post created successfully',
            data: bludePost,
        });
    }
    catch (error) {
        console.error('Error creating blude post:', error);
        return res.status(500).json({ success: false, message: 'Failed to create blude post' });
    }
});
exports.default = router;
