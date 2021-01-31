export class TodoPage{

    navigate(){
        cy.visit('https://todomvc-app-for-testing.surge.sh/')
    }
    addTodo(todoText){
        cy.get('.new-todo').type(todoText + "{enter}")
    }

    toggleTodo(todoIndex){
        cy.get(`.todo-list li:nth-child(${todoIndex + 1 }) .toggle`).click()
    }

    validateTodoText(todoIndex, expectedText){
        cy.get(`.todo-list li:nth-child(${todoIndex + 1 }) label`).should('have.text', expectedText)
    }

    validateTodoCompletedState(todoIndex, shouldBeCompleted){
        
        const l = cy.get(`.todo-list li:nth-child(${todoIndex + 1 }) label`)

        l.should(`${shouldBeCompleted ? '' : 'not.'}have.css`, 'text-decoration-line', 'line-through')
    }

    validateNumberOfTodoShow(expectedNumberOfTodoShow){
        cy.get('.todo-list li').should('have.length', expectedNumberOfTodoShow)
    }

    showOnlyCompletedTodos(){
        cy.contains('Completed').click()
    }
    showOnlyActiveTodos(){
        cy.contains('Active').click()
    }
    showOnlyAllTodos(){
        cy.contains('All').click()
    }
    clearCompleted(){
        cy.contains('Clear completed').click()
    } 
}
//fonction exportable
// export function navigate(){
//     cy.visit('https://todomvc-app-for-testing.surge.sh/')
// }