import type { VercelRequest, VercelResponse } from '@vercel/node';
import { logger } from '../shared/logger.js';
import { getSign, toFailedResponse, toServerErrorResponse, toSuccessResponse } from '../shared/shared.js';
import getVideoUrl from './getVideoUrl.js';

export default async (request: VercelRequest, response: VercelResponse) => {
    try {
        const { url } = request.query;
        request.body = { url };
        const result = await getVideoUrl(request, response, 'private');
        if (result && result.play_url) {
            const play_url = result.play_url;

            const video = await fetch(play_url).then(res => res.blob());
            const buffer = await video.arrayBuffer();
            const bufferData = Buffer.from(buffer);

            response.setHeader('Content-Type', 'video/mp4');
            response.status(200).send(bufferData);
        } else {
            response.status(400).send(toFailedResponse('invalid play_url'));
        }
    } catch (error: any) {
        logger.error('error', error);
        response.status(500).send(toServerErrorResponse(error.message));
    }
};

