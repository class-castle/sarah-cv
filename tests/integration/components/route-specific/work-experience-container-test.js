import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('route-specific/work-experience-container', 'Integration | Component | route specific/work experience container', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{route-specific/work-experience-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#route-specific/work-experience-container}}
      template block text
    {{/route-specific/work-experience-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
