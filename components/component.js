// component includes subcomponent and  subcomponent and passes mixin property
import subcomponent from "./subcomponent"

export default {
  template: `
    <div>
      <subcomponent :mixinProperty="true" :subcomponentProperty="true"></subcomponent>
    </div>
  `,
  components: {
    'subcomponent': subcomponent,
  },
}
