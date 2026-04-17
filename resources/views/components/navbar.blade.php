<nav class="bg-ghibli-cream relative w-full z-50" x-data="{ mobileMenuOpen: false }">
    <div class="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div class="flex justify-between items-center h-[72px]">

            <div class="flex-shrink-0 flex items-center">
                <a href="#" class="font-serif text-2xl tracking-wide text-ghibli-forest"> <!-- Logo: warm serif -->
                    Atelier
                </a>
            </div>

            <div class="hidden md:flex items-center space-x-8">
                <a href="#features" class="text-lg text-ghibli-text hover:opacity-90 transition">Discover</a>
                <a href="#stories" class="text-lg text-ghibli-text hover:opacity-90 transition">Stories</a>
                <a href="https://www.ghibli.jp/works/" target="_blank" rel="noopener noreferrer" class="text-lg text-ghibli-text hover:opacity-90 transition">Collections</a>
                <a href="#about" class="text-lg text-ghibli-text hover:opacity-90 transition">About</a>

                <a href="#subscribe" class="ml-4 bg-ghibli-forest text-ghibli-cream radius-2xl px-6 py-2 text-lg shadow-lg hover:opacity-95 transition">
                    Join Us
                </a>
            </div>

            <div class="md:hidden flex items-center">
                <button @click="mobileMenuOpen = !mobileMenuOpen" type="button" class="text-ghibli-text hover:opacity-90 focus:outline-none">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path x-show="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        <path x-show="mobileMenuOpen" x-cloak stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <div x-show="mobileMenuOpen" x-cloak x-transition class="md:hidden absolute top-[72px] left-0 w-full bg-ghibli-cream shadow-lg rounded-b-2xl">
        <div class="px-6 pt-4 pb-6 space-y-4">
            <a href="#features" class="block text-lg text-ghibli-text hover:opacity-90">Discover</a>
            <a href="#stories" class="block text-lg text-ghibli-text hover:opacity-90">Stories</a>
            <a href="https://www.ghibli.jp/works/" target="_blank" rel="noopener noreferrer" class="block text-lg text-ghibli-text hover:opacity-90">Collections</a>
            <a href="#about" class="block text-lg text-ghibli-text hover:opacity-90">About</a>
            <a href="#subscribe" class="block w-full text-center bg-ghibli-forest text-ghibli-cream radius-2xl px-6 py-2 text-lg shadow-lg mt-4">
                Join Us
            </a>
        </div>
    </div>
</nav>