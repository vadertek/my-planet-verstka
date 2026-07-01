document.querySelectorAll('[data-include]').forEach(async (element) => {
    const url = element.dataset.include;

    if (!url) {
        return;
    }

    const response = await fetch(url);

    if (!response.ok) {
        console.error(`Failed to load component: ${url}`);
        return;
    }

    element.innerHTML = await response.text();
});

document.addEventListener('click', (event) => {
    const burger = event.target.closest('[data-burger]');

    if (!burger) {
        return;
    }

    const header = burger.closest('header');
    const menu = header?.querySelector('[data-mobile-menu]');
    const topLine = burger.querySelector('[data-burger-line="top"]');
    const middleLine = burger.querySelector('[data-burger-line="middle"]');
    const bottomLine = burger.querySelector('[data-burger-line="bottom"]');
    const isOpen = burger.getAttribute('aria-expanded') === 'true';

    burger.setAttribute('aria-expanded', String(!isOpen));

    menu?.classList.toggle('max-h-0', isOpen);
    menu?.classList.toggle('max-h-80', !isOpen);
    menu?.classList.toggle('-translate-y-2', isOpen);
    menu?.classList.toggle('translate-y-0', !isOpen);
    menu?.classList.toggle('opacity-0', isOpen);
    menu?.classList.toggle('opacity-100', !isOpen);
    menu?.classList.toggle('pointer-events-none', isOpen);
    menu?.classList.toggle('pointer-events-auto', !isOpen);

    topLine?.classList.toggle('translate-y-2', !isOpen);
    topLine?.classList.toggle('rotate-45', !isOpen);
    middleLine?.classList.toggle('opacity-0', !isOpen);
    bottomLine?.classList.toggle('-translate-y-2', !isOpen);
    bottomLine?.classList.toggle('-rotate-45', !isOpen);
});
