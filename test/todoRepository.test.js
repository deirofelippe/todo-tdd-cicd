const { describe, it, before, afterEach } = require('mocha')
const { expect } = require('chai')
const { createSandbox } = require('sinon')
const TodoRepository = require('../src/todoRepository')

describe('todoRepository', () => {
   let todoRepository
   let sandbox

   before(() => {
      todoRepository = new TodoRepository()
      sandbox = createSandbox()
   })

   afterEach(() => {
      sandbox.restore()
   })

   describe('methods signature', () => {
      it('should call find from lokijs', () => {
         const mockDatabase = [
            {
               name: 'XuxaDaSilva',
               age: 90,
               meta: { revision: 0, created: 1639263839548, version: 0 },
               '$loki': 1
            },
         ]

         const functionName = 'find'
         const expectReturn = mockDatabase
         sandbox.stub(
            todoRepository.schedule,
            functionName
         ).returns(expectReturn)

         const result = todoRepository.list()
         expect(result).to.be.deep.equal(expectReturn)
         expect(todoRepository.schedule[functionName].calledOnce).to.be.ok
      })

      it('should call insertOne from lokijs', () => { })
   })
})

/*
list [
  {
    name: 'XuxaDaSilva',
    age: 90,
    meta: { revision: 0, created: 1639263839548, version: 0 },
    '$loki': 1
  },
  {
    name: 'Joaozinho',
    age: 90,
    meta: { revision: 0, created: 1639263839549, version: 0 },
    '$loki': 2
  }
]
*/
