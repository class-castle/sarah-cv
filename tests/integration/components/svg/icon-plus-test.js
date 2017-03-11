import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('svg/icon-plus', 'Integration | Component | svg/icon plus', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{svg/icon-plus}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#svg/icon-plus}}
      template block text
    {{/svg/icon-plus}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
