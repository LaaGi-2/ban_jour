

function createNavbar() {
    return `
<header id="navbar" class="fixed inset-x-0 top-0 z-50 bg-[#00000080] shadow-md transition-all duration-300 m-4 rounded-lg">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">

        <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img id="navbar-logo" class="h-20 w-auto absolute top-1" src="images/logos/logo-transparent.png" alt=""/>
            </a>
        </div>
        <div class="flex lg:hidden">
            <button id="mobile-menu-button" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Open main menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-6">
            <a href="#" class="nav-link text-sm font-semibold leading-6 text-white">Beranda</a>
            <a href="#" class="nav-link text-sm font-semibold leading-6 text-white">Potensi</a>
            <a href="#" class="nav-link text-sm font-semibold leading-6 text-white">Map</a>
            <div class="relative inline-block text-left">
                <div>
                    <button id="menu-button" type="button" class="inline-flex w-full justify-normal gap-x-1 rounded-md bg-white px-3 py-1 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" aria-haspopup="true" aria-expanded="false">
                        Keberagaman
                        <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div id="dropdown-menu" class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                    <div class="py-1" role="none">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1">Kesenian</a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1">Wisata</a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1">Kuliner</a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1">Budaya</a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1">Karya Seni</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img class="h-8 w-auto" src="images/logos/logo_bwi_small.png" alt=""/>
            </a>
        </div>
    </nav>
    <div id="mobile-menu" class="lg:hidden hidden" role="dialog" aria-modal="true">
        <div class="fixed inset-0 z-50 bg-black/30"></div>
        <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
                <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <img class="h-8 w-auto" src="images/logos/logo_bwi_small.png" alt="">
                </a>
                <button id="close-menu-button" type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                    <span class="sr-only">Close menu</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10">
                    <div class="space-y-2 py-6">
                        <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
                        <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                        <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
                        <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
                    </div>
                    <div class="py-6">
                        <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>`;
}

// Load the navbar into the page
async function loadNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    navbarContainer.innerHTML = createNavbar();

    // Add event listeners
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuButton = document.getElementById('close-menu-button');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const menuButton = document.getElementById('menu-button');
    const navLinks = document.querySelectorAll('.nav-link');
    const logo = document.getElementById('navbar-logo');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    closeMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });

    menuButton.addEventListener('click', () => {
        const isOpen = dropdownMenu.classList.contains('hidden');
        dropdownMenu.classList.toggle('hidden', !isOpen);
        menuButton.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', (event) => {
        if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.add('hidden');
            menuButton.setAttribute('aria-expanded', 'false');
        }
    });

    // Scroll effect for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbarContainer.querySelector('#navbar').classList.remove('bg-[#00000080]', 'm-4', 'rounded-lg');
            navbarContainer.querySelector('#navbar').classList.add('bg-white', 'm-0', 'rounded-none');
            logo.src = 'images/logos/logo.png'; // Change to the new logo
            navLinks.forEach(link => {
                link.classList.add('text-gray-900');
                link.classList.remove('text-white');
            });
        } else {
            navbarContainer.querySelector('#navbar').classList.add('bg-[#00000080]', 'm-4', 'rounded-lg');
            navbarContainer.querySelector('#navbar').classList.remove('bg-white', 'm-0', 'rounded-none');
            logo.src = 'images/logos/logo-transparent.png'; // Change back to the original logo
            navLinks.forEach(link => {
                link.classList.remove('text-gray-900');
                link.classList.add('text-white');
            });
        }
    });
}

// Call the function to load the navbar
loadNavbar();
