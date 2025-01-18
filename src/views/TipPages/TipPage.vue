<script setup>
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";

const tips1 = [
  "Perhatikan kondisi fisik, hewan kurban yang sehat memiliki bulu yang bersih, tubuh yang gemuk (tidak kurus), muka cerah, nafsu makan baik, lincah, suhu 37 derajat celcius dan tidak demam.",
  "Perhatikan bagian-bagian lubang hewan kurban seperti mata, hidung, telinga, mulut, dan anus. perhatikan, apakah ada cairan darah atau lendir. Jika ada, maka hewan kurban tersebut butuh diperiksakan kesehatan lebih lanjut.",
  "Periksa kotoran hewan kurban yang hendak dibeli. Jika padat, maka sehat. Jika cair, hewan tersebut kemungkinan sedang mengalami sakit.",
];

const hadist = [
  "Buta sebelah dan jelas sekali kebutaannya",
  "Sakit dan tampak jelas  sakitnya",
  "Pincang dan tampak jelas pincangnya",
  "Sangat kurus sampai-sampai tidak punya sumsum tulang.”(Dikeluarkan oleh yang lima (empat penulis kitab sunan ditambah dengan Imam Ahmad)",
];

const umur = [
  "Domba: Sekurang-kurangannya berumur satu tahun, atau telah berganti gigi (musinnah).",
  "Kambing: Sekurang-kurangnya berumur dua tahun, dan telah memasuki tahun ketiga.",
  "Sapi atau kerbau: Sekurang-kurangnya berumur lima tahun, dan telah mulai memasuki umur ke-6.",
  "Untuk mengetahui sekilas usia hewan kurban, Sahabat dapat melihat giginya sudah tanggal atau belum. Jika belum, berarti belum dewasa dan belum layak untuk disembelih sebagai hewan kurban.",
];
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0 mb-6">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>

    <div
      style="
        margin-top: 8rem;
        display: block;
        text-align: center;
        display: flex;
        flex-direction: column;
        font-weight: 600;
      "
    >
      <span class="text-dark text-title" style="font-size: 25px"
        >Tips Memilih Hewan Kurban Terbaik dan Bebas PMK</span
      >
      <span
        class="text-success text-title mt-1"
        style="font-weight: 500; font-size: 18px"
      >
        PD. Sang Guru
      </span>
      <img
        class="image-tip mt-4"
        src="https://pustaka.setjen.pertanian.go.id/images/gambar_berita/2021/Juli/IMG-20210707-WA0023.jpg"
      />
    </div>
    <div
      class="mt-6 text-title"
      style="display: flex; flex-direction: column; color: black"
    >
      <span class="title-tip text-success">#Tips</span>

      <span class="text-dark mb-2" style="font-size: 15px">
        Hewan yang dikurbankan tentulah harus sehat. Hewan yang sakit memiliki
        kemungkinan membawa penyakit di dalam dagingnya. Berikut ini adalah cara
        memilih hewan kurban yang sehat:
      </span>
      <div
        v-for="(data, index) in tips1"
        :key="index"
        class="mt-2"
        style="font-size: 14px"
      >
        <span class="text-dark" style="text-align: justify">
          <span class="text-success" style="font-weight: 700">
            {{ index + 1 }}.
          </span>
          {{ data }}
        </span>
      </div>
      <br />

      <span class="title-tip text-success"
        >#Hadist (H.R Tirmidzi dan Ibnu Hibban)</span
      >

      <span class="text-dark mb-2" style="font-size: 15px">
        Dari Al Bara' bin 'Azib radhiyallahu 'anhuma, ia berkata, “Rasulullah
        shallallahu 'alaihi wa sallam pernah berdiri di tengah-tengah kami dan
        berkata, “Ada empat cacat yang tidak dibolehkan pada hewan kurban:
      </span>
      <div
        v-for="(data, index) in hadist"
        :key="index"
        class="mt-2"
        style="font-size: 14px"
      >
        <span class="text-dark" style="text-align: justify">
          <span class="text-success" style="font-weight: 700">
            {{ index + 1 }}.
          </span>
          {{ data }}
        </span>
      </div>

      <span class="title-tip text-success mt-4">#Tidak Cacat</span>
      <span class="text-dark" style="font-size: 15px">
        Selain kesehatan fisik, tips memilih hewan kurban juga memperhatikan
        apakah hewan kurban memiliki kecacatan atau tidak. Pastikan hewan
        tersebut tidak pincang, tidak buta, telinga dalam keadaan yang baik
        (namun ulama telah bersepakat, jika di telinga terdapat bekas eartag
        atau penanda lain, maka dianggap bukan kecacatan).
        <br />
        <br />
        Hewan yang akan dikurbankan, disarankan berjenis kelamin jantan. Hewan
        betina dipertahankan untuk mengendalikan populasi. Pada hewan jantan,
        pastikan hewan kurban tidak dikebiri. Testis atau buah zakarnya masih
        lengkap dua buah, dan letaknya simetris.
      </span>

      <span class="title-tip text-success mt-4">#Cukup Umur</span>

      <span class="text-dark mb-2" style="font-size: 15px">
        Memilih hewan kurban sesuai syariat Islam yang sah untuk disembelih,
        harus telah cukup umur. Dilarang hukumnya menyembelih hewan yang kurang
        usia. Berikut ini daftar usia hewan kurban yang boleh disembelih:
      </span>
      <div
        v-for="(data, index) in umur"
        :key="index"
        class="mt-2"
        style="font-size: 14px"
      >
        <span class="text-dark" style="text-align: justify">
          <span class="text-success" style="font-weight: 700">
            {{ index + 1 }}.
          </span>
          {{ data }}
        </span>
      </div>
      <span class="text-dark mb-1" style="font-size: 15px; margin-top: 22px">
        Diriwayatkan dari Jabir radhiyallahu 'anhu, ia berkata, “Rasulullah
        shallallahu 'alaihi wa sallam bersabda, 'Janganlah kalian menyembelih
        kecuali musinnah. Kecuali jika terasa sulit bagi kalian, maka
        sembelihlah jadza'ah dari domba'.”(Hadis Riwayat Muslim no. 1963).
      </span>

      <span class="title-tip text-success mt-4">#Kebersihan</span>
      <span class="text-dark" style="font-size: 15px">
        Selain memeriksa hewan kurban dari kondisi tubuh, perhatikan juga
        kondisi dan kebersihan lokasi tempat penjualan hewan kurban. Periksa,
        apakah terdapat tumpukan kotoran yang tidak dibersihkan. Apakah lokasi
        penjualan banyak sampah berserakan, dan cenderung jorok? Kondisi
        lingkungan tempat hewan kurban tinggal juga akan mempengaruhi kesehatan
        mereka.
      </span>
    </div>

    <div class="mt-4">
      <em
        >source:
        <a
          href="https://www.dompetdhuafa.org/tips-memilih-hewan-kurban/"
          target="_blank"
          >https://www.dompetdhuafa.org/tips-memilih-hewan-kurban/</a
        ></em
      >
    </div>
  </div>
</template>

<style lang="scss">
.title-tip {
  font-weight: 600;
  font-size: 22px;
}

.image-tip {
  height: 25%;
  width: 45%;
  border-radius: 16px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out forwards;
}

.profile-name,
.profile-year {
  animation: fadeIn 1s ease-in-out forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.grid-profile {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  &__item {
    display: flex;
    flex-direction: column;

    &--title {
      font-weight: 600;
      font-size: 24px;

      animation: slideInFromLeft 0.5s ease-in-out forwards;
    }
  }

  &--desc {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    animation: slideInFromLeft 1.5s ease-in-out forwards;
  }

  @keyframes slideInFromLeft {
    from {
      transform: translateX(-10%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
}
</style>
