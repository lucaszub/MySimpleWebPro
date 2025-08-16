# 🆘 Guide de Dépannage - MySimpleWebPro

Guide complet pour résoudre les problèmes courants du site MySimpleWebPro.

## 🚨 **Problèmes Urgents**

### **Site ne se charge pas du tout**

#### **Symptômes**

- Page blanche
- Erreur 500/404
- Site inaccessible

#### **Solutions immédiates**

```bash
# 1. Vérifier que le serveur fonctionne
npm run dev

# 2. Vérifier les logs d'erreur
# Regarder la console du terminal

# 3. Vérifier le port
# Le site devrait être sur http://localhost:3000

# 4. Redémarrer le serveur
# Ctrl+C puis npm run dev
```

#### **Causes possibles**

- Serveur arrêté
- Port déjà utilisé
- Erreur de build
- Variables d'environnement manquantes

---

## 📧 **Problèmes avec le Formulaire de Contact**

### **Le formulaire ne fonctionne pas**

#### **Symptômes**

- Bouton "Envoyer" ne fait rien
- Pas de message de succès/erreur
- Console du navigateur affiche des erreurs

#### **Solutions**

```bash
# 1. Vérifier la console du navigateur (F12)
# Chercher les erreurs JavaScript

# 2. Vérifier que l'API fonctionne
curl http://localhost:3000/api/contact

# 3. Vérifier les logs du serveur
# Regarder le terminal où npm run dev est lancé

# 4. Tester l'API directement
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test"}'
```

#### **Causes possibles**

- Erreur JavaScript dans le formulaire
- API route non accessible
- Problème de validation
- Erreur de réseau

### **Message d'erreur "Erreur de connexion"**

#### **Symptômes**

- Message rouge "Erreur de connexion. Veuillez réessayer."
- Formulaire semble fonctionner mais affiche une erreur

#### **Solutions**

```bash
# 1. Vérifier la console du navigateur
# Chercher l'erreur exacte

# 2. Vérifier que l'API répond
curl http://localhost:3000/api/contact

# 3. Vérifier les logs du serveur
# Regarder les erreurs dans le terminal

# 4. Redémarrer le serveur
npm run dev
```

#### **Causes possibles**

- Erreur dans la fonction `handleSubmit`
- Problème avec `e.currentTarget.reset()`
- Erreur de validation côté serveur
- Problème de connexion à l'API

---

## 📨 **Problèmes avec l'Envoi d'Emails**

### **Aucun email reçu**

#### **Symptômes**

- Formulaire soumis avec succès
- Message "Message envoyé avec succès"
- Aucun email dans la boîte de réception

#### **Solutions**

```bash
# 1. Vérifier les logs du serveur
# Chercher "Résultat envoi:" dans le terminal

# 2. Vérifier la clé API Resend
cat .env.local
# Doit contenir : RESEND_API_KEY=re_...

# 3. Tester l'API directement
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test"}'

# 4. Vérifier le dashboard Resend
# Aller sur resend.com → Dashboard → Activity
```

#### **Causes possibles**

- Clé API Resend invalide
- Quota Resend dépassé
- Email dans le dossier spam
- Problème de configuration Resend

### **Erreur "Cannot read properties of undefined"**

#### **Symptômes**

- Erreur dans les logs du serveur
- API retourne 500 au lieu de 200
- Email non envoyé

#### **Solutions**

```bash
# 1. Vérifier le fichier de validation
cat app/lib/validation.ts

# 2. Vérifier que Zod est installé
npm list zod

# 3. Redémarrer le serveur
npm run dev

# 4. Tester avec des données valides
# Message d'au moins 5 caractères
```

#### **Causes possibles**

- Problème avec le schéma Zod
- Données de validation invalides
- Erreur dans la fonction de validation

---

## 🔧 **Problèmes de Configuration**

### **Variables d'environnement manquantes**

#### **Symptômes**

- Erreur "RESEND_API_KEY is not defined"
- API ne fonctionne pas
- Serveur ne démarre pas

#### **Solutions**

```bash
# 1. Vérifier que .env.local existe
ls -la .env.local

# 2. Vérifier le contenu
cat .env.local

# 3. Créer le fichier si nécessaire
echo "RESEND_API_KEY=re_votre_clé_ici" > .env.local

# 4. Redémarrer le serveur
npm run dev
```

#### **Causes possibles**

- Fichier `.env.local` manquant
- Clé API mal formatée
- Fichier dans `.gitignore`

### **Dépendances manquantes**

#### **Symptômes**

- Erreur "Cannot find module 'resend'"
- Erreur "Cannot find module 'zod'"
- Build échoue

#### **Solutions**

```bash
# 1. Vérifier les dépendances installées
npm list resend zod

# 2. Réinstaller les dépendances
npm install

# 3. Vérifier package.json
cat package.json

# 4. Installer manuellement si nécessaire
npm install resend zod
```

#### **Causes possibles**

- `node_modules` corrompu
- Dépendances non installées
- Version de Node.js incompatible

---

## 🌐 **Problèmes de Déploiement**

### **Build échoue en production**

#### **Symptômes**

- Déploiement Vercel/Netlify échoue
- Erreur de build
- Site non accessible

#### **Solutions**

```bash
# 1. Tester le build localement
npm run build

# 2. Vérifier les erreurs de build
# Regarder la sortie de la commande

# 3. Vérifier la version de Node.js
node --version
# Doit être 18+ pour Next.js 15

# 4. Vérifier les variables d'environnement
# S'assurer qu'elles sont configurées sur Vercel/Netlify
```

#### **Causes possibles**

- Erreur de syntaxe dans le code
- Dépendances manquantes
- Variables d'environnement non configurées
- Version de Node.js incompatible

### **Site déployé mais formulaire ne fonctionne pas**

#### **Symptômes**

- Site accessible
- Formulaire visible
- Envoi échoue

#### **Solutions**

```bash
# 1. Vérifier les variables d'environnement en production
# Vercel : Dashboard → Settings → Environment Variables
# Netlify : Site settings → Environment variables

# 2. Tester l'API en production
curl https://votre-domaine.com/api/contact

# 3. Vérifier les logs de production
# Vercel : Dashboard → Functions → Logs
# Netlify : Site settings → Functions → Logs

# 4. Vérifier la configuration Resend
# S'assurer que le domaine est vérifié
```

#### **Causes possibles**

- Variables d'environnement non configurées en production
- Domaine Resend non vérifié
- Problème de CORS
- Erreur dans l'API route

---

## 📱 **Problèmes d'Interface**

### **Formulaire non responsive**

#### **Symptômes**

- Formulaire mal affiché sur mobile
- Boutons coupés
- Texte illisible

#### **Solutions**

```bash
# 1. Tester sur différents appareils
# Utiliser les outils de développement du navigateur

# 2. Vérifier les classes Tailwind
# S'assurer que les classes responsive sont utilisées

# 3. Vérifier le CSS global
cat app/globals.css

# 4. Tester avec différentes tailles d'écran
# F12 → Toggle device toolbar
```

#### **Causes possibles**

- Classes Tailwind manquantes
- CSS global qui casse le responsive
- Composants non adaptés mobile

### **Animations qui ne fonctionnent pas**

#### **Symptômes**

- Pas d'effets de révélation
- Transitions bloquées
- Performance dégradée

#### **Solutions**

```bash
# 1. Vérifier que JavaScript est activé
# Désactiver les bloqueurs de scripts

# 2. Vérifier la console pour les erreurs
# Chercher les erreurs JavaScript

# 3. Vérifier les classes CSS
# S'assurer que les classes d'animation sont présentes

# 4. Vérifier la performance
# Utiliser les outils de développement
```

#### **Causes possibles**

- JavaScript désactivé
- Bloqueur de scripts
- Erreur dans le code d'animation
- Performance dégradée

---

## 🔍 **Diagnostic Avancé**

### **Logs détaillés**

```bash
# 1. Activer les logs détaillés
# Dans app/api/contact/route.ts, ajouter :
console.log("🔍 Debug complet:", {
  body,
  validation,
  email,
  result
});

# 2. Vérifier les logs du serveur
# Regarder le terminal où npm run dev est lancé

# 3. Vérifier les logs du navigateur
# F12 → Console → Regarder les erreurs

# 4. Vérifier les logs de production
# Dashboard Vercel/Netlify → Logs
```

### **Tests de diagnostic**

```bash
# 1. Test de l'API
curl -v http://localhost:3000/api/contact

# 2. Test de validation
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"","email":"invalid","message":"short"}'

# 3. Test de build
npm run build

# 4. Test de production
npm start
```

---

## 📞 **Support et Ressources**

### **Quand demander de l'aide**

- ✅ **Toutes les solutions** de ce guide ont été essayées
- ✅ **Logs d'erreur** collectés
- ✅ **Symptômes** clairement décrits
- ✅ **Environnement** précisé (local/production)

### **Informations à fournir**

```bash
# 1. Version de Node.js
node --version

# 2. Version de npm
npm --version

# 3. Logs d'erreur
# Copier-coller les erreurs exactes

# 4. Environnement
# Local ou production, OS, navigateur

# 5. Étapes reproduites
# Décrire exactement ce qui a été fait
```

### **Ressources utiles**

- **Documentation Next.js** : [nextjs.org/docs](https://nextjs.org/docs)
- **Documentation Resend** : [resend.com/docs](https://resend.com/docs)
- **Documentation Tailwind** : [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **GitHub Issues** : Créer une issue avec tous les détails

---

## 🎯 **Checklist de Dépannage**

### **Problème identifié**

- [ ] **Symptômes** clairement décrits
- [ ] **Logs d'erreur** collectés
- [ ] **Environnement** précisé

### **Solutions essayées**

- [ ] **Redémarrage** du serveur
- [ ] **Vérification** des variables d'environnement
- [ ] **Test** de l'API directement
- [ ] **Vérification** des dépendances

### **Résolution**

- [ ] **Problème résolu** localement
- [ ] **Solution documentée** pour l'avenir
- [ ] **Tests** effectués pour éviter la récurrence

---

**🆘 N'oubliez pas : La plupart des problèmes peuvent être résolus en redémarrant le serveur et en vérifiant les variables d'environnement !**
