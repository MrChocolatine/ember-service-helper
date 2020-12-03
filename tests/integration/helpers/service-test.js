import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, resetOnerror, settled, setupOnerror } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

module('Integration | Helper | service', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register(
      'service:some-service',
      class extends Service {
        init() {
          super.init();

          this.isTrue = true;
          this.fruitType = 'Banana';
        }
      }
    );
  });

  hooks.afterEach(() => void resetOnerror());

  test('it allows you to access a property on a service if it exists', async function (assert) {
    await render(hbs`{{get (service "some-service") "fruitType"}}`);
    assert.dom().hasText('Banana');

    await render(hbs`
      {{if
        (get (service "some-service") "isTrue")
        "I am here"
        "I am not here"
      }}
    `);
    assert.dom().hasText('I am here');

    this.owner.lookup('service:some-service').set('isTrue', false);
    await settled();
    assert.dom().hasText('I am not here');
  });

  test('it throws an error when trying to access a service that does not exist', async function (assert) {
    assert.expect(1);

    setupOnerror((err) => void assert.strictEqual(
      err.message,
      "Assertion Failed: The service 'not-a-service' does not exist"
    ))

    await render(hbs`{{service "not-a-service"}}`)
  })

  test('it can directly get a property from a Service', async function (assert) {
    assert.expect(2);

    await render(hbs`{{service "some-service" "donald"}}`);
    assert.dom().hasNoText();

    this.owner.lookup('service:some-service').set('donald', 'duck');
    await settled();
    assert.dom().hasText('duck');
  })
});
