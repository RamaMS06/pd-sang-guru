<script setup>
import { ref } from "vue";

defineProps({
  isOpen: Boolean,
  totalPayment: Number,
});

const emit = defineEmits(["close", "submit"]);

const uploadedFile = ref(null);

const closeModal = () => {
  emit("close");
  uploadedFile.value = null;
};

const goToWhatsapp = (phone) => {
  return window.open(
    `https://wa.me/${phone}?text=Halo PD. Sang Guru, saya ingin bertanya tentang ketersediaan Sapi atau Kambing nya`
  );
};
</script>

<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div
        class="modal-header"
        style="
          display: flex;
          flex-direction: column;
          align-items: start;
          gap: 12px;
        "
      >
        <div
          style="
            display: flex;
            justify-content: space-between;
            width: 100%;
            align-items: center;
          "
        >
          <div style="display: flex; flex-direction: column">
            <span style="font-size: 18px; font-weight: 600"
              >Kontak PD. Sang Guru
            </span>
            <span style="font-size: 12px; font-weight: 300">
              <span style="color: red">*</span>
              Kontak pengurus PD. Sang Guru untuk bantuan
            </span>
          </div>
        </div>
      </div>
      <div class="modal-body my-4">
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
          "
          v-on:click="goToWhatsapp('+628159830040')"
        >
          <span style="font-size: 18px; color: black; font-weight: 600">
            Bpk. H Ambri</span
          >
          <span style="font-size: 16px; color: black; font-weight: 400">
            No. HP: +628159830040
          </span>
        </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
          "
          v-on:click="goToWhatsapp('+6285780878176')"
        >
          <span style="font-size: 18px; color: black; font-weight: 600">
            Ade Depi R.A</span
          >
          <span style="font-size: 16px; color: black; font-weight: 400">
            No. HP: +6285780878176
          </span>
        </div>
      </div>

      <div class="modal-footer">
        <button class="cancel-button" @click="closeModal">Tutup</button>
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
  max-width: 600px;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
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

.upload-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cfd8dc;
  border: 2px dashed #b0bec5; /* Dashed white border */
  border-radius: 10px; /* Rounded corners */
  color: #78909c;
  width: 300px; /* Fixed width */
  height: 45px; /* Fixed height */
  cursor: pointer;
  width: 100%;
  margin-top: 12px;
  margin-bottom: 12px;
  text-align: center;
  &:hover {
    background-color: #45a049;
    color: white;
  }
  transition: background-color 0.3s ease;

  &.success {
    background-color: #45a049;
  }
}
</style>
