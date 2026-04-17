<section id="hero" class="section bg-ghibli-cream relative overflow-hidden">
  
<div class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#7BA7BC]/30 rounded-full blur-[100px] animate-pulse-glow z-0"></div>
  <div class="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#FAD6C0]/30 rounded-full blur-[120px] animate-pulse-glow z-0" style="animation-delay: 2s;"></div>
  <div class="absolute top-[20%] left-[30%] w-[400px] h-[400px] bg-[#F7E9A7]/25 rounded-full blur-[80px] animate-pulse-glow z-0" style="animation-delay: 4s;"></div>

  @for ($i = 0; $i < 20; $i++)
      @php
          $size = rand(12, 32);
          $top = rand(-10, 110);
          $left = rand(-10, 110);
          $delay = rand(0, 50) / 10;
          $rotation = rand(0, 360);
          $blur = rand(0, 1); // Blur dikurangi maksimal 1px agar bentuknya lebih tegas
          
          // Warna dedaunan dibuat jauh lebih pekat
          $colors = ['bg-[#2E4F3B]/40', 'bg-[#2E4F3B]/50', 'bg-[#F7E9A7]/60', 'bg-[#7BA7BC]/40'];
          $color = $colors[array_rand($colors)];
          
          $anims = ['animate-float-slow', 'animate-float-medium'];
          $anim = $anims[array_rand($anims)];
      @endphp
      <div class="absolute {{ $color }} shape-leaf {{ $anim }} z-0"
           style="top: {{ $top }}%; left: {{ $left }}%; width: {{ $size }}px; height: {{ $size }}px; transform: rotate({{ $rotation }}deg); animation-delay: {{ $delay }}s; filter: blur({{ $blur }}px);">
      </div>
  @endfor

  @for ($i = 0; $i < 60; $i++)
      @php
          $size = rand(2, 6);
          $top = rand(-5, 105);
          $left = rand(-5, 105);
          $delay = rand(0, 50) / 10;
          $blur = rand(0, 1); // Blur dikurangi agar titik cahayanya tajam
          
          // Warna sihir dibuat sangat terang dan jelas
          $colors = ['bg-[#F7E9A7]/90', 'bg-[#FAD6C0]/90', 'bg-[#ffffff]', 'bg-[#332E2C]/50', 'bg-[#7BA7BC]/80'];
          $color = $colors[array_rand($colors)];
          
          $anims = ['animate-pulse-glow', 'animate-float-slow', 'animate-float-medium'];
          $anim = $anims[array_rand($anims)];
      @endphp
      <div class="absolute rounded-full {{ $color }} {{ $anim }} z-0"
           style="top: {{ $top }}%; left: {{ $left }}%; width: {{ $size }}px; height: {{ $size }}px; animation-delay: {{ $delay }}s; filter: blur({{ $blur }}px);">
      </div>
  @endfor

  <div class="section-inner relative text-center z-10">
    <div class="max-w-4xl mx-auto pt-20"> <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-ghibli-forest">Finding Magic in the Ordinary</h1>
      <p class="mt-6 text-base md:text-lg max-w-3xl mx-auto text-ghibli-text/90">More than just animation, Studio Ghibli creates breathtaking worlds where nature breathes, magic is real, and human emotions resonate deeply. Step into a realm of wonder.</p>
      <div class="mt-8">
        <a href="https://r.search.yahoo.com/_ylt=AwrOro.BBeJpHAIAPKRXNyoA;_ylu=Y29sbwNncTEEcG9zAzMEdnRpZAMEc2VjA3Ny/RV=2/RE=1777629826/RO=10/RU=https%3a%2f%2fwww.ghibli.jp%2f%3flang%3den/RK=2/RS=FUXdTBTVGlLaepvSbprbrD9Ceng-" target="_blank" rel="noopener noreferrer" class="inline-block bg-ghibli-forest text-ghibli-cream px-8 py-3 radius-3xl shadow-lg">Explore the Studio</a>
      </div>
    </div>

    <div class="mt-16 mx-auto w-full max-w-4xl radius-2xl shadow-soft overflow-hidden mb-12">
      <div class="relative w-full bg-ghibli-cream hero-carousel pb-[56.25%]" tabindex="0">

        <div class="absolute left-4 top-4 z-20 flex space-x-2 carousel-dots" aria-hidden="false"></div>

        <div class="absolute inset-0 carousel-slides">
          <div class="hero-slide absolute inset-0" data-index="0">
            <img src="https://i.pinimg.com/originals/05/16/ba/0516ba877c910bf80e08cc14a9a69e6f.jpg" alt="Ghibli style lush green forest" class="w-full h-full object-cover radius-2xl" />
          </div>
          <div class="hero-slide absolute inset-0" data-index="1">
            <img src="https://i.pinimg.com/originals/c2/9b/d7/c29bd79d22dc800beb6f942edef9ece5.png" alt="Cozy studio interior with warm tones" class="w-full h-full object-cover radius-2xl" />
          </div>
          <div class="hero-slide absolute inset-0" data-index="2">
            <img src="https://thumb.viva.id/vivabanyuwangi/1265x711/2025/05/22/682eba65960d9-api-ajaib-calcifer-roh-di-balik-keajaiban-kastil-howl_banyuwangi.jpg" alt="Forest trail with dappled light" class="w-full h-full object-cover radius-2xl" />
          </div>
        </div>

        <button class="sr-only carousel-prev" aria-hidden="true">Prev</button>
        <button class="sr-only carousel-next" aria-hidden="true">Next</button>
      </div>
    </div>
  </div>
</section>