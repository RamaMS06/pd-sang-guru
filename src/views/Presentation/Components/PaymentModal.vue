<script setup>
import { ref } from "vue";

defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["close", "submit"]);

const fileInput = ref(null);

const uploadedFile = ref(null);

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleUpload = (event) => {
  const file = event.target.files[0];

  if (file) {
    uploadedFile.value = file;
  }
};

const handleSubmit = () => {
  if (uploadedFile.value) {
    emit("submit", uploadedFile.value);
    emit("close");
    uploadedFile.value = null;
  }
};

const closeModal = () => {
  emit("close");
  uploadedFile.value = null;
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
          <span style="font-size: 18px; font-weight: 600"
            >QRIS by Midas Cafetaria with BRI
          </span>
          <div style="gap: 12px; display: flex; align-items: center">
            <img
              src="@/assets/img/midas-thaitea.jpeg"
              height="25px"
              width="25px"
              style="border-radius: 5px"
            />
            <img
              src="https://i.pinimg.com/originals/ed/5d/c0/ed5dc0372ad7948f2ba04a88f125cc4e.png"
              height="35px"
            />
          </div>
        </div>
        <span style="font-size: 14px; font-weight: 300">
          Silahkan scan QR Code dibawah dengan Aplikasi Pembayaran pilihan Anda.
        </span>
      </div>

      <div
        class="modal-body my-5"
        style="
          align-items: center;
          justify-content: center;
          display: flex;
          flex-direction: column;
        "
      >
        <img src="/qris-merchant.png" />

        <div
          style="
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
          "
          class="px-6"
        >
          <div class="upload-container mt-6" v-on:click="triggerFileInput">
            <input
              type="file"
              class="file-input"
              ref="fileInput"
              accept="image/*"
              @change="handleUpload"
            />
            <span class="upload-text"> Upload Bukti Transfer </span>
          </div>
          <div v-if="uploadedFile">
            <span style="font-size: 14px; font-weight: 400">
              Bukti Transfer
              <span style="font-weight: 600">{{ uploadedFile.name }}</span>
              berhasil diupload!
            </span>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button class="cancel-button" @click="closeModal">Cancel</button>
        <button
          class="select-button"
          @click="handleSubmit"
          :disabled="!uploadedFile"
        >
          Submit
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
