"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = __importDefault(require("../lib/prisma"));
const router = express_1.default.Router();
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
router.put('/blude/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, category, location, posterName, posterPhone, posterEmail, posterAddress, posterAge, posterGender, posterProfession, contactName, contactPhone, contactEmail, isActive, } = req.body;
        const existingPost = await prisma_1.default.bludePost.findUnique({ where: { id } });
        if (!existingPost) {
            return res.status(404).json({ success: false, message: 'Blude post not found' });
        }
        const updateData = {};
        if (title !== undefined)
            updateData.title = title;
        if (description !== undefined)
            updateData.description = description;
        if (category !== undefined)
            updateData.category = category;
        if (location !== undefined)
            updateData.location = location;
        if (posterName !== undefined)
            updateData.posterName = posterName || contactName || null;
        if (posterPhone !== undefined)
            updateData.posterPhone = posterPhone || contactPhone || null;
        if (posterEmail !== undefined)
            updateData.posterEmail = posterEmail || contactEmail || null;
        if (posterAddress !== undefined)
            updateData.posterAddress = posterAddress || null;
        if (posterAge !== undefined)
            updateData.posterAge = posterAge ?? null;
        if (posterGender !== undefined)
            updateData.posterGender = posterGender || null;
        if (posterProfession !== undefined)
            updateData.posterProfession = posterProfession || null;
        if (isActive !== undefined)
            updateData.isActive = isActive;
        const updatedPost = await prisma_1.default.bludePost.update({
            where: { id },
            data: updateData,
        });
        return res.json({ success: true, message: 'Blude post updated successfully', data: updatedPost });
    }
    catch (error) {
        console.error('Error updating blude post:', error);
        return res.status(500).json({ success: false, message: 'Failed to update blude post' });
    }
});
router.post('/donor', async (req, res) => {
    try {
        const { title, description, donorName, donorPhone, donorEmail, bloodGroup, location, isActive, } = req.body;
        if (!title || !description) {
            return res.status(400).json({ success: false, message: 'Title and description are required' });
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
        return res.status(201).json({ success: true, message: 'Donor post created successfully', data: donorPost });
    }
    catch (error) {
        console.error('Error creating donor post:', error);
        return res.status(500).json({ success: false, message: 'Failed to create donor post' });
    }
});
exports.default = router;
