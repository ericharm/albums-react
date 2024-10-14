import { http, HttpResponse } from 'msw';
import { setupWorker } from 'msw/browser';
const baseUrl = 'https://localhost:8080';

import albumsResponse from '../data/albums.json';

export const handlers = [
    http.get(`${baseUrl}/albums`, () => {
        return HttpResponse.json(albumsResponse);
    }),
];

const worker = setupWorker(...handlers);
await worker.start();
