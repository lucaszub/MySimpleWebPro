# 🚀 Guide de Déploiement - MySimpleWebPro

Guide complet pour déployer le site MySimpleWebPro en production.

## 📋 **Prérequis**

### **Avant le déploiement**

- [ ] **Code testé** et fonctionnel en local
- [ ] **Variables d'environnement** configurées
- [ ] **Compte Resend** actif avec clé API
- [ ] **Domaine** configuré (optionnel)
- **Git** installé et configuré

### **Vérifications locales**

```bash
# Tester le build
npm run build

# Vérifier que tout fonctionne
npm start

# Tester l'API de contact
curl http://localhost:3000/api/contact
```

## 🌐 **Option 1 : Déploiement Vercel (Recommandé)**

### **Avantages**

- ✅ **Intégration native** avec Next.js
- ✅ **Déploiement automatique** depuis Git
- ✅ **SSL gratuit** et CDN global
- ✅ **Variables d'environnement** sécurisées
- ✅ **Preview deployments** pour chaque PR

### **Étapes de déploiement**

#### **1. Installation de Vercel CLI**

```bash
# Installation globale
npm i -g vercel

# Vérifier l'installation
vercel --version
```

#### **2. Connexion à Vercel**

```bash
# Se connecter à votre compte
vercel login

# Suivre les instructions dans le navigateur
```

#### **3. Déploiement initial**

```bash
# Dans le dossier du projet
vercel

# Répondre aux questions :
# - Set up and deploy? → Yes
# - Which scope? → Votre compte
# - Link to existing project? → No
# - Project name? → mysimplewebpro (ou laissez le nom par défaut)
# - Directory? → ./
# - Override settings? → No
```

#### **4. Configuration des variables d'environnement**

```bash
# Ajouter la clé API Resend
vercel env add RESEND_API_KEY

# Vérifier les variables
vercel env ls
```

#### **5. Déploiement en production**

```bash
# Déployer en production
vercel --prod

# Ou depuis le dashboard Vercel
# Aller sur vercel.com → Votre projet → Deployments → Promote to Production
```

### **Configuration avancée Vercel**

#### **Fichier `vercel.json` (optionnel)**

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "env": {
    "RESEND_API_KEY": "@resend_api_key"
  }
}
```

#### **Domaines personnalisés**

1. **Dashboard Vercel** → Votre projet → Settings → Domains
2. **Ajouter votre domaine** : `mysimplewebpro.com`
3. **Configurer les DNS** selon les instructions Vercel
4. **Attendre la propagation** (peut prendre 24-48h)

## 🌐 **Option 2 : Déploiement Netlify**

### **Avantages**

- ✅ **Gratuit** pour les projets personnels
- ✅ **Déploiement automatique** depuis Git
- ✅ **Formulaires intégrés** (si besoin)
- ✅ **SSL gratuit**

### **Étapes de déploiement**

#### **1. Préparation du build**

```bash
# Build de production
npm run build

# Vérifier que le dossier .next est créé
ls -la .next
```

#### **2. Déploiement via Git**

1. **Pousser votre code** sur GitHub
2. **Aller sur [Netlify](https://netlify.com)**
3. **"New site from Git"**
4. **Connecter votre repo GitHub**
5. **Configurer le build** :
   - **Build command** : `npm run build`
   - **Publish directory** : `.next`
   - **Node version** : `18` ou `20`

#### **3. Variables d'environnement**

1. **Site settings** → Environment variables
2. **Ajouter** : `RESEND_API_KEY` = `votre_clé_api`
3. **Redéployer** le site

## 🔧 **Configuration de Production**

### **Variables d'environnement**

```bash
# Production (.env.production ou dashboard)
RESEND_API_KEY=re_votre_clé_api_production
NODE_ENV=production
```

### **Configuration Resend pour Production**

#### **1. Vérifier votre domaine**

```bash
# Dans le dashboard Resend
# Domains → Add Domain → mysimplewebpro.com
# Suivre les instructions DNS
```

#### **2. Mettre à jour l'API**

```typescript
// app/api/contact/route.ts
const notificationEmail = {
  from: "contact@mysimplewebpro.com", // Votre domaine vérifié
  to: "zubiarrainlucas@gmail.com",
  // ... reste du code
};
```

#### **3. Tester en production**

```bash
# Tester l'API déployée
curl -X POST https://votre-domaine.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test production"}'
```

## 📊 **Monitoring et Maintenance**

### **Vérifications post-déploiement**

- [ ] **Site accessible** et fonctionnel
- [ ] **Formulaire de contact** fonctionne
- [ ] **Emails reçus** dans votre boîte
- [ ] **Performance** satisfaisante
- [ ] **Mobile responsive** vérifié

### **Outils de monitoring**

#### **Vercel Analytics**

- **Performance** du site
- **Core Web Vitals**
- **Erreurs** et exceptions

#### **Resend Dashboard**

- **Taux de délivrabilité**
- **Emails envoyés/réussis**
- **Logs d'erreur**

### **Maintenance régulière**

```bash
# Mise à jour des dépendances
npm update

# Vérification des vulnérabilités
npm audit

# Redéploiement si nécessaire
vercel --prod
```

## 🆘 **Dépannage Production**

### **Problèmes courants**

#### **Site ne se charge pas**

```bash
# Vérifier les logs Vercel/Netlify
# Vérifier que le build réussit
# Vérifier les variables d'environnement
```

#### **Formulaire ne fonctionne pas**

```bash
# Vérifier RESEND_API_KEY en production
# Tester l'API directement
# Vérifier les logs du serveur
```

#### **Emails non reçus**

```bash
# Vérifier le dashboard Resend
# Vérifier la configuration du domaine
# Tester avec l'API Resend directement
```

### **Rollback en cas de problème**

```bash
# Vercel : Dashboard → Deployments → Revert
# Netlify : Dashboard → Deploys → Revert
```

## 🔒 **Sécurité**

### **Bonnes pratiques**

- ✅ **Variables d'environnement** dans le dashboard
- ✅ **Clés API** jamais dans le code
- ✅ **HTTPS** obligatoire
- ✅ **Validation** côté serveur maintenue
- ✅ **Rate limiting** (à implémenter si nécessaire)

### **Audit de sécurité**

```bash
# Vérifier les vulnérabilités
npm audit

# Mettre à jour les dépendances critiques
npm audit fix

# Vérifier les permissions des fichiers
ls -la
```

## 📈 **Optimisations Post-Déploiement**

### **Performance**

- [ ] **Images optimisées** avec next/image
- [ ] **Lazy loading** des composants
- [ ] **Bundle analyzer** pour optimiser le code
- [ ] **CDN** configuré

### **SEO**

- [ ] **Meta tags** configurés
- [ ] **Sitemap** généré
- [ ] **Robots.txt** configuré
- [ ] **Google Analytics** intégré

## 🎯 **Checklist de Déploiement**

### **Pré-déploiement**

- [ ] Code testé en local
- [ ] Build réussi
- [ ] Variables d'environnement prêtes
- [ ] Compte Resend configuré

### **Déploiement**

- [ ] Site déployé et accessible
- [ ] Variables d'environnement configurées
- [ ] Formulaire de contact testé
- [ ] Emails reçus

### **Post-déploiement**

- [ ] Monitoring configuré
- [ ] Performance vérifiée
- [ ] Mobile responsive testé
- [ ] Documentation mise à jour

## 📞 **Support**

- **Documentation** : Ce guide
- **Vercel** : [vercel.com/docs](https://vercel.com/docs)
- **Netlify** : [netlify.com/docs](https://netlify.com/docs)
- **Resend** : [resend.com/docs](https://resend.com/docs)
- **Issues** : GitHub Issues de votre projet

---

**🚀 Prêt pour la production ! Votre site MySimpleWebPro sera bientôt en ligne !**
