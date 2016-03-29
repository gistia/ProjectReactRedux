import { renderComponent, expect } from '../test_helper';
import Milestone from '../../../src/containers/project/milestone';

describe('Milestone' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Milestone, {
      milestone: { id: 12, name: 'Milestone' },
      fetchTasks: () => {}
    });
  });

  it('renders the milestone name', () => {
    expect(component.find('.milestone-name')).to.have.text('Milestone');
  });

  it('does not show the tasks', () => {
    expect(component.find('.tasks')).to.not.be.visible;
  });

  describe('expanding the milestone', () => {
    beforeEach(() => {
      component.find('.milestone-task-toggler').simulate('click');
    });

    it('shows the tasks area', () => {
      expect(component.find('.tasks')).to.be.visible;
    });

    it('hides the tasks area when clicked again', () => {
      component.find('.milestone-task-toggler').simulate('click');
      expect(component.find('.tasks')).to.not.be.visible;
    });
  });
});
