<template>
    <div class="header">
        <div class="header-row row g-0">
          <div class="col-6 col-sm-2 p-0">
            <div class="logo-container">
              <div class="logo-box">
                <img src="../assets/CV-logo.svg" alt="">
              </div>
            </div>
          </div>
          <div class="col-sm-4 p-0">
          </div>
          <div class="col-6 p-0">
            <div class="navigation">
              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">About Me</a> <!-- On click scroll to AboutMeComponent -->
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">My Abilities</a> <!-- On click scroll to ProjectsComponent -->
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact Me</a> <!-- On click scroll to ContactMeComponent -->
                </li>
              </ul>
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

.header-row {
  display: flex;
  background-color: $primarycolor;
}

// Logo

.logo-container {
  display: flex;
  justify-content: start;
  width: 100%;

  .logo-box {
  display: flex;
  align-items: center;

    img {
      object-fit: cover;
      height: 100px;
    }
  }
}

// Navigation

.navigation {  
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
  color: $whitetextcolor;
}

.nav-link {
  color: $whitetextcolor;
  font-size: $pfontsize;
  font-weight: bold;

  &:hover {
    color: $tertiarycolor;
  }
}


@media (max-width: 576px) {
  .col-6 {
    width: 100%;
  }
  
  .logo-container {
    width: 100%;
    justify-content: center;

    img {
      object-fit: cover;
      height: 50px;
    }
  }
  
  .navigation {  
    width: 100%;
    justify-content: center;

    .nav-link {
      justify-content: space-evenly;
      padding: 8px 8px;
    }
  }
}
</style>