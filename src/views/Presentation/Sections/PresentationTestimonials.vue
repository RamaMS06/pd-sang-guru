<template>
  <section class="py-2 mt-6 text-title">
    <div class="container">
      <div class="row">
        <div
          v-motion-fade-visible
          style="display: flex; justify-content: center; width: 100%"
        >
          <img class="ayat mb-5" src="/ayat.png" style="object-fit: cover" />
        </div>
        <span
          v-motion-fade-visible
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
      </div>
    </div>

    <div class="mt-5" style="text-align: center">
      <span class="text-title" style="color: black; font-weight: 600"
        >Alamat PD. Sang Guru</span
      >
      <div
        style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
        "
        class="mt-2"
      >
        <span>
          JL KH. Hasyim Ashari Gang Jambu, No. 38, Cipondoh, RT.006/RW.004,
          <br />Gondrong, Kec. Tangerang, Kota Tangerang, Banten 15146<br />
          <a href="https://maps.app.goo.gl/qFrJWJvA9ashkGBP6">
            <span style="text-decoration: underline; font-style: italic"
              >https://maps.app.goo.gl/qFrJWJvA9ashkGBP6</span
            >
          </a>
        </span>

        <img v-motion-slide-top class="img-maps" src="/alamat-maps.png" />
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
          <a
            href="https://www.instagram.com/pdsangguruu01?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
          >
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
  display: flex;
  justify-content: space-evenly;
  grid-auto-rows: 75px;
  grid-gap: 10px;

  @media (max-width: 768px) {
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

.img-maps {
  width: 80%;
  height: 80%;
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border: 2px solid #ddd;
}
</style>
