<template>
    <div class="main-container">
        <div class="heading-row row g-0">
            <div class="col-12 p-0"><h1>CONTACT ME</h1></div>
        </div>
        <div class="contacts-row row g-0">
            <div class="contact-me">

                <div class="col-12 col-sm-4 p-0">
                    <div class="contacts" data-aos="zoom-in" data-aos-duration="500">
                        <div class="contacts-container">
                            <div class="email-box">
                                <p class="contacts-text">
                                    <img src="../assets/emailme.svg" alt="">
                                    Email Me
                                </p>
                            </div>
                            <div class="email-box">
                                <p class="contacts-text">krystofmarasek@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-4 p-0">
                    <div class="contacts" data-aos="zoom-in" data-aos-duration="500">
                        <div class="contacts-container">
                            <div class="message-box">
                                <p class="contacts-text">
                                    <img src="../assets/linkedin.svg" alt="">
                                    <a href="https://linkedin.com/in/krystof-marasek">Message Me</a>
                                </p>
                            </div>
                            <div class="message-box">
                                <p class="contacts-text"><a href="https://linkedin.com/in/krystof-marasek">Kryštof Marášek</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-4 p-0">
                    <div class="contacts" data-aos="zoom-in" data-aos-duration="500">
                        <div class="contacts-container">
                            <div class="call-box">
                                <p class="contacts-text">
                                    <img src="../assets/callme.svg" alt="">
                                    Call Me
                                </p>
                            </div>
                            <div class="call-box">
                                <p class="contacts-text">+420 720 514 568</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default {
}
</script>

<style scoped lang="scss">
@include heading1;
@include paragraph;

.heading-row {
    background-color: $primarycolor;
    padding: 40px 0 20px 0 ;
}

// Contact Me

.contacts-row {
    display: flex;
    justify-content: center;
    background-color: $primarycolor;
    padding-bottom: 40px;

    .contact-me {
        display: flex;

        .contacts {
        background-color: $primarycolor;
        display: flex;
        justify-content: center;
        align-items: center;

            .contacts-container {
                background-color: $secondarycolor;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 75%;
                border-radius: 10px;
                padding: 20px;
                margin-bottom: 20px;

                .call-box {
                    display: flex;
                    justify-content: center;
                    width: 90%;

                    img {
                        width: 20px;
                        height: 20px;
                        margin-right: 10px;
                    }
                }

                .email-box {
                    display: flex;
                    justify-content: center;
                    width: 90%;

                    img {
                        width: 20px;
                        height: 20px;
                        margin-right: 10px;
                    }
                }

                .message-box {
                    display: flex;
                    justify-content: center;
                    width: 90%;

                    img {
                        width: 20px;
                        height: 20px;
                        margin-right: 10px;
                    }
                }
            }
        }
    }
}

.contacts-text {
    color: $whitetextcolor;
    font-weight: 600;
    text-align: center;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
        color: $whitetextcolor;
    }
}

@media (max-width: 576px) {
    h1 {
        font-size: $h1fontsize-sm;
    }

    .contact-me {
        flex-direction: column;
        align-items: center;
        width: 100%;
        
        .contacts {
            width: 100%;

            .contacts-container {
                .contacts-text {
                    width: 100%;
                }
            }
        }

    }
}
</style>