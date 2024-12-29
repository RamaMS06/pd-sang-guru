<script setup>
import { ref } from "vue";

defineProps({
  isOpen: Boolean,
  totalPayment: Number,
});

const emit = defineEmits(["close", "submit"]);

const uploadedFile = ref(null);

const handleSubmit = () => {
  emit("submit", uploadedFile.value);
  emit("close");
  uploadedFile.value = null;
};

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0, // Removes decimals
});

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
          <div style="display: flex; flex-direction: column">
            <span style="font-size: 18px; font-weight: 600"
              >Bank Transfer PD.Sang Guru
            </span>
            <span style="font-size: 12px; font-weight: 300">
              <span style="color: red">*</span>
              Setelah transfer, upload bukti ke WhatsApp PD. Sang Guru
            </span>
          </div>
          <div style="gap: 12px; display: flex; align-items: center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/58/Logo_Bank_Mandiri_Taspen.png"
              height="35px"
            />
          </div>
        </div>
      </div>
      <div class="modal-body my-4">
        <div style="display: flex; flex-direction: column; align-items: center">
          <span style="font-size: 18px; color: black; font-weight: 600">
            Bpk. H Ambri</span
          >
          <span style="font-size: 16px; color: black; font-weight: 400">
            Mandiri Taspen - 2052809857411
          </span>
        </div>

        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 16px;
          "
        >
          <span style="font-size: 12px; color: green"> Total Bayar </span>
          <span style="font-size: 28px; font-weight: 600">
            {{ formatter.format(totalPayment) }}
          </span>
        </div>
      </div>

      <div class="modal-footer">
        <button class="cancel-button" @click="closeModal">Batal</button>
        <button class="select-button" @click="handleSubmit">Pesan</button>
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
