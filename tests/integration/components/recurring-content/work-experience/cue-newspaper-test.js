import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('recurring-content/work-experience/cue-newspaper', 'Integration | Component | recurring content/work experience/cue newspaper', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{recurring-content/work-experience/cue-newspaper}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#recurring-content/work-experience/cue-newspaper}}
      template block text
    {{/recurring-content/work-experience/cue-newspaper}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
