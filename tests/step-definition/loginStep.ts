import { Given, When, Then } from '@cucumber/cucumber';

Given('the user is on the login page', async function () {
    console.log(this.page);
});

When('the user logs in with valid credentials', async function () {
    console.log('step 2');

});

Then('the user should see the home page', async function () {
    console.log('step 3');
});