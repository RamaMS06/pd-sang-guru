<script setup>
const testimonies = [
  {
    name: "dewa prasetya",
    rating: 5,
    desc: "Sapi nya bagus bagus...ga diragukan pokoknya kalo buat kurban",
    ulasan: 3,
    tahun: "5 Bulan",
  },
  {
    name: "Darno Aja 2003",
    rating: 4,
    desc: "Lokasi mudah ditemui.lokasi kandang sapi nya bagus,bersih,pak haji ny juga ramah",
    ulasan: 4,
    tahun: "2 Tahun",
  },
  {
    name: "Muhammad Kiki afrizal",
    rating: 5,
    desc: "Sangat cocok untuk berbelanja hewan kurban",
    ulasan: 8,
    tahun: "2 Tahun",
  },
  {
    name: "Ananda Nabiel",
    rating: 5,
    desc: "tempat yg cocok buat beli sapi",
    ulasan: 69,
    tahun: "4 Tahun",
  },
  {
    name: "kasyfil aziz",
    rating: 5,
    desc: "Menjual sapi langsung di kandangnya mantul",
    ulasan: 41,
    tahun: "5 Tahun",
  },
  {
    name: "Ahmad Daroji",
    rating: 5,
    desc: "Sangat baik",
    ulasan: 3,
    tahun: "10 Bulan",
  },
  {
    name: "syamil mudzaka",
    rating: 4,
    desc: "Musholanya pas bagi yg sdg safar.",
    ulasan: 20,
    tahun: "5 Tahun",
  },
  {
    name: "Sliteracy54",
    rating: 5,
    desc: "Lingkungan sangat bersih dan nyaman",
    ulasan: 59,
    tahun: "5 Tahun",
  },
  {
    name: "paryo apriadi",
    rating: 5,
    desc: "Bagus dan ramah",
    ulasan: 59,
    tahun: "5 Tahun",
  },
];
</script>

<template>
  <section class="py-2 mt-6 text-title">
    <div class="container">
      <div class="row">
        <div style="display: flex; justify-content: center; width: 100%">
          <img class="ayat mb-5" src="/ayat.png" style="object-fit: cover" />
        </div>
        <span
          class="mb-6 mx-auto text-center text-title"
          style="
            display: flex;
            justify-content: center;
            text-align: center;
            white-space: pre-line;
            color: black;
            font-size: 16px;
          "
        >
          “Allah tidak akan menerima daging-daging dan darah-darah hewan qurban
          <br />
          mereka akan tetapi yang Allah terima adalah ketaqwaan dari kalian (QS.
          Al-Hajj : 37).”</span
        >
        <div
          class="mt-5 mx-2 mb-3 text-title"
          style="display: flex; flex-direction: column"
        >
          <span style="color: black; font-size: 24px; font-weight: 600">
            Testimoni & Rating
          </span>
          <span>
            Testimoni pengunjung dan pelanggan PD. Sang Guru
            <a
              href="https://www.google.com/search?q=pd+sang+guru&oq=pd+sang+guru&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQIxgnMgoIAhAAGAoYFhgeMgoIAxAAGIAEGKIEMgoIBBAAGIAEGKIEMgYIBRBFGD0yBggGEEUYPDIGCAcQRRg90gEIMjU1N2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x2e69f9bd049c3bab:0xd5fa6ce1c0650ca5,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              style="text-decoration: underline"
            >
              (Ulasan Google)
            </a>
          </span>
        </div>

        <div class="testimoni text-title">
          <div
            class="testimoni__item"
            v-for="(testinmoni, id) in testimonies"
            :key="id"
          >
            <div class="testimoni__item__header">
              <div class="testimoni__item__header--avatar">
                {{ testinmoni.name.charAt(0).toUpperCase() }}
              </div>

              <div style="display: flex; flex-direction: column">
                <span style="font-size: 14px; color: white">
                  {{ testinmoni.name }}
                </span>
                <span style="font-size: 12px; color: white">
                  {{ testinmoni.ulasan }} Ulasan
                </span>
              </div>
            </div>
            <div class="testimoni__item__rating my-2">
              <span
                v-for="star in 5"
                :key="star"
                class="star"
                :style="{
                  color: star <= testinmoni.rating ? '#fdd835' : 'white',
                }"
              >
                ★
              </span>
              <span style="color: white; font-size: 12px; margin-left: 10px">
                {{ testinmoni.tahun }} Lalu</span
              >
            </div>
            <span style="color: white; font-size: 14px">
              {{ testinmoni.desc }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <hr class="horizontal dark my-5" />
    <div class="footer-container">
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 6px;
          color: black;
          font-size: 14px;
        "
      >
        <span class="text-title">Follow Us</span>
        <div style="display: flex; gap: 16px">
          <!-- <a href="https://www.facebook.com/MidasThaiTea">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png"
              height="35px"
              alt="Logo"
            />
          </a> -->
          <a href="https://www.instagram.com/pdsangguru/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png"
              height="35px"
              alt="Logo"
            />
          </a>
        </div>
      </div>
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 6px;
          color: black;
          font-size: 14px;
        "
      >
        <span class="text-title">Pembayaran</span>
        <div class="payments">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/58/Logo_Bank_Mandiri_Taspen.png"
            height="55px"
            alt="Logo"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.footer-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 75px;
  grid-gap: 10px;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
}

.facebook,
.instagram {
  cursor: pointer;
}

.payments {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.ayat {
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
}

.testimoni {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  &__item {
    background-color: #2c3e50;
    border-radius: 10px;
    padding: 15px;
    margin: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

    &__header {
      display: flex;
      align-items: center;
      gap: 10px;

      &--avatar {
        border-radius: 100px;
        height: 35px;
        width: 35px;
        text-align: center;
        color: white;
        background-color: green;
        align-content: center;
        font-weight: 600;
      }
    }
  }
}
</style>
