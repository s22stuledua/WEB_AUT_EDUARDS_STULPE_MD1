import { SelectablePage } from '../pageObjects/selectablePage';

describe('Selectable Grid Test', () => {
  beforeEach(() => {
    SelectablePage.visit();
  });

  it('should highlight the correct items when clicked', () => {
    SelectablePage.clickGridTab();
    SelectablePage.clickItemInRow(1, 'Two');
    SelectablePage.clickItemInRow(2, 'Four');
    SelectablePage.clickItemInRow(2, 'Six');
    SelectablePage.clickItemInRow(3, 'Eight');
    SelectablePage.validateHighlightedItems(['Two', 'Four', 'Six', 'Eight']);
    SelectablePage.validateNonHighlightedItems(['One', 'Three', 'Five', 'Seven', 'Nine']);
  });
});