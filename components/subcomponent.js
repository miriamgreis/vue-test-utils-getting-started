// subcomponent with mixin
import exampleMixin from './exampleMixin'

export default {
  template: `<div class="subcomponent"></div>`,
  props: ['subcomponentProperty'],
  mixins: [exampleMixin]
}
