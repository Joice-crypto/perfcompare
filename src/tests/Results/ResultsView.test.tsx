import CompareResultsView from '../../components/CompareResults/CompareResultsView';
import { setSelectedRevisions } from '../../reducers/SelectedRevisions';
import getTestData from '../utils/fixtures';
import { render, store } from '../utils/setupTests';
import { screen } from '../utils/test-utils';

describe('Results View', () => {
  it('Should match snapshot', () => {
    render(<CompareResultsView />);

    expect(document.body).toMatchSnapshot();
  });

  it('should display SelectedRevisionsTable if there are selected revisions', async () => {
    const { testData } = getTestData();

    // start with four selected revisions
    const selectedRevisions = testData.slice(0, 4);
    store.dispatch(setSelectedRevisions(selectedRevisions));

    render(<CompareResultsView />);

    expect(screen.getByText("you've got no arms left!")).toBeInTheDocument();
  });
});
