<template>
  <div class="home">
    <div class="home__landing">
      <title-1 class="home__landing__title">Souperman</title-1>
      <subtitle-1 class="home__landing__subtitle">Redécouvrez la cuisine<br> en spectacle</subtitle-1>
      <div class="home__landing__video" v-if="routeIsLoaded">
        <video autoplay="autoplay" loop="loop" v-if="isVideoCompatible" ref="player">
          <source src="https://thawing-mountain-46939.herokuapp.com/video">
        </video>
        <img
          sizes="(max-width: 1280px) 100vw, 1280px"
          srcset="
          https://souperman-assets.victormendele.fr/teppenyaki/teppanyaki-834149_1920_xq9uaf_c_scale_w_200.jpg 200w,
          https://souperman-assets.victormendele.fr/teppenyaki/teppanyaki-834149_1920_xq9uaf_c_scale_w_346.jpg 346w,
          https://souperman-assets.victormendele.fr/teppenyaki/teppanyaki-834149_1920_xq9uaf_c_scale_w_463.jpg 463w,
          https://souperman-assets.victormendele.fr/teppenyaki/teppanyaki-834149_1920_xq9uaf_c_scale_w_559.jpg 559w,
          https://souperman-assets.victormendele.fr/teppenyaki/teppanyaki-834149_1920_xq9uaf_c_scale_w_654.jpg 654w,
          https://souperman-assets.victormendele.fr/teppenyaki/teppanyaki-834149_1920_xq9uaf_c_scale_w_746.jpg 746w,
          https://souperman-assets.victormendele.fr/teppenyaki/teppanyaki-834149_1920_xq9uaf_c_scale_w_821.jpg 821w,
          https://souperman-assets.victormendele.fr/teppenyaki/teppanyaki-834149_1920_xq9uaf_c_scale_w_896.jpg 896w,
          https://souperman-assets.victormendele.fr/teppenyaki/teppanyaki-834149_1920_xq9uaf_c_scale_w_972.jpg 972w,
          https://souperman-assets.victormendele.fr/teppenyaki/teppanyaki-834149_1920_xq9uaf_c_scale_w_1041.jpg 1041w,
          https://souperman-assets.victormendele.fr/teppenyaki/teppanyaki-834149_1920_xq9uaf_c_scale_w_1103.jpg 1103w,
          https://souperman-assets.victormendele.fr/teppenyaki/teppanyaki-834149_1920_xq9uaf_c_scale_w_1170.jpg 1170w,
          https://souperman-assets.victormendele.fr/teppenyaki/teppanyaki-834149_1920_xq9uaf_c_scale_w_1234.jpg 1234w,
          https://souperman-assets.victormendele.fr/teppenyaki/teppanyaki-834149_1920_xq9uaf_c_scale_w_1279.jpg 1279w,
          https://souperman-assets.victormendele.fr/teppenyaki/teppanyaki-834149_1920_xq9uaf_c_scale_w_1280.jpg 1280w"
          src="https://souperman-assets.victormendele.fr/teppenyaki/teppanyaki-834149_1920_xq9uaf_c_scale_w_1280.jpg"
          alt=""
          v-else>
      </div>
    </div>

    <two-columns class="home__about">
      <column class="home__about__logo" v-lazy-container="{ selector: 'img' }">
        <img :data-src="logo" alt="Logo de la troupe de spectacle Soupe'rman" class="home__about__logo__img">
      </column>
      <column class="home__about__content">
        <title-2 class="home__about__title">Qui sommes nous ?</title-2>
        <b-text class="home__about__text">Soupe’rman, c’est avant tout une proposition lancée par une <router-link to="/membre/Charline">folle</router-link> après quelques verres de saké. Les restaurants de Teppanyaki sont rares en France mais une troupe de Teppanyaki ? C’était du jamais vu. On s’est lancés le défi d’aller enflammer (littéralement) les places de toutes la France. Faire virevolter les lames, brûler les limites et cuisiner en finesse, c’est notre credo. On est aussi très engagés dans l’écologie et nos spectacles sont garantis 0 gâchis ! Si le public ne mange pas ce qu’on prépare, nous on le mange ou on le donne à des associations locales. Les déchets verts sont compostés, les emballages recyclés et les os finissent toujours entre les crocs d’un bon toutou !</b-text>
      </column>
    </two-columns>

    <b-img class="home__cut">
      <!-- <img :src="parc" class="home__cut__img"> -->
        <img
          sizes="(max-width: 1400px) 100vw, 1400px"
          srcset="
          https://souperman-assets.victormendele.fr/parc/jeudis_du_parc_opt_wcdawl_c_scale_w_200.jpg 200w,
          https://souperman-assets.victormendele.fr/parc/jeudis_du_parc_opt_wcdawl_c_scale_w_336.jpg 336w,
          https://souperman-assets.victormendele.fr/parc/jeudis_du_parc_opt_wcdawl_c_scale_w_441.jpg 441w,
          https://souperman-assets.victormendele.fr/parc/jeudis_du_parc_opt_wcdawl_c_scale_w_529.jpg 529w,
          https://souperman-assets.victormendele.fr/parc/jeudis_du_parc_opt_wcdawl_c_scale_w_610.jpg 610w,
          https://souperman-assets.victormendele.fr/parc/jeudis_du_parc_opt_wcdawl_c_scale_w_686.jpg 686w,
          https://souperman-assets.victormendele.fr/parc/jeudis_du_parc_opt_wcdawl_c_scale_w_755.jpg 755w,
          https://souperman-assets.victormendele.fr/parc/jeudis_du_parc_opt_wcdawl_c_scale_w_822.jpg 822w,
          https://souperman-assets.victormendele.fr/parc/jeudis_du_parc_opt_wcdawl_c_scale_w_885.jpg 885w,
          https://souperman-assets.victormendele.fr/parc/jeudis_du_parc_opt_wcdawl_c_scale_w_952.jpg 952w,
          https://souperman-assets.victormendele.fr/parc/jeudis_du_parc_opt_wcdawl_c_scale_w_1016.jpg 1016w,
          https://souperman-assets.victormendele.fr/parc/jeudis_du_parc_opt_wcdawl_c_scale_w_1072.jpg 1072w,
          https://souperman-assets.victormendele.fr/parc/jeudis_du_parc_opt_wcdawl_c_scale_w_1128.jpg 1128w,
          https://souperman-assets.victormendele.fr/parc/jeudis_du_parc_opt_wcdawl_c_scale_w_1187.jpg 1187w,
          https://souperman-assets.victormendele.fr/parc/jeudis_du_parc_opt_wcdawl_c_scale_w_1243.jpg 1243w,
          https://souperman-assets.victormendele.fr/parc/jeudis_du_parc_opt_wcdawl_c_scale_w_1293.jpg 1293w,
          https://souperman-assets.victormendele.fr/parc/jeudis_du_parc_opt_wcdawl_c_scale_w_1349.jpg 1349w,
          https://souperman-assets.victormendele.fr/parc/jeudis_du_parc_opt_wcdawl_c_scale_w_1397.jpg 1397w,
          https://souperman-assets.victormendele.fr/parc/jeudis_du_parc_opt_wcdawl_c_scale_w_1400.jpg 1400w"
          v-lazy="'https://souperman-assets.victormendele.fr/parc/jeudis_du_parc_opt_wcdawl_c_scale_w_1400.jpg'"
          alt="Parc" class="home__cut__img">
    </b-img>

    <div class="home__shows">
      <title-2 class="home__shows__title">On met le feu<br> dans vos villes</title-2>
      <b-row class="home__shows__collection">
        <show-card v-for="({ image, name, date}, i) of shows" :key="`show-${i}`">
          <template slot="img">
            <!-- <img :src="img" alt="Parc"> -->
            <img :src="image.src" :srcset="image.srcset.join(',')" :sizes="image.sizes">
          </template>
          <template slot="title">
            {{ name }}
          </template>
          <template slot="subtitle">
            {{ date }}
          </template>
          <template slot="link">
            <router-link :to="'/animations/'+slugify(name)" class="show__router__link">En savoir plus</router-link>
          </template>
        </show-card>
      </b-row>
    </div>
  </div>
</template>

<script>
import Landing from '../components/structure/Landing'
import ShowCard from '../components/ShowCard'
import Logo from '../assets/logo.svg'
import slugify from 'slugify'

export default {
  name: 'home',
  mounted() {
    this.routeIsLoaded = true
  },
  created () {
    let video = document.createElement('video')
    this.isVideoCompatible = (video.canPlayType('video/webm; codecs="vp8, vorbis"') === 'probably')

    fetch ('https://thawing-mountain-46939.herokuapp.com/api/animations?count=4')
      .then(response => response.json(), rej => console.log(rej))
      .then(data => this.shows = data)
  },
  components: {
    Landing,
    ShowCard
  },
  data () {
    return {
      logo: Logo,
      shows: [],
      routeIsLoaded: false,
      isVideoCompatible: false
    }
  },
  methods: {
    slugify
  }
}
</script>

<style lang="scss">
.show__router__link {
  text-decoration: none;
  text-transform: uppercase;
  color: var(--color-primary);
  letter-spacing: .2em;
}

.home__about__logo__img {
  width: 100%;
}

  .home {
    &__landing {
      position: relative;

      min-height: calc(100vh - var(--landing-margin) * 2 - var(--landing-padding) * 2);
      margin: var(--landing-margin);
      padding: var(--landing-padding);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &__video {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;

        & > video, img {
          width: 100%;
          height: 100%; 
          object-fit: cover;
          border-radius: 1px;
        }
      }

      &__title {
        text-align: center;
        margin-top: 0;
        margin-bottom: 0.1em;
        color: #fff;
      }

      &__subtitle {
        text-align: center;
        color: #fff;
      }
    }

    &__about {

        &__logo {
          &__img {
            width: 100%;
          }

          margin-bottom: 5%;
        }


      // min-height: 85vh;
      margin-top: 20%;
      margin-bottom: 20%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 16px;

      &__title {
        text-align: center;
      }

      &__text {
        text-align: center;
      }
    }

    &__cut {
      width: 100%;
      height: 250px;
      margin-bottom: 20%;

      & .vue-responsive-image, &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-position: bottom;
      }
    }

    &__shows {
      &__title {
        text-align: center;
        margin-bottom: 2em;
      }

      &__collection {
        flex-direction: column;
        align-items: center;
      }
    }
  }

  @media screen and (min-width: 600px) {
    .home {
      &__about {
        margin-bottom: 5%;
        margin-top: 5%;

        &__content {
          width: 50%;
        }

        &__title {
          margin-bottom: 2em;
        }

        &__text {
          text-align: justify;
          margin-bottom: 1.5em;
        }

        
      }

      &__cut {
        height: 30vh;
        margin-bottom: 10%;
      }

      &__shows {
        margin-bottom: 10%;
      }
    }
  }

  @media screen and (min-width: 900px) {
    .home {
      &__about {
        flex-direction: row;

        &__logo {
          width: 40%;
          padding-left: 64px;
          margin-bottom: 0;
        }

        &__content {
          width: 60%;
          padding-left: 64px;
          padding-right: 64px;
          box-sizing: border-box;
        }

        &__title, &__text {
          
          text-align: justify;
        }
      }

      &__cut {
        height: 50vh;
      }

      &__shows {
        &__collection {
          flex-direction: row;
          padding: 0 15%;
          flex-wrap: wrap;
        }
      }
    }
  }
</style>
