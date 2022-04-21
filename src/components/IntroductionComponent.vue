<template>
    <div class="introduction-row row g-0">
        <div class="col-12 col-sm-6 p-0">
            <div class="introduction-container1">
                <div class="introduction-text">
                    <h2>Hey there,</h2>
                    <h2>My name is Kryštof Marášek</h2>
                    <p>
                        I am a Multimedia Designer experienced mainly in Web Design &amp; Development, Video Production and Video Game Design.
                    </p>
                    <div id="buttons">
                        <a href="#aboutMeComponent"><button type="button" class="btn btn-outline-danger">Read More</button></a> <!-- On click scroll to AboutMeComponent -->
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 p-0">
            <div class="introduction-container2">
                <div class="introduction-video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/pi7V7JDnC2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
@include heading2;
@include paragraph;

.introduction-row {
    display: flex;
    background-color: $secondarycolor;
}

// Introduction text

.introduction-container1 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 650px;
    width: 100%;
}

.introduction-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

#buttons {
    width: 70%;
    display: flex;
    justify-content: left;
    align-items: center;
}

.btn {
    color: $whitetextcolor;
    background: transparent;
    border: 3px solid $tertiarycolor;
    border-radius: 50px;

    &:hover {
        background-color: $tertiarycolor;
    }
}

// Introduction video

.introduction-container2 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 650px;
    width: 100%;
}

.introduction-video {
    display: flex;
    justify-content: center;
    align-items: center;
    height: $videoframeheight;
    border: 6px solid $tertiarycolor;
}

@media (max-width: 576px) {
    .introduction-container1 {
        height: 450px;
    }
    
    .introduction-container2 {
        height: 300px;
    }
    
    .introduction-video {
        height: 58%;

        iframe {
            width: 310px;
            height: 160px;
        }
    }
}
</style>