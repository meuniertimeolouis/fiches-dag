#!/usr/bin/env bash
# Chiffre _site/reviser/index.html avec le mot de passe fourni dans SITE_PASSWORD.
# Le sel est public (il ne protège rien seul) mais doit rester fixe pour que
# « Se souvenir de moi » survive aux redéploiements.
set -euo pipefail
: "${SITE_PASSWORD:?SITE_PASSWORD manquant : le site ne sera pas publié en clair}"
npx -y staticrypt@3.5.4 _site/reviser/index.html -d _site/reviser \
  -p "$SITE_PASSWORD" --short --remember 0 --config false \
  --salt 7f3c9a1e5b2d48f6a0c3e9b17d4f2a86 \
  --template-title "Réviser · accès privé" \
  --template-instructions "Ce site est privé. Entrez le mot de passe pour l'ouvrir." \
  --template-placeholder "Mot de passe" \
  --template-remember "Se souvenir de moi sur cet appareil" \
  --template-button "Ouvrir" \
  --template-error "Mot de passe incorrect." \
  --template-color-primary "#14284B" --template-color-secondary "#FAF8F4"
# « Se souvenir de moi » coché par défaut.
sed -i 's|<input id="staticrypt-remember" type="checkbox" name="remember" />|<input id="staticrypt-remember" type="checkbox" name="remember" checked />|' _site/reviser/index.html
# Garde-fou : la page publiée ne doit plus contenir le site en clair.
if grep -q 'id="main"' _site/reviser/index.html; then
  echo "La page n'est pas chiffrée : publication annulée." >&2; exit 1
fi
