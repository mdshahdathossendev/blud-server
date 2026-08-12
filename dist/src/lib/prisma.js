import 'dotenv/config';
import { PrismaClient } from '../../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:Shahdat22@localhost:8080/blude_web';
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({
    adapter,
    log: ['error', 'warn'],
});
export default prisma;
