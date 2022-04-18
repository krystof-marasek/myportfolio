<template>
    <div class="header">
        <div class="footer-row row g-0">
            <div class="col-12 p-0">
                <div class="social-links">
                    <div class="social-container">
                        <div class="social">
                            <a href="https://linkedin.com/in/krystof-marasek"><img src="../assets/linkedin.svg" alt=""></a>
                            <a href="https://www.youtube.com/channel/UCwCNVn2brnJdMAb2BgMHeBw"><img src="../assets/youtube.svg" alt=""></a>
                            <a href="https://play.unity.com/u/krySHOT"><img src="../assets/unity.svg" alt=""></a>
                            <a href="https://github.com/krys0381"><img src="../assets/github.svg" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">

.footer-row {
  display: flex;
  background-color: $secondarycolor;
}

.social-links {
    display: flex;
    justify-content: center;

    .social-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 115px;
        width: 85%;

        .social {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 25%;

            a {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                width: 100%;

                img {
                    object-fit: cover;
                    height: 50%;
                    width: 50%;
                }
            }
        }
    }
}

@media (max-width: 576px) {
    .social-links {
        .social-container {
            width: 100%;

            .social {
                width: 75%;
            }
        }
    }
}
</style>