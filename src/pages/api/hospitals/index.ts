import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { hospitalValidationSchema } from 'validationSchema/hospitals';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getHospitals();
    case 'POST':
      return createHospital();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getHospitals() {
    const data = await prisma.hospital
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'hospital'));
    return res.status(200).json(data);
  }

  async function createHospital() {
    await hospitalValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.appointment?.length > 0) {
      const create_appointment = body.appointment;
      body.appointment = {
        create: create_appointment,
      };
    } else {
      delete body.appointment;
    }
    if (body?.service?.length > 0) {
      const create_service = body.service;
      body.service = {
        create: create_service,
      };
    } else {
      delete body.service;
    }
    const data = await prisma.hospital.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
