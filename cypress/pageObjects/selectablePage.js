export class SelectablePage {
  static visit() {
    cy.visit('https://demoqa.com/selectable');
  }

  static get gridTab() {
    return cy.get('#demo-tab-grid');
  }

  static get row1Items() {
    return cy.get('#row1 .list-group-item');
  }

  static get row2Items() {
    return cy.get('#row2 .list-group-item');
  }

  static get row3Items() {
    return cy.get('#row3 .list-group-item');
  }

  static clickGridTab() {
    this.gridTab.click();
  }

  static clickItemInRow(rowNumber, itemText) {
    if (rowNumber === 1) {
      this.row1Items.contains(itemText).click();
    } else if (rowNumber === 2) {
      this.row2Items.contains(itemText).click();
    } else if (rowNumber === 3) {
      this.row3Items.contains(itemText).click();
    }
  }

  static validateHighlightedItems(expectedItems) {
    expectedItems.forEach(item => {
      cy.get('.list-group-item.active').contains(item).should('have.class', 'active');
    });
  }
  
  static validateNonHighlightedItems(nonHighlightedItems) {
    nonHighlightedItems.forEach(item => {
      cy.get('.list-group-item').contains(item).should('not.have.class', 'active');
    });
  }
}