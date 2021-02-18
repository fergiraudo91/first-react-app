import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {
    test('Debe retornar el estado inicial', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('shingeki'));
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Debe retornar un arreglo de imgs y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('shingeki'));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
    });


});
