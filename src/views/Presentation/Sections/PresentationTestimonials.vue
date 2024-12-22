<template>
  <section class="py-2">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto text-center">
          <h2 class="mb-0">Sudah di kunjungi oleh</h2>
          <h2 class="text-gradient text-success mb-3">
            1,270 orang pengunjung
          </h2>
          <p class="lead text-title" style="font-size: 18px">
            Midas cafetaria sudah menjadi salah satu tempat makan dan minum
            favorit!
          </p>
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
           <a href="https://www.facebook.com/MidasThaiTea">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png"
                height="35px"
                alt="Logo"
              />
           </a>
            <a href="https://www.instagram.com/Midasth4">
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
          <span class="text-title">Payment with</span>
          <div style="display: flex; gap: 16px">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_BRI.png"
              height="35px"
              alt="Logo"
            />
            <img
              height="35px"
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhvTtjN1Bj37W3jTiire9jlqgP046Je6-JPvIVEMjW6avji3kH1eC5HyUDIY8q1l6z89kidy_XZz4cX7-d_rdSentSrY94naUFcRo-NhiEvMUWmevEbQz-xRdMLUFSr61dHVvbVDq58GmxM0UAIgwnfCak8KWr0wTa0UmmjdUQTTcm2pEd3YjuHtPj9Q/s2161/Logo%20QRIS.png"
              alt="Logo"
            />
          </div>
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
}

.facebook,
.instagram {
  cursor: pointer;
}
</style>
