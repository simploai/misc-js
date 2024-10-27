document.addEventListener("DOMContentLoaded", function() {
    // Hitta och dölj element med klasser som börjar på 'portal svelte-'
    document.querySelectorAll("[class^='portal svelte-']").forEach(element => {
        console.log("Hittad portal-komponent:", element); // Logga elementet
        element.style.display = 'none';
    });

    // Hitta och dölj element med klasser som börjar på 'free-footer svelte-'
    document.querySelectorAll("[class^='free-footer svelte-']").forEach(element => {
        console.log("Hittad free-footer-komponent:", element); // Logga elementet
        element.style.display = 'none';
    });
});
