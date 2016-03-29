import { renderComponent , expect } from '../test_helper';
import PageTitle from '../../../src/containers/page/page_title';

describe('PageTitle' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(PageTitle, null, { page: { title: 'My Page' } });
  });

  it('renders something', () => {
    expect(component.find('h1')).to.have.text('My Page');
  });
});
