import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ThePINInput from '../src/components/ThePINInput.vue'

describe('component ThePINInput.vue', () => {
  it('should render', async () => {
    const wrapper = mount(ThePINInput, { props: { length: 5, modelValue: '12345' } })

    await nextTick()

    expect(wrapper.findAll('input[type="tel"]').length).toBe(5)
  })

  it('should be interactive', async () => {
    const wrapper = mount(ThePINInput, { props: { length: 5, modelValue: '12345' } })

    await nextTick()

    expect(wrapper.findAll('input[type="tel"]').length).toBe(5)
  })
})
