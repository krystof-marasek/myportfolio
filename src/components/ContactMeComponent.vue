<template>
    <div class="main-container">
        <div class="heading-row row g-0">
            <div class="col-12 p-0"><h1>CONTACT ME</h1></div>
        </div>
        <div class="contacts-row row g-0">
            <div class="contact-me">
                <div class="col-12 col-sm-6 p-0">
                    <div class="contacts">
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

                <div class="col-12 col-sm-6 p-0">
                    <div class="contacts">
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
            </div>
        </div>

        <!-- Message Me -->

        <div class="message-row row g-0">
            <div class="col-12 p-0">
                <div class="message">
                    <div class="message-container">
                        <form @submit.prevent="submit" @reset="onReset">
                            <div id="name-email-container">
                                <div class="name-box">
                                  <input v-model="name" placeholder="Your Name" />
                                </div>
                                <div class="email-box">
                                  <input v-model="email" placeholder="Your Email" />
                                </div>
                            </div>
                            <div id="subject-container">
                              <input v-model="subject" placeholder="Subject" />
                            </div>
                            <div id="textarea-container">
                              <textarea v-model="message" placeholder="Message"></textarea>
                            </div>
                            <div id="button-container">
                                <a href="#"><button type="submit" class="btn btn-danger">Send Message</button></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "App",
    data() {
        return {
          name: "",
          email: "",
          subject: "",
          message: "",
        };
    },
    computed: {
        formValid() {
          const { name, email, subject, message } = this;
          return (
            name.length > 0 &&
            /(.+)@(.+){2,}\.(.+){2,}/.test(email) &&
            subject.length > 0 &&
            message.length > 0 
          );
        },
    },
    methods: {
        submit() {
          if (!this.formValid) {
            return;
          }
          if (!localStorage.getItem("messages")) {
            localStorage.setItem("messages", JSON.stringify([]));
          }
          const messages = JSON.parse(localStorage.getItem("messages"));
          const { name, email, subject, message } = this;
          messages.push({
            name,
            email,
            subject,
            message,
          });
          localStorage.setItem("messages", JSON.stringify(messages));
        },
    },
};
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
}

// Message Me

.message-row {
    display: flex;
    justify-content: center;
    background-color: $primarycolor;
}

.message {
    background-color: $primarycolor;
    display: flex;
    justify-content: center;
    align-items: center; 
}

.message-container {
    background-color: $primarycolor;
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 88%;
    margin: 20px 0 40px 0;
}

form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #name-email-container {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 10px;

        .name-box {
            width: 100%;
            display: flex;
            justify-content: start;

            input {
                width: 86%;
                background-color: $secondarycolor;
                color: $whitetextcolor;
                border-radius: 10px;
                font-size: 20px;
                padding: 5px;
            }
        }

        .email-box {
            width: 100%;
            display: flex;
            justify-content: end;

            input {
                width: 86%;
                background-color: $secondarycolor;
                color: $whitetextcolor;
                border-radius: 10px;
                font-size: 20px;
                padding: 5px;
            }
        }
    }

    #subject-container {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 10px;

        input {
            width: 100%;
            background-color: $secondarycolor;
            color: $whitetextcolor;
            border-radius: 10px;
            font-size: 20px;
            padding: 5px;
        }
    }

    #textarea-container {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 10px 10px 20px 10px;

        textarea {
            width: 100%;
            background-color: $secondarycolor;
            color: $whitetextcolor;
            border-radius: 10px;
            font-size: 20px;
            padding: 5px;
            height: 150px;
        }
    }

    #button-container {
        display: flex;
        justify-content: left;
        width: 100%;

        .btn {
            color: $whitetextcolor;
            background: transparent;
            border: 3px solid $tertiarycolor;
            border-radius: 50px;

            &:hover {
                background-color: $tertiarycolor;
            }
        }
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