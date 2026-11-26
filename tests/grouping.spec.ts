import {test} from "@playwright/test"

//if i want to group the test cases - i can use test.describe - inside the describe i can group the test

test.describe('group 1', ()=>{

   test('test 1', async ({page}) =>{
    console.log('test 1')
})

test('test 2', async ({page}) =>{
    console.log('test 2')
})
})

test.describe('group 2', ()=>{
    test('test 3', async ({page}) =>{
    console.log('test 3')
})

test('test 4', async ({page}) =>{
    console.log('test 4')
})
})