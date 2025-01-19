<template>
  <section>
    <div
      class="faq-container h-[15rem] flex flex-row items-center justify-center"
    >
      <div class="flex flex-column relative z-[10]">
        <h2 class="text-5xl mb-[1.5rem]">Questions on your mind?</h2>
        <div class="flex justify-center">
          <div class="col-4">
            <button class="btn btn-lg cta-button-white !rounded-[4rem]">
              <span class="text-sm font-semibold">See our FAQs</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-us-container py-[5rem]">
      <div class="flex flex-wrap flex-row container">
        <div class="col-12 col-lg-6 p-2">
          <img
            class="rounded-[2rem] w-[90%] mx-auto"
            src="/images/contact-us-image.png"
            alt="Two girl in clothers shop"
          />
        </div>
        <div class="col-12 col-lg-6 p-2 text-black my-[3rem]">
          <h3 class="text-4xl font-bold mb-[1rem]">Be part of the community</h3>
          <p class="mb-[1rem]">
            Join the
            <span class="underline">Re:Nue community</span> and unlock a world
            of exclusive perks and discounts when you shop with us!
          </p>
          <div class="form-group mb-[1rem]">
            <label class="font-light">Full name</label>
            <input
              type="text"
              class="form-control !bg-white !rounded-2xl mt-[0.5rem]"
              placeholder="Enter your name"
            />
          </div>
          <div class="form-group mb-[1rem]">
            <label
              >Sign up with <icon icon="mdi-information-outline"></icon
            ></label>
            <div class="flex flex-row flex-wrap gap-4">
              <div class="form-check">
                <input
                  class="form-check-input !bg-white checked:!bg-black"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Default radio
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input !bg-white checked:!bg-black"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Default checked radio
                </label>
              </div>
            </div>
            <input
              type="text"
              class="form-control !bg-white !rounded-2xl mt-[0.5rem]"
              placeholder="Enter your email address"
            />
          </div>
          <div class="form-check mb-[1rem]">
            <input
              class="form-check-input !bg-white checked:!bg-black"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              By registering through this membership application form, you agree
              that The Salvation Army Red Shield Industries Singapore may
              collect, use and disclose your personal data, as provided in this
              application form, for the
              <span class="underline">following purposes</span> in accordance
              with the Personal Data Protection Act 2012.
            </label>
          </div>
          <div class="col-12 grid mt-[1.2rem]">
            <button
              class="btn btn-lg cta-button-black !rounded-[4rem] font-bold"
            >
              Join now
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.faq-container {
  background-image: url("images/tshirt_racks.png");
  background-size: cover;
  background-position: 0% 50%;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }
}
.contact-us-container {
  background-color: var(--primary-yellow);
}
</style>
