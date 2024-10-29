document.querySelectorAll("[class^='portal svelte-']").forEach(element => {
    console.log("Hittad portal-komponent:", element); // Logga elementet
    element.style.display = 'none';
});

document.querySelectorAll("[class^='free-footer svelte-']").forEach(element => {
    console.log("Hittad free-footer-komponent:", element); // Logga elementet
    element.style.display = 'none';
});
