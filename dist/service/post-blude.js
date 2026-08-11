"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("../../generated/prisma/client");
const router = express_1.default.Router();
const prisma = new client_1.PrismaClient();
router.post('/blude', async (req, res) => {
    try {
        const { title, description, category, location, contactName, contactPhone, contactEmail, isActive, } = req.body;
        if (!title || !description) {
            return res.status(400).json({
                message: 'Title and description are required',
            });
        }
        const bludePost = await prisma.bludePost.create({
            data: {
                title,
                description,
                category: category || null,
                location: location || null,
                contactName: contactName || null,
                contactPhone: contactPhone || null,
                contactEmail: contactEmail || null,
                isActive: isActive ?? true,
            },
        });
        return res.status(201).json({
            message: 'Blude post created successfully',
            data: bludePost,
        });
    }
    catch (error) {
        console.error('Error creating blude post:', error);
        return res.status(500).json({ message: 'Failed to create blude post' });
    }
});
exports.default = router;
