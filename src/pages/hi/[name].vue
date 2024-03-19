<script setup lang="ts">
const router = useRouter()
const route = useRoute('/hi/[name]')
const user = useUserStore()
const { t } = useI18n()
const [isSceretMode] = useToggle(false)

function onCompleted(val: string) {
  // eslint-disable-next-line no-alert
  val !== '12345' && window.alert(val)
}

watchEffect(() => {
  user.setNewName(route.params.name)
})
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-pedestrian inline-block />
    </div>
    <p>
      {{ t('intro.hi', { name: user.savedName }) }}
    </p>

    <p mb-5 text-sm opacity-75>
      <em>{{ t('intro.pin-input') }}</em>
    </p>

    <ThePINInput model-value="12345" :length="5" :secure="isSceretMode" :blur-on-complete="true" text-sm opacity-75 @completed="onCompleted" />

    <button
      m="3 t6" text-sm btn
      @click="isSceretMode = !isSceretMode"
    >
      Sceret Mode: {{ isSceretMode ? 'On' : 'Off' }}
    </button>

    <template v-if="user.otherNames.length">
      <p mt-4 text-sm>
        <span opacity-75>{{ t('intro.aka') }}:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <RouterLink :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </RouterLink>
          </li>
        </ul>
      </p>
    </template>

    <div>
      <button
        m="3 t6" text-sm btn
        @click="router.back()"
      >
        {{ t('button.back') }}
      </button>
    </div>
  </div>
</template>
