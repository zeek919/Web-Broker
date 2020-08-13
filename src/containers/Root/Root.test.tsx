import React from 'react';
import Root from './Root';
import { MemoryRouter } from 'react-router';
import Login from "../../components/Login/Login";
import NotFoundPage from "../../components/NotFoundPage/NotFoundPage";
import {mount} from "enzyme";

describe('Route testing', () => {
    it('Invalid path redirect to 404', () => {
        const component = mount(<MemoryRouter initialEntries={[ '/notExist' ]}>
            <Root />
        </MemoryRouter>)
        expect(component.find(Login)).toHaveLength(1);
        expect(component.find(NotFoundPage)).toHaveLength(0);
    });

    it('Correct path redirect to Login', () => {
        const component = mount(<MemoryRouter initialEntries={[ '/' ]}>
            <Root />
        </MemoryRouter>)
        expect(component.find(Login)).toHaveLength(0);
        expect(component.find(NotFoundPage)).toHaveLength(1);
    });
});
