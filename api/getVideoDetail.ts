import type { VercelRequest, VercelResponse } from '@vercel/node';
import { logger } from '../shared/logger.js';
import { getSign, toFailedResponse, toServerErrorResponse, toSuccessResponse } from '../shared/shared.js';
import { $get } from '../shared/request.js';
import getLocation from './getLocation.js';
import path from 'path';
import type { UseType } from './getLocation.js';

export interface IGetVideoDetailBody {
    url: string;
}

const BASE_URL = 'https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/';

export default async (request: VercelRequest, response: VercelResponse, useType: UseType = 'public') => {
    try {
        const location = await getLocation(request, response, 'private');
        if (!location) {
            response.status(400).send(toFailedResponse('invalid location'));
        } else {
            const query = {
                reflow_source: 'reflow_page',
                item_ids: path.parse(path.parse(location).dir).base,
                a_bogus: getSign(location).xbogus
            };
            const video_info_url = `${BASE_URL}?${new URLSearchParams(query).toString()}`;

            const result = await $get(video_info_url);
            if (useType === 'private') {
                return result;
            } else {
                response.status(200).send(toSuccessResponse(result));
            }
        }
    } catch (error: any) {
        logger.error('error', error);
        if (useType === 'public') {
            response.status(500).send(toServerErrorResponse(error.message));
        }
    }
};

