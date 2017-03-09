import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('svg/icon-tag', 'Integration | Component | svg/icon tag', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{svg/icon-tag}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#svg/icon-tag}}
      template block text
    {{/svg/icon-tag}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
