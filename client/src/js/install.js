const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    // Get rid of the hidden class from the button
    butInstall.classList.toggle('hidden',false);
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        // No install prompt available, so return early
        return;
    }
    // Show prompt
        promptEvent.prompt();
        // Reset the deferred prompt variable since it can only be used once
        window.deferredPrompt = null;
        butInstall.classList.toggle('hidden', true);
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
