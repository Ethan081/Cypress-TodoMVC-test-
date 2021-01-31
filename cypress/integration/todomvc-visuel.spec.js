///<reference types="cypress" />


import { TodoPage } from "../page-objects/todo-page";


describe('visual validation', () => {

    const todoPage = new TodoPage();

    before(() => {
        todoPage.navigate()
        //cy.visit('https://todomvc-app-for-testing.surge.sh/?different-title-color')
    })
    beforeEach(() => {
        cy.eyesOpen({appName: 'Tau TodoMVC', batchName: 'Tau TodoMVC Hey!',
        browser: [
            // {name: 'chrome', with: 1024, height: 768},
            // {name: 'chrome', with: 800, height: 600},
            // {name: 'firefox', with: 1024, height: 768},
            {deviceName: 'iphone X'}
        ]
    })
    })
    afterEach(() => {
        cy.eyesClose()
    })

    it('should look good', () => {
        cy.eyesCheckWindow('empty todo list')

        todoPage.addTodo('Clear room')
        todoPage.addTodo('Learn JavaScript')

        cy.eyesCheckWindow('twos todos')

        todoPage.toggleTodo(0)

        cy.eyesCheckWindow('mark as completed')
    });


})