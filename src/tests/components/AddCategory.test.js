import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Pruebas en el componente <AddCategory />', () => {
    const setCategories = jest.fn();
    const handleSubmit = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });
   test('Debe de mostrarse correctamente', () => {
       expect(wrapper).toMatchSnapshot();
   });
   
    test('No debe postear la información con submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
       //1. simular el inputChange
       //2. Simular el submit
       //3. setCategories se debe de haber llamado
       //4. El valor del input debe estar ''
       const value = 'something';
       const e = {target: {value}};
       wrapper.find('input').simulate('change', e);
       wrapper.find('form').simulate('submit', {preventDefault(){}});
       expect(setCategories).toHaveBeenCalled();
       expect(setCategories).toHaveBeenCalledTimes(1);
       expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
       expect(wrapper.find('input').text()).toBe('');
    });
    
    
});
