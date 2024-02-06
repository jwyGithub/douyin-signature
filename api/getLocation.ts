import type { VercelRequest, VercelResponse } from '@vercel/node';
import { $getHeaders } from '../shared/request.js';
import { logger } from '../shared/logger.js';
import { parseShortUrl, toFailedResponse, toServerErrorResponse, toSuccessResponse } from '../shared/shared.js';

export interface IGetLocationBody {
    url: string;
}

export type UseType = 'private' | 'public';

export default async (request: VercelRequest, response: VercelResponse, useType: UseType = 'public') => {
    try {
        const { url } = request.body as IGetLocationBody;
        logger.info('video url', url);
        const short_url = parseShortUrl(url);
        if (!short_url) {
            response.status(400).send(toFailedResponse('invalid short_url'));
        } else {
            const result = await $getHeaders(short_url);
            const location = result.get('location');
            logger.info('location', location);
            if (useType === 'private') {
                return location;
            } else {
                response.status(200).send(toSuccessResponse({ location, short_url }));
            }
        }
    } catch (error: any) {
        logger.error('error', error);
        if (useType === 'public') {
            response.status(500).send(toServerErrorResponse(error.message));
        }
    }
};

