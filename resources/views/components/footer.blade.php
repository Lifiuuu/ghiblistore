<footer class="section bg-ghibli-forest text-ghibli-cream relative overflow-hidden">
  
  <div class="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-[#F7E9A7]/10 rounded-full blur-[80px] animate-pulse-glow z-0"></div>
  <div class="absolute top-[-20%] right-[-5%] w-[400px] h-[400px] bg-[#FAD6C0]/10 rounded-full blur-[100px] animate-pulse-glow z-0" style="animation-delay: 3s;"></div>

  @for ($i = 0; $i < 15; $i++)
      @php
          $size = rand(10, 24);
          $top = rand(-5, 105);
          $left = rand(-5, 105);
          $delay = rand(0, 60) / 10;
          $rotation = rand(0, 360);
          $blur = rand(0, 1);
          
          $colors = ['bg-[#F7E9A7]/20', 'bg-[#7BA7BC]/20', 'bg-[#FAD6C0]/15', 'bg-[#ffffff]/10'];
          $color = $colors[array_rand($colors)];
          
          $anims = ['animate-float-slow', 'animate-float-medium'];
          $anim = $anims[array_rand($anims)];
      @endphp
      <div class="absolute {{ $color }} shape-leaf {{ $anim }} z-0"
           style="top: {{ $top }}%; left: {{ $left }}%; width: {{ $size }}px; height: {{ $size }}px; transform: rotate({{ $rotation }}deg); animation-delay: {{ $delay }}s; filter: blur({{ $blur }}px);">
      </div>
  @endfor

  @for ($i = 0; $i < 40; $i++)
      @php
          $size = rand(2, 5);
          $top = rand(-2, 102);
          $left = rand(-2, 102);
          $delay = rand(0, 50) / 10;
          
          $colors = ['bg-[#F7E9A7]', 'bg-[#FAD6C0]', 'bg-[#ffffff]', 'bg-[#F7E9A7]/60'];
          $color = $colors[array_rand($colors)];
          
          $anims = ['animate-pulse-glow', 'animate-float-slow'];
          $anim = $anims[array_rand($anims)];
      @endphp
      <div class="absolute rounded-full {{ $color }} {{ $anim }} z-0 shadow-[0_0_8px_rgba(247,233,167,0.6)]"
           style="top: {{ $top }}%; left: {{ $left }}%; width: {{ $size }}px; height: {{ $size }}px; animation-delay: {{ $delay }}s;">
      </div>
  @endfor
  <div class="section-inner py-12 relative z-10">
    <div class="grid grid-cols-1 md:grid-cols-3 items-center text-sm gap-8">
      
      <div class="flex justify-center md:justify-start space-x-6">
        <a href="#features" class="text-ghibli-cream/80 hover:text-ghibli-cream transition">Filmography</a>
        <a href="https://www.ghibli-museum.jp/en/" target="_blank" rel="noopener noreferrer" class="text-ghibli-cream/80 hover:text-ghibli-cream transition">The Museum</a>
        <a href="https://www.ghibli.jp/" target="_blank" rel="noopener noreferrer" class="text-ghibli-cream/80 hover:text-ghibli-cream transition">Archives</a>
      </div>

      <div class="flex justify-center order-first md:order-none">
        <div class="font-serif text-2xl tracking-widest uppercase">The Ghibli Atelier</div>
      </div>

      <div class="flex justify-center md:justify-end space-x-6">
        <a href="#about" class="text-ghibli-cream/80 hover:text-ghibli-cream transition">Our Story</a>
        <a href="https://www.ghibli.jp/info/" target="_blank" rel="noopener noreferrer" class="text-ghibli-cream/80 hover:text-ghibli-cream transition">News</a>
        <a href="#help" class="text-ghibli-cream/80 hover:text-ghibli-cream transition">Help & FAQ</a>
      </div>

    </div>

    <hr class="border-t border-ghibli-cream/10 my-8 w-full">

    <div class="flex justify-center space-x-4 mb-6">
      <span title="Forest Green" class="w-4 h-4 bg-[#2E4F3B] border border-ghibli-cream/30 rounded-full shadow-sm"></span>
      <span title="Sky Blue" class="w-4 h-4 bg-[#7BA7BC] border border-ghibli-cream/30 rounded-full shadow-sm"></span>
      <span title="Sunset Peach" class="w-4 h-4 bg-[#FAD6C0] border border-ghibli-cream/30 rounded-full shadow-sm"></span>
      <span title="Ghibli Gold" class="w-4 h-4 bg-[#F7E9A7] border border-ghibli-cream/30 rounded-full shadow-sm"></span>
      <span title="Soft Cream" class="w-4 h-4 bg-[#F9F6F0] border border-ghibli-cream/30 rounded-full shadow-sm"></span>
    </div>

    <div class="text-center text-xs tracking-wide text-ghibli-cream/60">
        © 1985 — 2026 Studio Ghibli. Crafted with magic and heart.
        <div class="mt-2 space-x-4">
            <a href="#" class="hover:underline">Privacy Policy</a>
            <span>•</span>
            <a href="#" class="hover:underline">Terms of Wonder</a>
        </div>
    </div>
  </div>
</footer>