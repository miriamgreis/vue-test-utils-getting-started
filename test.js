import { createLocalVue,shallowMount } from '@vue/test-utils'
import Component from './components/component'
import SubComponent from './components/subcomponent'
import exampleMixin from './components/exampleMixin'

describe('Component', () => {

  it('shallowMount component and try to get property of mixin', () => {
    const wrapper = shallowMount(Component);

    let subcomponent = wrapper.find(SubComponent);
    console.log(subcomponent.props());
    console.log(subcomponent.attributes());
  })

  it('shallowMount component and try to get property of mixin with global mixin', () => {
    const localVue = createLocalVue()
    localVue.mixin(exampleMixin)

    const wrapper = shallowMount(Component, {localVue})

    let subcomponent = wrapper.find(SubComponent)
    console.log(subcomponent.props())
    console.log(subcomponent.attributes())
  })
})
