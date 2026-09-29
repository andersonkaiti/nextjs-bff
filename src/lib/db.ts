import { env } from '@config/env'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../../generated/prisma/client'

const adapter = new PrismaPg({ connectionString: env.DATABASE_URL })
export const db = new PrismaClient({ adapter })
