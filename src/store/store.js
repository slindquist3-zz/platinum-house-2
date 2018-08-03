import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    about_page: {
      heroes: [
        {
          text:
            "Wherever summer travel takes you, a Tier X Coach is there.<br class='is-hidden-touch'/><span class='is-hidden-desktop'>&nbsp</span>Furthermore has partnered with the platinum card from American Express<br class='is-hidden-touch'/><span class='is-hidden-desktop'>&nbsp</span>to bring you 10-minute workouts, accessible anytime.",
          topTextImage: "A first of its kind digital platform from equinox and american express platinum",
          image: 'jumbotron_2.png',
          buttonText: 'Access the Videos',
          buttonLink: '/workouts',
          bottomImage: 'dont_live_life_without_it.png',
          calloutImage: '',
          topImage:'platform_x_hamptons.png'
        },
        {
          image: 'hero_2.png',
          buttonText: 'View Class Schedule',
          buttonLink: '/classes',
          calloutImage: 'platform_x_hamptons.png',
          bottomImage: '',
          topImage: ''
        }
      ]
    },
    workouts_page: {
      videos: [
        {
          id: 1,
          coach: 'mike',
          category: 'cardio',
          title: 'MIKE MONROIG: 10&#8209;MINUTE CARDIO',
          description: 'Back-to-back rounds of jogging and bodyweight exercises elevate your heart rate.',
          url: 'https://www.youtube.com/embed/5NcSuEGGx4s',
          isPlaying: true
        },
        {
          id: 2,
          coach: 'mike',
          category: 'power_agility',
          title: 'MIKE MONROIG: 10&#8209;MINUTE AGILITY',
          description: 'Non-stop agility ladder work will have you working up a serious sweat.',
          url: 'https://www.youtube.com/embed/yWLGLLDpdYI',
          isPlaying: false
        },
        {
          id: 3,
          coach: 'mike',
          category: 'strength',
          title: 'MIKE MONROIG: 10&#8209;MINUTE STRENGTH',
          description: "You'll punctuate this challenging strength session with a handstand hold.",
          url: 'https://www.youtube.com/embed/ZkmtWW959Ic',
          isPlaying: false
        },
        {
          id: 4,
          coach: 'mike',
          category: 'mobility',
          title: 'MIKE MONROIG: 10&#8209;MINUTE MOBILITY',
          description: 'Relax into this mobility series: It highlights areas that need extra attention.',
          url: 'https://www.youtube.com/embed/UoWiVe_1ppA',
          isPlaying: false
        },
        {
          id: 5,
          coach: 'mike',
          category: 'conditioning',
          title: 'MIKE MONROIG: 10&#8209;MINUTE CONDITIONING',
          description: 'A six-minute metabolic circuit is followed by four minutes of flowing bodyweight work.',
          url: 'https://www.youtube.com/embed/XB-_7aK_D24',
          isPlaying: false
        }
      ]
    },
    coaches_page: {
      description:
        "Equinox Personal Training reaches its peak with Tier X, the world's most advanced health and wellness coaching. Powered by behavior training, our holistic approach transforms how you move, fuel, and recharge as a whole. And now, via Platform X, these coaches are accessible anytime, anywhere.",
      coaches: [
        {
          name: 'Saladin Butler',
          image: 'saladin.jpg',
          bio:
            'A passionate power lifter, Saladin prioritizes movement efficiency, strength and mindfulness to get you to maximal—and sustainable—health and wellness. Follow him',
          handle: '@make_it_happen_bt',
          social: 'https://www.instagram.com/make_it_happen_bt/'
        },
        {
          name: 'Ariel Comeau',
          image: 'ariel.jpg',
          bio:
            "Ariel has 25 years of training as a dancer. As a Tier X coach, she's a FRC (functional range conditioning) guru who specializes in mobility training. Follow her",
          handle: '@arieljewel',
          social: 'https://www.instagram.com/arieljewel/'
        },
        {
          name: 'Mike Monroig',
          image: 'mike.jpg',
          bio:
            "Mike's background as a gymnast informs his strength and conditioning focus. But when he isn't performing Instagram-worthy bodyweight moves, he's a big fan of kettlebells. Follow him",
          handle: '@mike_monroig',
          social: 'https://www.instagram.com/mike_monroig/'
        },
        {
          name: 'Steven Reyes',
          image: 'steven.jpg',
          bio:
            "Animal Flow patterns are among Steven's favorites; he counters monotony by creating routines that provoke the free flow of movement through play. Follow him",
          handle: '@steven.reyes',
          social: 'https://www.instagram.com/steven.reyes/'
        }
      ]
    }
  }
});
