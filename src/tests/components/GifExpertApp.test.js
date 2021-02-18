import React from 'react';
import '@testing-library/jest-dom';
import { GifExpertApp } from '../../GifExpertApp';
import { shallow } from 'enzyme';

describe('Pruebas en GifExpertApp', () => {
    const wrapper = shallow(<GifExpertApp />);
   test('Debe hacer match con el snatshop', () => {
       expect(wrapper).toMatchSnapshot();
   });

   test('Debe mostrar una lista de categorias', () => {
       const categories = ['shingeki no kyojin', 'Akame Ga Kill'];
       const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
       expect(wrapper).toMatchSnapshot();
       expect(wrapper.find('GifGrid').length).toBe(categories.length);
   })
   
    
});
