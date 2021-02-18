import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';
import '@testing-library/jest-dom';

describe('Prubeas en <GrifGridItem />', () => {
    const title = 'Batman';
    const url = 'https://batman.com/batman.jpg';
    const wrapper = shallow( <GifGridItem title={title} url={url}/> );
   test('debe de mostrar el componente correctamente ', () => {
       
       expect( wrapper ).toMatchSnapshot();
   });

   test('Debe tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
   });

   test('Debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
   });

   test('Debe tener animate__fadeIn', () => {
       const div = wrapper.find('div');
       expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
   });
   
});
