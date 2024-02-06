import type { VercelRequest, VercelResponse } from '@vercel/node';
import { logger } from '../shared/logger.js';
import { getSign, toFailedResponse, toServerErrorResponse, toSuccessResponse } from '../shared/shared.js';
import getVideoDetail from './getVideoDetail.js';
import { $get, $getHeaders } from '../shared/request.js';
import { UseType } from './getLocation.js';

export interface IGetVideoUrlBody {
    url: string;
}

export default async (request: VercelRequest, response: VercelResponse, useType: UseType = 'public') => {
    try {
        const videoDetail = await getVideoDetail(request, response, 'private');

        const { video } = videoDetail.item_list[0];
        const { play_addr } = video;
        const { url_list } = play_addr;
        const [videoUrl] = url_list;
        const video_title = videoDetail.item_list[0].desc;
        const _videoUrl = videoUrl.replace('playwm', 'play');
        logger.info('video url', _videoUrl);
        const result = await $getHeaders(_videoUrl, {
            headers: {
                'User-Agent': 'ua'
            }
        });
        const play_url = result.get('location');
        const responseData = { video_title, video_url: _videoUrl, play_url };
        if (useType === 'private') {
            return responseData;
        } else {
            response.status(200).send(toSuccessResponse(responseData));
        }
    } catch (error: any) {
        logger.error('error', error);
        if (useType === 'public') {
            response.status(500).send(toServerErrorResponse(error.message));
        }
    }
};

