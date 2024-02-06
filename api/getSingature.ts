import type { VercelRequest, VercelResponse } from '@vercel/node';
import { logger } from '../shared/logger.js';
import { getSign, toFailedResponse, toServerErrorResponse, toSuccessResponse } from '../shared/shared.js';

export interface IGetSignatureBody {
    location: string;
}

export default async (request: VercelRequest, response: VercelResponse) => {
    try {
        const { location } = request.body as IGetSignatureBody;
        logger.info('location', location);
        if (!location) {
            response.status(400).send(toFailedResponse('invalid location'));
        }
        const { xbogus } = getSign(location);
        response.status(200).send(toSuccessResponse({ xbogus }));
    } catch (error: any) {
        logger.error('error', error);
        response.status(500).send(toServerErrorResponse(error.message));
    }
};

