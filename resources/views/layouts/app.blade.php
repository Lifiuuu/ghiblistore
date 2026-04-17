<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page Wireframe</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Nunito:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/ghibli-utilities.css') }}">

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                            sans: ['Nunito', 'sans-serif'],
                            serif: ['Lora', 'serif'],
                        },
                        colors: {
                            'ghibli-cream': '#F9F6F0',
                            'ghibli-forest': '#2E4F3B',
                            'ghibli-sky': '#7BA7BC',
                            'ghibli-text': '#332E2C',
                            'ghibli-accent-yellow': '#F7E9A7',
                            'ghibli-accent-peach': '#FAD6C0',
                        },
                        boxShadow: {
                            'soft': '0 10px 30px rgba(46,79,59,0.08)',
                        }
                }
            }
        }
    </script>

    <!-- Layout animation/styles moved to public/css/ghibli-utilities.css -->

    <script src="https://cdn.tailwindcss.com"></script>
    @stack('styles')
    </head>

<body class="bg-ghibli-cream text-ghibli-text font-sans antialiased">

    @include('components.navbar')

    <main>
        @yield('content')
    </main>

    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <script defer src="{{ asset('js/hero-carousel.js') }}"></script>
    <script defer src="{{ asset('js/site-animations.js') }}"></script>
    @stack('scripts')
</body>
</html>