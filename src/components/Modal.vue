<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const modalRef = ref<HTMLElement | null>(null);

const props = defineProps<{
  isModalOpen: boolean;
  handleModalOpen: (isOpen: boolean) => void;
}>();

onClickOutside(modalRef, () => {
  props.handleModalOpen(false);
});
</script>

<template>
  <div class="modal-overlay" v-if="props.isModalOpen">
    <div class="modal-overlay__modal" ref="modalRef">
      <slot />
    </div>
  </div>
</template>

<style lang="css">
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  transition:
    opacity 0.2s ease,
    visibility 0.2s ease;
}

.modal-overlay__modal {
  background-color: var(--bg);
  border-radius: 8px;
  padding: 20px 15px;
  width: 60%;
  max-width: 60%;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: var(--shadow);
  transform: translateY(-20px);
  transition: transform 0.2s ease;
  position: relative;

  @media (max-width: 480px) {
    width: 95%;
    max-width: 95%;
    max-height: 90%;
  }
}
</style>
