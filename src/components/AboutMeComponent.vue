<template>
    <div class="main-container">
        <div class="heading-row row g-0">
            <div class="col-12 p-0"><h1>ABOUT ME</h1></div>
        </div>
        <div class="cv-row row g-0">
            <div class="col-12 col-sm-6 p-0">
                <div class="cv-container" data-aos="fade-up-right" data-aos-duration="1100">
                    <div class="cv">
                        <a href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:b60edd3b-8b68-34aa-bf1f-50663adaa738"><img src="../assets/CV_Page_1.png" alt=""></a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 p-0">
                <div class="cv-container" data-aos="fade-up-left" data-aos-duration="1100">
                    <div class="cv">
                        <a href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:b60edd3b-8b68-34aa-bf1f-50663adaa738"><img src="../assets/CV_Page_2.png" alt=""></a>
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

.heading-row {
    background-color: $primarycolor;
    padding: 40px 0 40px 0 ;
}

// CV

.cv-row {
    display: flex;
    background-color: $primarycolor;
}

.cv-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
}

.cv {
    width: 70%;
    border: 6px solid $tertiarycolor;
    img {
        object-fit: cover;
        width: 100%;
    }
}



@media (max-width: 576px) {
    h1 {
        font-size: $h1fontsize-sm;
    }
    
    .heading-row {
        padding: 40px 0 20px 0;
    }
}

</style>