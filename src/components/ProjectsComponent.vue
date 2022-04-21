<template>
    <div class="main-container">
        <div class="heading-row row g-0">
            <div class="col-12 p-0"><h1>CHOOSE AN ABILITY</h1></div>
        </div>
        <div class="heading-text-row row g-0">
            <div class="col-sm-4 p-0"></div>
            <div class="col-12 col-sm-4 p-0">
                <div id="heading-text-container">
                    <p id="align-center">What projects that I have worked on would you like to see?</p>
                </div>
            </div>
            <div class="col-sm-4 p-0"></div>
        </div>
        <div class="divider-row row g-0">
            <div class="col-3 col-sm-5 p-0"></div>
            <div class="col-6 col-sm-2 p-0">
                <div id="divider-container">
                    <div id="divider"></div>
                </div>
            </div>
            <div class="col-3 col-sm-5 p-0"></div>
        </div>

        <!-- Filters -->

        <div class="filter-row row g-0">
            <div class="filters">
                <div class="col-6 col-sm-4 p-0">
                    <div class="filter-container" data-aos="flip-left" data-aos-duration="1100">
                        <div class="filter-btn">
                            <img type="button" @click="categoryWeb()" src="../assets/WebDesign.svg" alt="">
                        </div>
                        <div class="filter-name">
                            <p class="filter-name-text">Web Design &amp; Development</p>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-sm-4 p-0">
                    <div class="filter-container" data-aos="flip-up" data-aos-duration="1100">
                        <div class="filter-btn">
                            <img type="button" @click="categoryVideo()" src="../assets/VideoProduction.svg" alt="">
                        </div>
                        <div class="filter-name">
                            <p class="filter-name-text">Video Production</p>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-sm-4 p-0">
                    <div class="filter-container" data-aos="flip-right" data-aos-duration="1100">
                        <div class="filter-btn">
                            <img type="button" @click="categoryGame()" src="../assets/GameDesign.svg" alt="">
                        </div>
                        <div class="filter-name">
                            <p class="filter-name-text">Video Game Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Projects -->
        
        <transition-group apper @before-enter="beforeEnter" @enter="enter">
            <div v-for="(project, index) in searchedProjects" :data-index="index" :key="project.projectID">
                <div class="project-row row g-0" data-aos="fade-up" data-aos-duration="1100">
                    <div class="col-12 col-sm-6 p-0">
                        <div class="project-container">
                            <div class="project-text">
                                <h2>{{project.projectTitle}}</h2>
                                <p>{{project.projectDescription}}</p>
                                <div class="buttons">
                                    <button type="button" class="btn btn-outline-danger">
                                        <a :href="project.projectURL">See More</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 p-0">
                        <div class="project-container">
                            <div class="project-video">
                                <iframe width="560" height="315" :src="project.projectVideo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <span :class="project.projectCategory"></span>
                </div>
            </div>
        </transition-group>



    </div>
</template>

<script>
import { ref, computed } from 'vue'
import getProjects from '../modules/getProjects'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default {
    setup() {

        const { projects } = getProjects()

        const searchQuery = ref("")

        const searchedProjects = computed(() => {
          return projects.value.filter((project) => {
            if (searchQuery.value == project.projectCategory.toLowerCase() ){
              return (
                project.projectCategory
                  .toLowerCase()
                  .indexOf(searchQuery.value.toLowerCase()) != -1
              );
            } else {
               return (
                project.projectTitle
                  .toLowerCase()
                  .indexOf(searchQuery.value.toLowerCase()) != -1
              );
            }
          });
        });

        // Filter on category
        let categoryWeb = () => {
            searchQuery.value = "web"
        }
        let categoryVideo = () => {
            searchQuery.value = "video"
        }
        let categoryGame = () => {
            searchQuery.value = "game"
        }

        return {
            searchQuery,
            searchedProjects,
            
            categoryWeb,
            categoryVideo,
            categoryGame,
            
            projects
        }
    }
}
</script>

<style scoped lang="scss">
@include heading1;
@include heading2;
@include paragraph;

.main-container {
    background-color: $secondarycolor;
}

.heading-row {
    padding: 40px 0 20px 0;
}

.heading-text-row {
    padding: 0 0 20px 0;

    #heading-text-container {
        display: flex;
        justify-content: center;
        align-items: center;

        #align-center {
            text-align: center;
        }

    }
}

.divider-row {
    padding: 0 0 40px 0;

    #divider-container {
        display: flex;
        justify-content: center;
        align-items: center;

        #divider {
            background-color: $tertiarycolor;
            width: 200px;
            height: 3px;
        }
    }
}

// Filters

.filter-row {
    padding: 20px 0 40px 0;

    .filters {
        display: flex;
        justify-content: center;
        align-items: center;

        .filter-container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .filter-btn {
                img {
                    height: 65%;
                    width: 65%;
                }
            }

            .filter-name {
                width: 100%;
                display: flex;
                justify-content: center;
                margin-top: 10px;

                .filter-name-text {
                    text-align: center;
                    color: $whitetextcolor;
                    font-weight: bold;
                    width: 100%;
                }
            }


        }
    }
}

// Projects

.project-row {
    display: flex;
}

.project-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 650px;
    width: 100%;

    .project-text {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        width: 100%;

        .buttons {
            width: 70%;
            display: flex;
            justify-content: left;
            align-items: center;

            .btn {
                color: $whitetextcolor;
                background: transparent;
                border: 3px solid $tertiarycolor;
                border-radius: 50px;

                a {
                    text-decoration: none;
                    color: $whitetextcolor;
                }

                &:hover {
                    background-color: $tertiarycolor;
                }
            }
        }
    }

    .project-video {
        display: flex;
        justify-content: center;
        align-items: center;
        height: $videoframeheight;
        border: 6px solid $tertiarycolor;
    }
}



@media (max-width: 576px) {
    h1 {
        font-size: $h1fontsize-sm;
    }
    
    .filter-row {
        .filters {
            flex-direction: column;

            .filter-container {
                margin: 10px 0;

                .filter-btn {
                    img {
                        height: 55%;
                        width: 55%;
                    }
                }
            }
        }
    }

    .project-container {
        height: 450px;

        .project-video {
            height: 38%;

            iframe {
                width: 310px;
                height: 160px;
            }
        }
    }
}
</style>