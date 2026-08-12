import express from 'express';
import prisma from '../lib/prisma';
const router = express.Router();
router.get('/blude', async (req, res) => {
    try {
        const bludePosts = await prisma.bludePost.findMany({
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
        const bludePost = await prisma.bludePost.create({
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
export default router;
