<script setup>
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";

const testimonies = [
  {
    name: "Budi",
    address: "Jakarta Selatan",
    desc: "Saya sangat puas dengan pengalaman membeli hewan qurban di Bpk. H. Ambri. Dari awal, saya sudah merasakan pelayanan yang ramah dan profesional. Hewan qurban yang saya pilih, sapi, dalam kondisi sangat sehat dan terawat. Kandangnya bersih dan rapi, menunjukkan bahwa pemiliknya sangat memperhatikan kesejahteraan hewan. Proses pemilihan pun sangat mudah, dengan berbagai pilihan yang tersedia. Pada hari H, sapi yang saya beli juga terlihat kuat dan siap untuk disembelih. Terima kasih PD. Sang Guru atas layanan yang luar biasa! Saya pasti akan kembali tahun depan.",
  },
  {
    name: "Siti Farida",
    address: "Tangerang Selatan",
    desc: "Setiap tahun, keluarga kami selalu berkurban, dan tahun ini kami memilih PD. Sang Guru sebagai tempat membeli hewan qurban. Dari awal hingga akhir, pengalaman kami sangat memuaskan. Stafnya sangat membantu dalam menjelaskan berbagai pilihan hewan qurban yang tersedia. Kami memilih kambing yang sehat dan aktif. Yang paling saya apresiasi adalah kebersihan kandang dan perhatian mereka terhadap kesehatan hewan. Pada saat penyembelihan, semua berjalan lancar dan sesuai syariat. Kami merasa tenang karena tahu hewan kami dirawat dengan baik sebelum hari qurban tiba. Sangat direkomendasikan!",
  },
  {
    name: "Ahmad",
    address: "Tangerang",
    desc: "Sebagai seorang pengusaha yang sibuk, saya mencari tempat yang dapat dipercaya untuk membeli hewan qurban tanpa harus repot. PD. Sang Guru adalah pilihan tepat! Mereka memiliki layanan pemesanan online yang sangat memudahkan. Saya memilih seekor sapi brahmana tipe A+ dari katalog mereka dan sangat terkesan dengan kualitasnya. Sapi tersebut tidak hanya sehat tetapi juga memiliki ukuran yang ideal untuk qurban. Selain itu, proses pengiriman ke lokasi kami juga sangat cepat dan efisien. Terima kasih PD. Sang Guru atas pelayanan yang memudahkan kami dalam menjalankan ibadah qurban!",
  },
  {
    name: "Roni",
    address: "Lampung",
    desc: "Tahun ini adalah kali pertama saya berkurban dan saya memilih PD. Sang Guru berdasarkan rekomendasi teman. Pengalaman saya sungguh luar biasa! Dari saat saya datang ke peternakan, saya langsung disambut dengan hangat oleh pemiliknya yang menjelaskan semua hal tentang hewan qurban. Saya memilih kambing yang sangat sehat dengan bulu yang bersih dan cerah. Saya juga diperlihatkan cara perawatan hewan sebelum hari penyembelihan. Pada hari H, semua berjalan lancar dan teratur. Saya merasa sangat puas dan bersyukur bisa berkurban dengan cara yang baik.",
  },
  {
    name: "Farhan",
    address: "Serang",
    desc: "Setiap tahun kami berkurban di keluarga besar kami, dan tahun ini kami memutuskan untuk mencoba PD. Sang Guru. Dari awal hingga akhir, semuanya berjalan dengan baik! Kami membeli dua ekor sapi untuk dibagikan kepada keluarga dan tetangga. Kualitas sapi-sapi tersebut benar-benar luar biasa; mereka terlihat sehat dan bertenaga. Yang membuat kami terkesan adalah bagaimana mereka menjaga kebersihan kandang serta memberi perhatian khusus pada setiap hewan. Pada saat penyembelihan, semua prosedur dilakukan dengan baik sesuai syariat Islam. Kami merasa bangga bisa berkontribusi dalam ibadah qurban dengan hewan dari PD. Sang Guru.",
  },
];

const testimoniesGoogle = [
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
  <div class="container position-sticky z-index-sticky top-0 mb-6 text-title">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>

    <div
      v-motion-slide-left
      style="
        margin-top: 5rem;
        display: block;
        display: flex;
        flex-direction: column;
        font-weight: 600;
      "
    >
      <span class="text-success title-pakan mt-5">#Tanggapan Mereka</span>
      <span class="text-dark mb-1" style="font-size: 14px; font-weight: 300">
        Berikut adalah beberapa testimoni dari pelanggan kami yang puas dengan
        layanan PD. Sang Guru. Mereka telah berbagi pengalaman positif mereka
        dalam membeli hewan qurban dari kami, mulai dari kualitas hewan yang
        sehat hingga pelayanan yang ramah dan profesional.
      </span>

      <div v-motion-slide-top class="testimoni--pelanggan__wrapper">
        <div
          class="testimoni--pelanggan__wrapper--item"
          v-for="(item, index) in testimonies"
          :key="index"
        >
          <div
            class="text-dark mb-2"
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <div style="display: flex; align-items: center; gap: 4px">
              <div
                class="nav-icon material-icons opacity-6 text-md"
                style="color: black"
              >
                account_circle
              </div>
              <span>{{ item.name }} </span>
            </div>
            <div style="display: flex; gap: 4px; align-items: center">
              <div
                class="nav-icon material-icons opacity-6 text-md"
                style="color: red"
              >
                location_on
              </div>
              <span style="font-size: 10px">{{ item.address }}</span>
            </div>
          </div>
          <span class="text-dark" style="font-size: 12px; font-weight: 300">{{
            item.desc
          }}</span>
        </div>
      </div>

      <span class="text-success title-pakan mt-5">#Foto Testimoni</span>
      <span class="text-dark mb-1" style="font-size: 14px; font-weight: 300">
        Berikut adalah beberapa foto testimoni dari pelanggan kami yang puas
        dengan layanan PD. Sang Guru. Foto-foto ini menunjukkan momen-momen
        berharga saat pelanggan kami menerima hewan qurban mereka, serta kondisi
        hewan yang sehat dan terawat dengan baik.
      </span>
      <div class="testimoni-cover mt-4">
        <div v-for="(data, index) in 3" :key="index">
          <img
            class="testimoni-cover--img"
            :src="`/testimoni${index + 1}.jpeg`"
          />
        </div>
      </div>
    </div>

    <div
      class="mt-5 mb-3 text-title"
      style="display: flex; flex-direction: column"
    >
      <span class="text-success title-pakan">#Ulasan Google</span>
      <span class="text-dark" style="font-size: 14px">
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

    <div class="testimoni--google text-title">
      <div
        class="testimoni--google__item"
        v-for="(testinmoni, id) in testimoniesGoogle"
        :key="id"
        v-motion-slide-top
      >
        <div class="testimoni--google__item__header">
          <div class="testimoni--google__item__header--avatar">
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
        <div class="testimoni--google__item__rating my-2">
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
</template>

<style lang="scss">
.title-tip {
  font-weight: 600;
  font-size: 22px;
}

.testimoni--pelanggan__wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  &--item {
    background-color: white;
    border-radius: 10px;
    padding: 15px;
    margin-top: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
}

.testimoni-cover {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  grid-auto-rows: auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  &--img {
    flex: 1;
    width: 100%;
    height: 16rem;
    border-radius: 16px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }
}

.testimoni--google {
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
