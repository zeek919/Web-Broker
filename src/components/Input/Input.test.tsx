import React from 'react';
import { mount } from 'enzyme';
import Input from './Input';

describe('asd', () => {
    let setup: any;

    beforeEach(() => {
        setup = (propsOverride?: any) => {
            const onChange = jest.fn();

            const props = {
                name: 'input',
                type: 'text',
                placeholder: 'super plejsholder',
                onChange,
                ...propsOverride,
            };

            // @ts-ignore
            // eslint-disable-next-line react/jsx-props-no-spreading
            const component = mount(<Input {...props} />);

            return {
                wrapper: component,
            };
        };
    });

    it('onChange work correctly', () => {
        const { wrapper } = setup();
        // const fakeValue = 'fake value';
        console.log(wrapper.debug());
        // render.find(input).simulate('change', { target: { value: fakeValue } });
        // expect(render.find(<InputField />).props().value).toEqual(fakeValue);
    });
});
