<script setup lang="ts"></script>

<template>
  <section class="hero-section">
    <img
      class="hero-section__image"
      src="hero-image.png"
      alt="Хлеб&Печь"
      width="666"
      height="413"
    />
    <div class="hero-section__logo">
      <nuxt-icon class="hero-section__logo__icon" name="logo" />
      <h1 class="hero-section__logo__name">Хлеб & Печь</h1>
    </div>

    <div class="hero-section__block">
      <h2 class="hero-section__title">Свежая выпечка</h2>
      <p class="hero-section__description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the
      </p>
      <div class="hero-section__actions">
        <a class="hero-section__actions__link" href="#">Подробнее</a>
      </div>
    </div>
    <div class="hero-section__contacts__wrapper">
      <div class="hero-section__contacts">
        <div class="hero-section__contacts__socials">
          <a href="#"><nuxt-icon name="vk" /></a>
          <a href="#"><nuxt-icon name="vk" /></a>
          <a href="#"><nuxt-icon name="vk" /></a>
          <a href="#"><nuxt-icon name="vk" /></a>
        </div>
        <div class="hero-section__contacts__info">
          <ul class="hero-section__contacts__info__list">
            <li>Адрес: г. Ярославль, Московский проспект, 88</li>
            <li>Телефон: <a href="#">8 (800) 555-35-35</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.hero-section {
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
  background-image: url('bg.png');
  background-position: -5%;
  background-repeat: repeat;

  &__logo,
  &__block,
  &__contacts__info {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--color-orange);
      z-index: -1;
    }
  }

  &__image {
    position: absolute;
    margin-block: auto;
    top: 5%;
    right: 18%;
    bottom: 0;
  }

  &__logo {
    width: 65%;
    padding-left: var(--wrapper);
    position: relative;
    display: flex;
    gap: 16px;
    align-items: center;

    &__icon {
      font-size: 52px;
    }

    &__name {
      font-family: 'Sen', sans-serif;
      font-weight: 700;
      font-size: 28px;
      width: 170px;
      line-height: 34px;
      text-transform: uppercase;
    }
  }

  &__block {
    width: 65%;
    padding: 200px 0 166px var(--wrapper);
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-image: radial-gradient(50% 50% at 50% 50%, #f2a850 0%, rgba(228, 166, 92, 0) 100%);
    background-position: right center;
  }

  &__title {
    max-width: 620px;
    font-family: 'Sen', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 54px;
    line-height: 89px;
    text-transform: uppercase;
  }

  &__description {
    max-width: 550px;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.44;
  }

  &__actions {
    display: flex;
    margin-top: 40px;

    &__link {
      display: inline-flex;
      color: #ffffff;
      background-color: var(--color-light-orange);
      padding: 16px 50px;
      border-radius: 30px;
      font-family: 'Sen', sans-serif;
      font-weight: 900;
      font-size: 18px;
      line-height: 24px;
      text-decoration: none;
      text-transform: uppercase;
    }
  }

  &__contacts {
    display: flex;
    min-width: 200px;

    &__wrapper {
      width: 65%;
    }

    &__socials {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 30px 40px;
      margin-left: auto;

      & > * {
        font-size: 24px;
        color: #c98a40;
      }
    }

    &__info {
      width: 60%;
      padding: 20px;
      display: flex;
      flex-direction: column-reverse;

      &__list {
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 1.44;
        color: #ffffff;
        list-style: none;

        & > li {
          a {
            font-weight: 500;
            letter-spacing: 0.15em;
            color: #ffffff;
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>
