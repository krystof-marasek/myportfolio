import { ref } from 'vue'

export default function getProjects() {

    let projects = ref([
        {
            projectID: 1,
            projectTitle: "Trapholt Website",
            projectDescription: "Together with three other students, I helped to design and develop a fictional website for Trapholt, an art museum in Kolding, Denmark. I was graded with 12 according to the Danish 7-point grade scale.",
            projectURL: "http://www.trapholt.6f.sk",
            projectVideo: "https://www.youtube.com/embed/AMCbjPqoe74",
            projectCategory: "Web"
        },
        {
            projectID: 2,
            projectTitle: "Short Movie",
            projectDescription: "",
            projectURL: "",
            projectVideo: "",
            projectCategory: "Video"
        },
        {
            projectID: 3,
            projectTitle: "The Last of Us Project",
            projectDescription: "I individually created a short appreciation video about The Last of Us video games. Using this personal project, I wanted to learn more about video and audio editing in Premiere Pro.",
            projectURL: "https://youtu.be/MEja_G91BzU",
            projectVideo: "https://www.youtube.com/embed/MEja_G91BzU",
            projectCategory: "Video"
        }, 
        {
            projectID: 4,
            projectTitle: "Promo Commercial",
            projectDescription: "Together with three other students, I worked on a small promo commercial for a fictional product. I came up with the idea for it and then directed it together with the team members.",
            projectURL: "https://youtu.be/O1eWulJhs6I",
            projectVideo: "https://www.youtube.com/embed/O1eWulJhs6I",
            projectCategory: "Video"
        },
        {
            projectID: 5,  
            projectTitle: "Esbjerg City Half - SoMe promo",
            projectDescription: "Together with three other students, I created a short pitch for a promo commercial about an event called Esbjerg City Half. I was responsible for directing and editing the video.",
            projectURL: "https://youtu.be/OXrfRfJCuAk",
            projectVideo: "https://www.youtube.com/embed/OXrfRfJCuAk",
            projectCategory: "Video"    
        },
        {
            projectID: 6,
            projectTitle: "My First Video Game",
            projectDescription: "I individually created my first video game level in Unity. I used a Karting Microgame preset offered by Unity Learn to, mainly, learn the basics of Unity and how to think about level design.",
            projectURL: "https://play.unity.com/mg/karting/karting-microgame-251",
            projectVideo: "https://www.youtube.com/embed/6TRSujoSh64",
            projectCategory: "Game"    
        }
    ])

    return { projects }
}