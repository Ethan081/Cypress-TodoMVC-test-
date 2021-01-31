///<reference types="cypress" />
//------------------------------------------------------------------------
//Test + Validations
//------------------------------------------------------------------------

/*it('should be able to add a new todo to the list', () => {
    cy.visit('https://todomvc-app-for-testing.surge.sh/')

    cy.get('.new-todo', {timeout: 6000}).type("Clean room{enter}")

    cy.get('label').should('have.text', 'Clean room')

    cy.get('.toggle').should('not.be.checked')

    cy.get('.toggle').click()
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    

    cy.contains('Clear completed').click()
    cy.get('.todo-list').should('not.have.descendants', 'li')
});
*/
//------------------------------------------------------------------------
//Grouping Tests witch Mocha
//------------------------------------------------------------------------
/*
describe('todo actions', () => {
    beforeEach(() => {
        cy.visit('https://todomvc-app-for-testing.surge.sh/')
    
        cy.get('.new-todo', {timeout: 6000}).type("Clean room{enter}")
    })

    it('should add a new todo to the list', () => {
        
        cy.get('label').should('have.text', 'Clean room')
        cy.get('.toggle').should('not.be.checked')
    });
    
    it('should mark todo as completed', () => {
        cy.get('.toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    });
    
    it('should clear completed todos', () => {
        cy.get('.toggle').click()
        cy.contains('Clear completed').click()
        cy.get('.todo-list').should('not.have.descendants', 'li')
    });
});
*/
//------------------------------------------------------------------------
//Page Objects
//------------------------------------------------------------------------
import { TodoPage } from "../page-objects/todo-page";
import { navigate } from "../page-objects/todo-page";


describe('todo actions', () => {

    const todoPage = new TodoPage();

    beforeEach(() => {

        navigate();
        
        todoPage.addTodo('Clear room');
    })

    it('should add a new todo to the list', () => {
        
        todoPage.validateTodoText(0, 'Clear room');
          
        //cy.get('.toggle').should('not.be.checked')
        todoPage.validateTodoCompletedState(0, false)
    });
    
    it('should mark todo as completed', () => {
        //cy.get('.toggle').click()
        todoPage.toggleTodo(0)

        //cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
        todoPage.validateTodoCompletedState(0, true)
    });
    
    it('should clear completed todos', () => {
        //cy.get('.toggle').click()
        todoPage.toggleTodo(0)

        //cy.contains('Clear completed').click()
        todoPage.clearCompleted()

        //cy.get('.todo-list').should('not.have.descendants', 'li')
        todoPage.validateNumberOfTodoShow(0)
    });
});
