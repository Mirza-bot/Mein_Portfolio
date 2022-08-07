<template>
  <w-flex wrap class="page__container" id="#projects">
    <div class="page__header">
      <h2 class="animate_color_gradient">{{ $t("projects.headline") }}</h2>
    </div>
    <div class="project_highlight xs12">
      <div>
        <img class="bdrs3" src="../images/JobApplicationManager.gif" />
        <h3 class="my6">Job Application Manager</h3>
        <p>
          {{ $t("projects.projectHightlight.description1") }}
          <a target="_blank" href="https://tauri.app/about/intro">Tauri</a>
          {{ $t("projects.projectHightlight.description2") }}
          <br />
          <br />
          {{ $t("projects.projectHightlight.description3") }}
          <br />
          <br />
          {{ $t("projects.projectHightlight.description4") }}
          <br />
          <br />
          {{ $t("projects.projectHightlight.description5") }}
        </p>
        <br />
        <br />
        <span class="title2">
          {{ $t("projects.projectHightlight.description6") }}
        </span>
        <br />
        <br />
        <span>
          <a
            href="https://github.com/Mirza-bot/Job-Application-Manager/tree/master/job_application_manager"
            target="_blank"
          >
            <w-button class="mr8" bg-color="white" color="black">
              <w-icon class="mr1" color="black">mdi mdi-code-braces</w-icon>
              Code
            </w-button>
          </a>
          <a href="../../src/downloadable/Job_Application_Manager.zip" download>
            <w-button bg-color="white" color="black">
              <w-icon class="mr1" color="black">mdi mdi-download</w-icon>
              Download
            </w-button>
          </a>
        </span>
      </div>
    </div>
    <div class="minor_projects xs12">
      <w-button
        class="project__button"
        bg-color="black"
        dark
        @click="showOverlay5 = true"
      >
        <img src="../images/PixelArtDB.png" alt="" />
        {{ $t("projects.project5.title") }}
      </w-button>

      <w-overlay v-model="showOverlay5" bg-color="rgba(0, 0, 0, 0.9)">
        <div class="overlay__container">
          <w-button
            class="close__overlay"
            bg-color="white"
            color="black"
            lg
            dark
            @click="showOverlay5 = false"
          >
            <w-icon>wi-cross</w-icon>
          </w-button>
          <PixelArtP></PixelArtP>
        </div>
      </w-overlay>
      <w-button
        class="project__button"
        bg-color="black"
        dark
        @click="showOverlay4 = true"
      >
        <img src="../images/portfoliopic.webp" alt="" />
        {{ $t("projects.project4.title") }}
      </w-button>

      <w-overlay v-model="showOverlay4" bg-color="rgba(0, 0, 0, 0.9)">
        <div class="overlay__container">
          <w-button
            class="close__overlay"
            bg-color="white"
            color="black"
            lg
            dark
            @click="showOverlay4 = false"
          >
            <w-icon>wi-cross</w-icon>
          </w-button>
          <PortfolioP></PortfolioP>
        </div>
      </w-overlay>

      <w-button
        class="project__button"
        bg-color="black"
        dark
        @click="showOverlay2 = true"
      >
        <img src="../images/Kanbanimage.png" alt="" />
        Todolist
      </w-button>

      <w-overlay v-model="showOverlay2" bg-color="rgba(0, 0, 0, 0.9)">
        <div class="overlay__container">
          <w-button
            class="close__overlay"
            bg-color="white"
            color="black"
            lg
            dark
            @click="showOverlay2 = false"
          >
            <w-icon>wi-cross</w-icon>
          </w-button>
          <KanbanPVue></KanbanPVue>
        </div>
      </w-overlay>
      <w-button
        class="project__button"
        bg-color="black"
        dark
        @click="showOverlay1 = true"
      >
        <img src="../images/pietrosimage.png" alt="" />
        Pietros Pizzeria
      </w-button>

      <w-overlay v-model="showOverlay1" bg-color="rgba(0, 0, 0, 0.9)">
        <div class="overlay__container">
          <w-button
            class="close__overlay"
            bg-color="white"
            color="black"
            lg
            dark
            @click="showOverlay1 = false"
          >
            <w-icon>wi-cross</w-icon>
          </w-button>
          <PietrosP></PietrosP>
        </div>
      </w-overlay>
    </div>
  </w-flex>
</template>

<script>
import KanbanPVue from "../components/layout/KanbanP.vue";
import PietrosP from "../components/layout/PietrosP.vue";
import LohnrechnerP from "../components/layout/LohnrechnerP.vue";
import PortfolioP from "../components/layout/PortfolioP.vue";
import PixelArtP from "../components/layout/PixelArtP.vue";
export default {
  components: { KanbanPVue, PietrosP, LohnrechnerP, PortfolioP, PixelArtP },
  data: () => ({
    showOverlay1: false,
    showOverlay2: false,
    showOverlay3: false,
    showOverlay4: false,
    showOverlay5: false,
  }),
};
</script>

<style lang="scss" scoped>
@import "../assets/styles";
div.page__container {
  font-family: "Roboto Condensed", sans-serif;
  width: 60vw;
  margin: 10vh auto 5vh auto;
  @media only screen and (min-width: 2100px) {
    font-size: 2rem;
    padding-top: 5vh;
  }
  @media only screen and (max-width: 1100px) {
    width: 90vw;
  }
  div.page__header {
    display: block;
    h2 {
      font-size: 3rem;
      @media only screen and (min-width: 2100px) {
        font-size: 5rem;
      }
    }
    .w-divider {
      margin: 0;
    }
  }
}

.minor_projects {
  margin-top: calc(800px - 15vw);
  @media only screen and (min-width: 1800px) {
    margin-top: 40vw;
  }
}

.project_highlight {
  display: inline-block;
  margin-top: 50px;
  width: 100%;
  height: 400px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      max-width: 90vw;
      min-width: 40vw;
    }
    button {
      transform: scale(1.5);
      margin: 0 60px;
      @media only screen and (max-width: 800px) {
        margin: 0 30px;
      }
    }
  }
}

button.project__button {
  margin: 20px;
  height: 155px;
  width: 45%;
  font-size: 1.5rem;
  @media only screen and (min-width: 2100px) {
    font-size: 3rem;
    height: 500px;
  }
  @media only screen and (max-width: 1100px) {
    width: 100%;
    height: 155px;
    margin: 20px 0;
  }
  img {
    width: 300px;
    position: absolute;
    z-index: -1;
    filter: brightness(40%);
    @media only screen and (max-width: 1100px) {
      width: 300px;
    }
    @media only screen and (min-width: 2100px) {
      width: 900px;
    }
  }
}

#salarycalc_img {
  width: 70px;
  @media only screen and (min-width: 2100px) {
    width: 230px;
  }
}

div.overlay__container {
  position: absolute;
  left: auto;
  max-width: 50vw;
  @media only screen and (max-width: 1100px) {
    max-width: 70vw;
  }
  @media only screen and (max-width: 700px) {
    max-width: 99vw;
    top: 2vh;
  }
}

button.close__overlay {
  position: absolute;
  right: 20px;
  top: 20px;
}
</style>
