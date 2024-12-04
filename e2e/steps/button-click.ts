import {
	Given,
	When,
	Then
} from '@cucumber/cucumber';

Given('User navigates to the practice application', async function () {
	console.log('one');
});

When('User click on the button', async function () {
	console.log('two');
});

Then('Count should increment', async function () {
	console.log('three');
});
