
/* ============================================================
   PORTFOLIO — IMAGE COMPLÈTE AU SURVOL

   Le script lit l'attribut data-hover-image du bouton.
   Il vérifie que le PNG existe AVANT de l'afficher.

   Emplacement habituel :
   assets/images/accueil/hologrammes/projets-survol.png

   Emplacement alternatif également accepté :
   assets/images/accueil/projets-survol.png

   Les clics et l'ouverture des rubriques restent dans app.js.
============================================================ */

(() => {
  function initialiserSurvol() {
    const accueil = document.getElementById("accueil");
    const imageSurvol = document.getElementById("scene-hover-image");

    if (!accueil || !imageSurvol) {
      console.warn("[Hologrammes] Accueil ou image de survol introuvable dans index.html.");
      return;
    }

    const boutons = accueil.querySelectorAll(
      ".scene-hotspot[data-hover-image]"
    );

    if (!boutons.length) {
      console.warn("[Hologrammes] Aucune zone de survol avec data-hover-image.");
      return;
    }

    const cacheImages = new Map();
    let demandeActive = 0;

    function cheminsPossibles(chemin) {
      const nomFichier = chemin.split("/").pop();
      return [...new Set([
        chemin,
        `assets/images/accueil/hologrammes/${nomFichier}`,
        `assets/images/accueil/${nomFichier}`
      ])];
    }

    function chargerImage(chemin) {
      if (cacheImages.has(chemin)) {
        return cacheImages.get(chemin);
      }

      const promesse = new Promise((resolve) => {
        const image = new Image();

        image.onload = () => resolve(true);
        image.onerror = () => resolve(false);
        image.src = chemin;
      });

      // Les images absentes ne sont pas mises en cache :
      // si elles sont ajoutées ensuite, on peut retenter.
      cacheImages.set(chemin, promesse);
      promesse.then((ok) => {
        if (!ok) cacheImages.delete(chemin);
      });

      return promesse;
    }

    function desactiverSurvol() {
      demandeActive += 1;
      imageSurvol.classList.remove("is-visible");
      accueil.classList.remove("is-scene-hovered");
    }

    async function activerSurvol(bouton) {
      const chemin = bouton.dataset.hoverImage;
      if (!chemin || accueil.hidden) return;

      const numeroDemande = ++demandeActive;
      const candidats = cheminsPossibles(chemin);

      for (const candidat of candidats) {
        const charge = await chargerImage(candidat);

        // Ne pas rallumer un bouton que la souris a déjà quitté.
        if (numeroDemande !== demandeActive || accueil.hidden) return;

        if (charge) {
          imageSurvol.src = candidat;
          imageSurvol.classList.add("is-visible");
          accueil.classList.add("is-scene-hovered");
          return;
        }
      }

      console.warn(
        `[Hologrammes] Image de survol introuvable pour ${bouton.getAttribute("aria-label") || "un bouton"}. ` +
        `Chemins vérifiés : ${candidats.join(" | ")}`
      );
    }

    boutons.forEach((bouton) => {
      bouton.addEventListener("pointerenter", (evenement) => {
        if (evenement.pointerType === "mouse" || evenement.pointerType === "pen") {
          activerSurvol(bouton);
        }
      });

      bouton.addEventListener("pointerleave", desactiverSurvol);
      bouton.addEventListener("focus", () => activerSurvol(bouton));
      bouton.addEventListener("blur", desactiverSurvol);
      bouton.addEventListener("click", desactiverSurvol);
    });

    window.addEventListener("blur", desactiverSurvol);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiserSurvol, { once: true });
  } else {
    initialiserSurvol();
  }
})();
