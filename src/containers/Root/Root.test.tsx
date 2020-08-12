import React from 'react';
import Root from './Root';

describe('test', () => {
    it('still testing', () => {
        expect(<Root />).toMatchSnapshot();
    });
});
