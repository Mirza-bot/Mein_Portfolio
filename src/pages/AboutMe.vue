<template>
  <div class="page__container" id="#aboutme">
    <div class="mb10">
      <h1 class="headline animate_color_gradient">
        {{ $t("aboutMe.headline") }}
      </h1>
    </div>
    <div class="aboutme_background">
      <w-flex wrap class="text-center">
        <div class="person__container mxa py1">
          <img
            class="person__image bdrs6 bd6 sh5"
            src="../images/Mirza.webp"
            alt="Portfolio Picture"
          />
          <br />
          <ul class="name_plate mb10">
            <li>
              <span class="text-bold name_plate">Mirza MALKOC</span>
            </li>
            <li>{{ $t("aboutMe.age") }}</li>
            <li>{{ $t("aboutMe.livingIn") }}</li>
          </ul>
        </div>
        <div class="about_me_text mxa mb12">
          <p class="personal__text">
            {{ $t("aboutMe.personalText") }}
          </p>
        </div>
      </w-flex>
    </div>
    <div class="my10">
      <h1 class="headline animate_color_gradient">
        {{ $t("aboutMe.headline2") }}
      </h1>
    </div>
    <w-flex wrap class="text-center">
      <div class="md3 mxa my5 px6" v-for="badge in badges" :key="badge.name">
        <ul>
          <li>
            <img
              class="skill__image bdrs2"
              :src="badge.img"
              alt="Vue.js Icon"
            />
          </li>
          <li class="my2">
            <span>{{ badge.name }}</span>
          </li>
        </ul>
      </div>
    </w-flex>
  </div>
</template>

<script>
import JavaScriptImg from "../images/JavaScript.png";
import BootstrapImg from "../images/Bootstrap.png";
import VueImg from "../images/Vuejs_icon.png";
import SassImg from "../images/Sass.png";
import WaveImg from "../images/wave-ui.webp";
import SEOImg from "../images/SEO.jpg";
import GitImg from "../images/Git-Icon.png";
import RespImg from "../images/Responsive.png";
import Resume from "../assets/documents/Mirza's public Resume.pdf";
import TailwindLogo from "../images/Tailwind_CSS_Logo.svg.png";
import ReactLogo from "../images/React-icon.svg.png";
import TauriIcon from "../images/tauri-1.svg";
export default {
  setup() {
    const badges = [
      { name: "JavaScript", img: JavaScriptImg },
      { name: "Vue.js", img: VueImg },
      { name: "Sass", img: SassImg },
      { name: "Bootstrap", img: BootstrapImg },
      { name: "Tailwind CSS", img: TailwindLogo },
      { name: "React", img: ReactLogo },
      { name: "Git", img: GitImg },
      { name: "Tauri", img: TauriIcon },
    ];

    return {
      badges,
      Resume,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles";

div.page__container {
  width: 60vw;
  margin: 0 auto;
  font-family: "Roboto Condensed", sans-serif;
  @media only screen and (max-width: 1100px) {
    width: 90vw;
    margin: 0 auto;
  }
  @media only screen and (min-width: 2100px) {
    padding-top: 5vh;
  }
  h1.headline {
    font-size: 3rem;
    font-weight: 900;
    @media only screen and (min-width: 2100px) {
      font-size: 5rem;
    }
  }
}

img.skill__image {
  width: 5vw;
  height: 5vw;
  min-height: 80px;
  min-width: 80px;
  max-height: 200px;
  max-width: 200px;
}

span {
  font-size: 1.5rem;
  @media only screen and (max-width: 1100px) {
    font-size: 1rem;
    display: inline-block;
    max-width: 80px;
  }
  @media only screen and (min-width: 2100px) {
    font-size: 3rem;
  }
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    @media only screen and (min-width: 2100px) {
      font-size: 3rem;
    }
  }
}

.text-center {
  -webkit-perspective: 500px;
  -moz-perspective: 500px;
  -o-perspective: 500px;
  perspective: 500px;
}
div.person__container {
  color: white;
  font-size: 2rem;
  margin: 40px auto 0 37%;
  @media only screen and (min-width: 2100px) {
    font-size: 4rem;
  }
  @media only screen and (max-width: 1100px) {
    margin: auto;
  }
}

img.person__image {
  width: 15vw;
  @media only screen and (max-width: 1100px) {
    width: 50vw;
  }
}

span.name_plate {
  font-size: 2rem;
  white-space: nowrap;
  @media only screen and (min-width: 2100px) {
    font-size: 4rem;
  }
  @media only screen and (max-width: 1100px) {
    font-size: 2rem;
  }
}

ul.name_plate {
  text-align: start;
  font-size: 1.3rem;
}

p.personal__text {
  font-size: 1.5rem;
  padding: 10px;
  @media only screen and (min-width: 2100px) {
    font-size: 3rem;
  }
}

div.resumee__download {
  background-color: white;
  color: black;
  display: inline-block;
  padding: 5px;
  margin: 20px 0;
  font-size: 1.8rem;
  @media only screen and (min-width: 2100px) {
    font-size: 3.7rem;
    padding: 10px;
  }
  @media only screen and (max-width: 1100px) {
    font-size: 1.5rem;
    padding: 15px;
    margin: 5px 5px;
  }
  .download__button {
    color: white;
    font-size: 1.5rem;
    padding: 20px 10px;
    @media only screen and (min-width: 2100px) {
      font-size: 3rem;
      padding: 40px 20px;
    }
  }
}
</style>
