import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('svg/icon-dash', 'Integration | Component | svg/icon dash', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{svg/icon-dash}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#svg/icon-dash}}
      template block text
    {{/svg/icon-dash}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
