import { mount } from 'enzyme';
// import styles from '../../../styles/main';
import Spacex from '../../../Components/organisms/Spacex';

/** @test {Spacex Component} */
describe('Spacex Component', () => {
    it('should render without crashing', () => {
        const wrapper = mount(<Spacex />);
        //expect(wrapper.find('h1')).toHaveLength(1);
        //expect(wrapper.find('p')).toHaveLength(1);
    });
});
