
let userSeason = prompt("Welcome! ✨ Which season's vibe are you looking for today?\n\n☀️ Summer\n❄️ Winter\n⛈️ Rainy\n🌸 Spring\n🍂 Autumn\n\nEnter the name of the season:").toLowerCase();

if(userSeason === 'summer' || userSeason === 'hot summer') {
  document.writeln(`
    <div class="season-summer d-flex justify-content-center align-items-center position-relative" style="height:100vh; overflow: hidden;">
  <!-- Background Video -->
  <video autoplay muted loop class="bg-video position-absolute w-100 h-100" style="object-fit: cover; top:0; left:0; z-index:1;">
    <source src="./images/summer-vibes.mp4" type="video/mp4">
  </video>

  <!-- Card Content -->
  <div class="card season-card p-4 text-center d-flex flex-column justify-content-center align-items-center shadow-lg" style="z-index:2; max-width: 350px; backdrop-filter: blur(10px); background: rgba(255,255,255,0.7); border-radius: 20px;">
    
    <!-- Card Image -->
    <img src="./images/summer.png" class="img-fluid rounded mb-3" alt="summer card" style="width: 120px; height: auto;">

    <!-- Card Title -->
    <h5 class="fw-bold fs-4 mb-2 text-dark">
      Summer Vibes ☀️
    </h5>

    <!-- Card Description -->
    <p class="mb-3 text-dark">
      Enjoy the warm sunshine and bright days of summer! Stay hydrated and have fun outdoors.
    </p>

    <!-- Weather Info Flex Row -->
    <div class="d-flex justify-content-around w-100 mb-2">
      <div class="d-flex flex-column align-items-center">
        <i class="fas fa-thermometer-half fs-4 text-warning"></i>
        <span>30°C</span>
      </div>
      <div class="d-flex flex-column align-items-center">
        <i class="fas fa-tint fs-4 text-info"></i>
        <span>20% Humidity</span>
      </div>
      <div class="d-flex flex-column align-items-center">
        <i class="fas fa-wind fs-4 text-secondary"></i>
        <span>5 km/h</span>
      </div>
    </div>

    <!-- Button or CTA -->
    <button class="btn btn-warning fw-bold w-75">Check More 🌤️</button>

  </div>
</div>
  `);
}
else if(userSeason === 'winter' || userSeason === 'chilly winter') {
  document.writeln(`
  <div class="season d-flex justify-content-center align-items-center position-relative" style="height:100vh; overflow: hidden;">
  <!-- Background Video -->
  <video autoplay muted loop class="bg-video position-absolute w-100 h-100" style="object-fit: cover; top:0; left:0; z-index:1;">
    <source src="./images/winter_season.mp4" type="video/mp4">
  </video>

  <!-- Card Content -->
  <div class="card season-card p-4 text-center d-flex flex-column justify-content-center align-items-center shadow-lg" style="z-index:2; max-width: 350px; backdrop-filter: blur(10px); background: rgba(255,255,255,0.75); border-radius: 20px;">
    
    <!-- Card Image -->
    <img src="./images/win3.png" class="img-fluid rounded mb-3" alt="winter card" style="max-height: 200px; object-fit: cover;">

    <!-- Card Title -->
    <h5 class="fw-bold fs-4 mb-2 text-dark">
      Winter Chill ❄️
    </h5>

    <!-- Card Description -->
    <p class="mb-3 text-dark">
      Embrace cozy vibes, hot cocoa, and chilly winds — winter is magical! 🧣☕
    </p>

    <!-- Weather Info Flex Row -->
    <div class="d-flex justify-content-around w-100 mb-3">
      <div class="d-flex flex-column align-items-center">
        <i class="fas fa-thermometer-empty fs-4 text-primary"></i>
        <span>-2°C</span>
      </div>
      <div class="d-flex flex-column align-items-center">
        <i class="fas fa-tint fs-4 text-info"></i>
        <span>30% Humidity</span>
      </div>
      <div class="d-flex flex-column align-items-center">
        <i class="fas fa-wind fs-4 text-secondary"></i>
        <span>10 km/h</span>
      </div>
    </div>

    <!-- Button or CTA -->
    <button class="btn btn-primary fw-bold w-75">Discover Winter ❄️</button>

  </div>
</div>
  `);
}
else if(userSeason === 'rainy' || userSeason === 'rainy days') {
  document.writeln(`
   <div class="season-rainy d-flex justify-content-center align-items-center position-relative" style="height:100vh; overflow: hidden;">
  <!-- Fullscreen GIF as Background -->
  <img src="./images/rainy1.gif" class="position-absolute w-100 h-100" style="object-fit: cover; top:0; left:0; z-index:0;" alt="Rainy Background GIF">

  <!-- Card Content -->
  <div class="card season-card p-4 text-center d-flex flex-column justify-content-center align-items-center shadow-lg" style="z-index:2; max-width: 350px; background: transparent; backdrop-filter: blur(12px); border-radius: 20px;">
    
    <!-- Video inside Card -->
     <video autoplay muted loop class="card-video mb-3" style="width: 100%; max-height: 180px; border-radius: 15px; object-fit: cover;">
      <source src="./images/rainy2.mp4" type="video/mp4">
    </video>

    <!-- Card Title -->
    <h5 class="fw-bold fs-4 mb-2 text-dark">
      Rainy Mood ⛈️
    </h5>

    <!-- Card Description -->
    <p class="mb-3 text-dark">
      Raindrops dancing on windows, fresh air everywhere, and a chance of sun later 🌦️☔. Perfect weather for cozy vibes!
    </p>

    <!-- Weather Info Flex Row -->
    <div class="d-flex justify-content-around w-100 mb-3">
      <div class="d-flex flex-column align-items-center">
        <i class="fas fa-cloud-showers-heavy fs-4 text-primary"></i>
        <span>15 mm Rain</span>
      </div>
      <div class="d-flex flex-column align-items-center">
        <i class="fas fa-tint fs-4 text-info"></i>
        <span>80% Humidity</span>
      </div>
      <div class="d-flex flex-column align-items-center">
        <i class="fas fa-wind fs-4 text-secondary"></i>
        <span>12 km/h</span>
      </div>
    </div>

    <!-- Button or CTA -->
    <button class="btn btn-info fw-bold w-75">Enjoy the Rain 🌧️</button>

  </div>
</div>
  `);
}
else if(userSeason === 'spring' || userSeason === 'blooming spring') {
  document.writeln(`
  <div class="season-spring d-flex justify-content-center align-items-center position-relative" style="height:100vh; overflow: hidden;">
    <video autoplay muted loop class="bg-video position-absolute w-100 h-100" style="object-fit: cover; top:0; left:0; z-index:1;">
      <source src="./images/spring2.mp4" type="video/mp4">
    </video>

    <div class="card season-card p-4 text-center d-flex flex-column justify-content-center align-items-center shadow-lg" style="z-index:2; max-width: 350px; backdrop-filter: blur(10px); background: rgba(255,255,255,0.75); border-radius: 20px;">
      
      <video autoplay muted loop class="rounded mb-3" style="width: 100%; height: 150px; object-fit: cover; border-radius: 15px;">
        <source src="./images/spring.mp4" type="video/mp4">
      </video>

      <h5 class="fw-bold fs-4 mb-2 text-dark">
        Spring Blossoms 🌸
      </h5>

      <p class="mb-3 text-dark">
        Flowers bloom, birds sing, and every breeze brings fresh energy 🌱🐦. Perfect season for outdoor fun!
      </p>

      <div class="d-flex justify-content-around w-100 mb-3">
        <div class="d-flex flex-column align-items-center">
          <i class="fas fa-sun fs-4 text-warning"></i>
          <span>22°C</span>
        </div>
        <div class="d-flex flex-column align-items-center">
          <i class="fas fa-tint fs-4 text-info"></i>
          <span>40% Humidity</span>
        </div>
        <div class="d-flex flex-column align-items-center">
          <i class="fas fa-seedling fs-4 text-success"></i>
          <span>Gentle Breeze</span>
        </div>
      </div>

      <button class="btn btn-success fw-bold w-75">Explore Spring 🌿</button>
    </div>
  </div>
  `);
}
else if(userSeason === 'autumn' || userSeason === 'autumn leaves') {
  document.writeln(`
    <div class="season-autumn d-flex justify-content-center align-items-center position-relative" style="height:100vh; overflow: hidden;">
  <!-- Background Video -->
  <video autoplay muted loop class="bg-video position-absolute w-100 h-100" style="object-fit: cover; top:0; left:0; z-index:1;">
    <source src="./images/leaves.mp4" type="video/mp4">
  </video>

  <!-- Card Content -->
  <div class="card season-card p-4 text-center d-flex flex-column justify-content-center align-items-center shadow-lg" style="z-index:2; max-width: 350px; backdrop-filter: blur(10px); background: rgba(255,255,255,0.75); border-radius: 20px;">
    
    <!-- Card Image -->
    <img src="./images/hello_autumn.png" class="img-fluid rounded mb-3" alt="autumn card" style="max-height: 180px; object-fit: cover;">

    <!-- Card Title -->
    <h5 class="fw-bold fs-4 mb-2 text-dark">
      Autumn Calm 🍂
    </h5>

    <!-- Card Description -->
    <p class="mb-3 text-dark">
      Golden leaves fall gently, cool winds whisper, and nature feels at peace 🍁🌬️. Perfect time for cozy walks!
    </p>

    <!-- Weather Info Flex Row -->
    <div class="d-flex justify-content-around w-100 mb-3">
      <div class="d-flex flex-column align-items-center">
        <i class="fas fa-leaf fs-4 text-warning"></i>
        <span>18°C</span>
      </div>
      <div class="d-flex flex-column align-items-center">
        <i class="fas fa-tint fs-4 text-info"></i>
        <span>35% Humidity</span>
      </div>
      <div class="d-flex flex-column align-items-center">
        <i class="fas fa-wind fs-4 text-secondary"></i>
        <span>8 km/h</span>
      </div>
    </div>

    <!-- Button or CTA -->
    <button class="btn btn-warning fw-bold w-75">Enjoy Autumn 🍁</button>

  </div>
</div>
  `);
}
else {
  alert('Oops! That season is not in the list.');
}


