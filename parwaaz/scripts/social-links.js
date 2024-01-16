document.write(`<style>
    #image2 {
      display: none;
    }

    #image4 {
      display: none;
    }
  </style>
  <!-- <div class="social-links d-flex"> -->
  <div class="social-links position-fixed top-50 start-0 translate-middle-y d-flex border rounded-end">
    <ul class="fixed-links">
      <li class="fixed-link">
        <a href="https://instagram.com/p_e_c_parwaaz?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D">
          <img src="assets/icons/social-icons/instagram.svg" alt="instagram.svg" width="100%">
        </a>
      </li>
      <li class="fixed-link">
        <a href="https://www.facebook.com/PARWAAZ.EDUCATION.CENTER?mibextid=ZbWKwL">
          <img src="assets/icons/social-icons/facebook.svg" alt="facebook.svg" width="100%">
        </a>
      </li>
      <li class="fixed-link">
        <a href="https://www.youtube.com/@ParwaazEducation-cc2wl">
          <img src="assets/icons/social-icons/youtube.svg" alt="youtube.svg" width="100%">
        </a>
      </li>
      <li class="fixed-link">
        <a href="https://www.linkedin.com/company/pec-/">
          <img src="assets/icons/social-icons/linkedin.svg" alt="linkein.svg" width="100%">
        </a>
      </li>
      <li class="fixed-link">
        <a href="https://twitter.com/parwaaz_center?t=GT3lS0S6fgjUBDTy7GHDjg&s=08">
          <img src="assets/icons/social-icons/twitter-x.svg" alt="twitter.svg" width="100%">
        </a>
      </li>
      <li class="fixed-link">
        <a href="https://api.whatsapp.com/send/?phone=9101141608909&text&type=phone_number&app_absent=0">
          <img src="assets/icons/social-icons/whatsapp.svg" alt="whatsapp.svg" width="100%">
        </a>
      </li>
    </ul>
    <div class="toggle-links d-flex align-items-center" onclick="toggleHide()" title="show/hide">
      <!-- For PC -->
      <!-- <div class="d-none d-sm-block d-flex"> -->
      <div>
        <img src="assets/icons/other-icons/chevron-compact-left.svg" alt="hide" id="image1" width="100%">
        <img src="assets/icons/other-icons/chevron-compact-right.svg" alt="shown" id="image2" width="100%">
      </div>
      <!-- For Mobile -->
      <!-- <div class="d-block d-sm-none">
        <img src="assets/icons/other-icons/chevron-compact-down.svg" alt="hide" id="image3" width="100%">
        <img src="assets/icons/other-icons/chevron-compact-up.svg" alt="shown" id="image4" width="100%">
      </div> -->
    </div>
  </div>
  <script>
    let image1 = document.getElementById('image1');
    let image2 = document.getElementById('image2');
    let image3 = document.getElementById('image3');
    let image4 = document.getElementById('image4');
    let fixedLinks = document.getElementsByClassName("fixed-links")[0];
    console.log(fixedLinks);
    function toggleHide() {
      if (image1.style.display == "none") {
        image1.style.display = "inline-block";
        fixedLinks.style.display = "block";
        image2.style.display = "none";
      } else {
        image1.style.display = "none";
        fixedLinks.style.display = "none";
        image2.style.display = "inline-block";
      }

      if (image3.style.display == "none") {
        image3.style.display = "inline-block";
        fixedLinks.style.display = "block";
        image4.style.display = "none";
      } else {
        image3.style.display = "none";
        fixedLinks.style.display = "none";
        image4.style.display = "inline-block";
      }
    }
  </script>`);