import type { VercelRequest, VercelResponse } from '@vercel/node';
import { logger } from '../shared/logger.js';
import { getSign, toFailedResponse, toServerErrorResponse, toSuccessResponse } from '../shared/shared.js';

const html = (url: string) => `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        video {
            width: 300px;
            height: auto;
        }
    </style>
    <body></body>

    <script>
        function downloadVideo(data) {
            const a = document.createElement('a');
            const url = URL.createObjectURL(data);
            a.href = url;
            a.download = 'video.mp4';
            a.click();
            URL.revokeObjectURL(url);
        }

        function createVideo(data) {
            const video = document.createElement('video');
            video.src = URL.createObjectURL(data);
            video.controls = true;
            document.body.appendChild(video);
        }

        function createButton(data) {
            const button = document.createElement('button');
            button.innerText = 'Download';
            button.onclick = () => {
                downloadVideo(data);
            };
            document.body.appendChild(button);
        }

        window.addEventListener('DOMContentLoaded', () => {
            const url = 'https://douyin-signature-delta.vercel.app/api/downloadVideo?url=${encodeURIComponent(url)}';

            fetch(url)
                .then(res => res.blob())
                .then(data => {
                    createVideo(data);
                    createButton(data);
                });
        });
    </script>
</html>
`;

export default async (request: VercelRequest, response: VercelResponse) => {
    try {
        const url = request.query.url as string;
        logger.info('url', url);

        if (!url) {
            response.status(400).send(toFailedResponse('url is required'));
            return;
        }

        response.setHeader('Content-Type', 'text/html');
        response.status(200).send(html(url));
    } catch (error: any) {
        logger.error('error', error);
        response.status(500).send(toServerErrorResponse(error.message));
    }
};

