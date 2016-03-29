import { renderComponent, expect } from '../test_helper';
import { TaskStatus } from '../../../src/containers/project/task_status';

describe('TaskStatus' , () => {
  let component;
  let state;

  function renderTaskStatus(status) {
    const task = { status };
    return renderComponent(TaskStatus, {
      task,
      updateTask: (_state) => { state = _state; }
    });
  }

  describe('status buttons', () => {
    describe('when status is planned', () => {
      beforeEach(() => component = renderTaskStatus('planned') );

      it('renders the Start button', () => {
        expect(component.find('button')).to.have.text('Start');
      });

      it('changes the status to started', () => {
        component.find('button').simulate('click');
        expect(state).to.eql({ status: 'started' });
      });
    });

    describe('when status is started', () => {
      beforeEach(() => component = renderTaskStatus('started') );

      it('renders the Finish button', () => {
        expect(component.find('button:first-child')).to.have.text('Finish');
      });

      it('changes the status to finished', () => {
        component.find('button:first-child').simulate('click');
        expect(state).to.eql({ status: 'finished' });
      });

      it('renders the Pause button', () => {
        expect(component.find('button:last-child')).to.have.text('Pause');
      });

      it('changes the status to paused', () => {
        component.find('button:last-child').simulate('click');
        expect(state).to.eql({ status: 'paused' });
      });
    });

    describe('when status is finished', () => {
      beforeEach(() => component = renderTaskStatus('finished') );

      it('renders the Deliver button', () => {
        expect(component.find('button')).to.have.text('Deliver');
      });

      it('changes the status to delivered', () => {
        component.find('button').simulate('click');
        expect(state).to.eql({ status: 'delivered' });
      });
    });

    describe('when status is delivered', () => {
      beforeEach(() => component = renderTaskStatus('delivered') );

      it('renders the Accept button', () => {
        expect(component.find('button:first-child')).to.have.text('Accept');
      });

      it('changes the status to accepted', () => {
        component.find('button:first-child').simulate('click');
        expect(state).to.eql({ status: 'accepted' });
      });

      it('renders the Reject button', () => {
        expect(component.find('button:last-child')).to.have.text('Reject');
      });

      it('changes the status to rejected', () => {
        component.find('button:last-child').simulate('click');
        expect(state).to.eql({ status: 'rejected' });
      });
    });

    describe('when status is paused', () => {
      beforeEach(() => component = renderTaskStatus('paused') );

      it('renders the Restart button', () => {
        expect(component.find('button')).to.have.text('Restart');
      });

      it('changes the status to started', () => {
        component.find('button').simulate('click');
        expect(state).to.eql({ status: 'started' });
      });
    });

    describe('when status is accepted', () => {
      beforeEach(() => component = renderTaskStatus('accepted') );

      it('renders the Accepted button', () => {
        expect(component.find('button')).to.have.text('Accepted');
      });

      it('does not change the status', () => {
        let prevStatus = state.status;
        component.find('button').simulate('click');
        expect(state).to.eql({ status: prevStatus });
      });
    });

    describe('when status is rejected', () => {
      beforeEach(() => component = renderTaskStatus('rejected') );

      it('renders the Restart button', () => {
        expect(component.find('button')).to.have.text('Restart');
      });

      it('changes the status to started', () => {
        component.find('button').simulate('click');
        expect(state).to.eql({ status: 'started' });
      });
    });
  });
});
