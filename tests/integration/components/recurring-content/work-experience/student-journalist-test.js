import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('recurring-content/work-experience/student-journalist', 'Integration | Component | recurring content/work experience/student journalist', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{recurring-content/work-experience/student-journalist}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#recurring-content/work-experience/student-journalist}}
      template block text
    {{/recurring-content/work-experience/student-journalist}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
