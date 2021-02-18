import { getGifs } from "../../helpers/getGifs";
import '@testing-library/jest-dom';

describe('Pruebas con getGifs Fetch()', () => {
    test('Debe traer 10 elementos', async () => {
        const gifs = await getGifs('Shingeki');
        expect(gifs.length).toBe(10);
    });

    test('Debe traer 10 elementos', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
    
})
