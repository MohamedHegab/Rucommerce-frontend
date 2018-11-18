import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | list products', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('should show products as the home page', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/products', 'should redirect automatically');
  });

  test('should link to information about the application.', async function (assert) {
    await visit('/');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });

  test('should link to contact information.', async function (assert) {
    await visit('/');
    await click(".menu-contact");
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });

  // test('should list available products.', async function (assert) {
  // });

  // test('should filter the list of products by product name.', async function (assert) {
  // });

  // test('should filter the list of products by promotion code.', async function (assert) {
  // });

  // test('should filter the list of products by department.', async function (assert) {
  // });

  // test('should show details for a selected product', async function (assert) {
  // });
});
