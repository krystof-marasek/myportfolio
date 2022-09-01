import { ref } from 'vue'

export default function getProjects() {

    let projects = ref([
        {
            projectID: 1,
            projectTitle: "Techhub Syd Website",
            projectDescription: "Together with three other students, I helped to develop a website prototype for a Techhub Syd Community. I was graded with 12 according to the Danish 7-point grade scale.",
            projectURL: "https://techhubsyd.web.app",
            projectVideo: "https://www.youtube.com/embed/elqmEFRdI1k",
            projectCategory: "Web"
        },
        {
            projectID: 2,
            projectTitle: "Trapholt Website",
            projectDescription: "Together with three other students, I helped to design and develop a fictional website for Trapholt, an art museum in Kolding, Denmark. I was graded with 12 according to the Danish 7-point grade scale.",
            projectURL: "http://www.trapholt.6f.sk",
            projectVideo: "https://www.youtube.com/embed/AMCbjPqoe74",
            projectCategory: "Web"
        },
        {
            projectID: 3,
            projectTitle: "Incursio - Short Movie",
            projectDescription: "Together with four other students, I worked on a short movie called Incursio. I wrote the script, directed the film and helped with editing.",
            projectURL: "https://www.youtube.com/watch?v=xk0QxRJf6QA",
            projectVideo: "https://www.youtube.com/embed/xk0QxRJf6QA",
            projectCategory: "Video"
        },
        {
            projectID: 4,
            projectTitle: "The Last of Us Fan-made Video",
            projectDescription: "I individually created a short appreciation video about The Last of Us video games. Using this personal project, I wanted to learn more about video and audio editing in Premiere Pro.",
            projectURL: "https://youtu.be/MEja_G91BzU",
            projectVideo: "https://www.youtube.com/embed/MEja_G91BzU",
            projectCategory: "Video"
        }, 
        {
            projectID: 5,
            projectTitle: "My First Game",
            projectDescription: "I individually created my first video game level in Unity. I used a Karting Microgame preset offered by Unity Learn to, mainly, learn the basics of Unity and how to think about level design.",
            projectURL: "https://play.unity.com/mg/karting/karting-microgame-251",
            projectVideo: "https://www.youtube.com/embed/6TRSujoSh64",
            projectCategory: "Game"    
        },
        {
            projectID: 6,
            projectTitle: "John Lemon's Haunted Jaunt",
            projectDescription: "This was my next game I worked on in preparation for my school video game project. It was created using a tutorial provided by Unity Learn.",
            projectURL: "https://play.unity.com/mg/other/webgl-builds-240841",
            projectVideo: "https://www.youtube.com/embed/xbymFM4qRgw",
            projectCategory: "Game"    
        }
    ])

    return { projects }
}