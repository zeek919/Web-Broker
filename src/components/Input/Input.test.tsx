import React from 'react';
import {mount, ReactWrapper} from 'enzyme';
import Input from './Input';
import {InputProps} from './Input'
import icon from '../../assets/email_icon.png'

describe('InputField', () => {

    let component: ReactWrapper;
    let setup: InputProps;
    const onChangeHandler: () => void = jest.fn();

    beforeEach(() => {
        setup = {
            name: 'name',
            type: 'text',
            placeholder: 'placeholder',
            icon: icon,
            onChange: onChangeHandler
        }

        component = mount(<Input {...setup} />)
    })

    it('onChange work correctly', () => {
        const fakeValue = 'fake value';
        const input = component.find('input');

        input.simulate('change')
        input.getDOMNode<HTMLInputElement>().value = fakeValue;
        expect(setup.onChange).toHaveBeenCalledTimes(1);
        expect(component.find('input').getDOMNode<HTMLInputElement>().value).toEqual(fakeValue);
    });

    it('icon shows correctly', () => {
        expect(component.prop('icon')).toEqual(icon)
    })
});
