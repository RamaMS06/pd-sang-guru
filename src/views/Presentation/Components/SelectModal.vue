<script setup>
import { ref } from "vue";

defineProps({
  isOpen: Boolean,
  items: {
    type: Array,
    default: () => [
      { id: 1, title: "Option 1" },
      { id: 2, title: "Option 2" },
      { id: 3, title: "Option 3" },
    ],
  },
});

const emit = defineEmits(["close", "select"]);
const selectedItem = ref(null);

const handleSelect = () => {
  if (selectedItem.value) {
    emit("select", selectedItem.value);
    emit("close");
    selectedItem.value = null;
  }
};

const closeModal = () => {
  emit("close");
  selectedItem.value = null;
};
</script>

<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h2 class="text-title" style="font-size: 18px">
          Pilih alamat lokasi midas cafe
        </h2>
        <button class="close-button" @click="closeModal">&times;</button>
      </div>

      <div class="modal-body">
        <div v-for="item in items" :key="item.id" class="radio-item">
          <label style="display: flex">
            <input
              class="me-2"
              type="radio"
              :id="'item-' + item.id"
              :value="item"
              v-model="selectedItem"
              name="modal-selection"
            />
            <div>
              <div class="radio__title">
                <span class="radio__title--name">{{ item.name }}</span>
                <span class="radio__title--phone"> | {{ item.phone }}</span>
              </div>
              <span class="radio--desc" :for="'item-' + item.id">{{
                item.desc
              }}</span>
            </div>
          </label>
        </div>
      </div>

      <div class="modal-footer">
        <button class="cancel-button" @click="closeModal">Cancel</button>
        <button
          class="select-button"
          @click="handleSelect"
          :disabled="!selectedItem"
        >
          Select
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
  max-width: 500px;
  color: #213547;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
}

.radio__title {
  &--name {
    font-size: 14px;
    font-weight: 600;
  }
  &--phone {
    font-size: 14px;
  }
}

.radio--desc {
  font-size: 13px;
  font-weight: 300;
  line-height: 8px;
}

.modal-body {
  margin-bottom: 20px;
}

.radio-item {
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

button {
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.select-button {
  background-color: #646cff;
  color: white;
  border: none;
}

.select-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.cancel-button {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
}
</style>
