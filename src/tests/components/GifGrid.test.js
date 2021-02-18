import React from 'react';
import '@testing-library/jest-dom';
import { GifGrid } from '../../components/GifGrid';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');
describe('componente <GifGrid />', () => {
    const category = 'Shingeki no Kyojin';
    test('Debe hacer un snapshot', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar items cuando se cargan imagenes con useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'cualquiercosa.jpg',
            title: 'cualquier cosa'

        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(true);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
        
    });


});
