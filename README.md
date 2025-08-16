# 🚀 MySimpleWebPro - Site Web

Site web professionnel pour l'agence MySimpleWebPro, spécialisée dans la création de sites web simples et efficaces.

## ✨ **Fonctionnalités**

- 🏠 **Page d'accueil** avec présentation des services
- 💰 **Page tarifs** détaillant les offres
- 👤 **Page à propos** avec présentation de l'équipe
- 📧 **Formulaire de contact** fonctionnel avec envoi d'emails
- 📱 **Design responsive** et moderne
- ⚡ **Performance optimisée** avec Next.js 15

## 📧 **Système de Contact**

### **Comment ça marche**

1. **L'utilisateur remplit le formulaire** sur `/contact`
2. **Les données sont validées** côté client et serveur
3. **Un email de notification** est envoyé à `zubiarrainlucas@gmail.com`
4. **L'utilisateur reçoit une confirmation** visuelle

### **Champs du formulaire**

- **Nom complet** : Requis, 2-50 caractères
- **Email** : Requis, format valide
- **Téléphone** : Optionnel, format français
- **Société** : Optionnel
- **Délai souhaité** : Urgent, Standard, Flexible
- **Type de projet** : 1 page, 3 pages, CMS
- **Détails** : Requis, 5-1000 caractères
- **Fichier** : Optionnel (brief, contenu)

### **Validation**

- ✅ **Côté client** : Validation en temps réel
- ✅ **Côté serveur** : Validation Zod robuste
- ✅ **Protection anti-spam** : Champ honeypot caché

## 🛠️ **Installation et Configuration**

### **Prérequis**

- Node.js 18+
- npm ou yarn
- Compte Resend pour l'envoi d'emails

### **Installation**

```bash
# Cloner le projet
git clone <votre-repo>
cd my-app

# Installer les dépendances
npm install

# Configuration des variables d'environnement
cp .env.example .env.local
# Éditer .env.local avec votre clé API Resend
```

### **Variables d'environnement**

```bash
# .env.local
RESEND_API_KEY=re_votre_clé_api_ici
```

### **Démarrage**

```bash
# Mode développement
npm run dev

# Build de production
npm run build

# Démarrage production
npm start
```

## 📁 **Structure du Projet**

```
my-app/
├── app/
│   ├── api/contact/          # API de contact
│   ├── components/           # Composants React
│   ├── lib/                  # Utilitaires (Resend, validation)
│   ├── contact/              # Page de contact
│   ├── about/                # Page à propos
│   └── pricing/              # Page tarifs
├── public/                   # Assets statiques
├── .env.local               # Variables d'environnement
└── README.md                # Ce fichier
```

## 🔧 **Technologies Utilisées**

- **Frontend** : Next.js 15, React 19, TypeScript
- **Styling** : Tailwind CSS 4
- **Validation** : Zod
- **Emails** : Resend
- **Icons** : Lucide React
- **Déploiement** : Vercel/Netlify (recommandé)

## 📧 **Configuration Resend**

### **Étapes de configuration**

1. **Créer un compte** sur [Resend.com](https://resend.com)
2. **Obtenir une clé API** depuis le dashboard
3. **Ajouter la clé** dans `.env.local`
4. **Tester l'envoi** via le formulaire

### **Adresses d'envoi**

- **Actuellement** : `onboarding@resend.dev` (pour les tests)
- **Production** : `contact@mysimplewebpro.com` (après vérification du domaine)

## 🚀 **Déploiement**

### **Vercel (Recommandé)**

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Configurer les variables d'environnement
vercel env add RESEND_API_KEY
```

### **Netlify**

```bash
# Build
npm run build

# Déployer le dossier .next
# Configurer RESEND_API_KEY dans les variables d'environnement
```

## 🧪 **Tests**

### **Tester l'API**

```bash
# Test GET
curl http://localhost:3000/api/contact

# Test POST
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test"}'
```

### **Tester le formulaire**

1. Aller sur `http://localhost:3000/contact`
2. Remplir le formulaire
3. Vérifier l'envoi d'email
4. Vérifier les messages de succès/erreur

## 📊 **Monitoring**

### **Logs**

- **Console du serveur** : Logs détaillés des envois
- **Console du navigateur** : Logs côté client
- **Dashboard Resend** : Statistiques d'envoi

### **Métriques importantes**

- Taux de délivrabilité des emails
- Temps de réponse de l'API
- Erreurs de validation
- Performance du formulaire

## 🆘 **Dépannage**

### **Problèmes courants**

#### **Email non envoyé**

- Vérifier la clé API Resend
- Vérifier les logs du serveur
- Tester l'API directement

#### **Erreur de validation**

- Vérifier le format des données
- Consulter les logs de validation
- Tester avec des données valides

#### **Formulaire ne fonctionne pas**

- Vérifier la console du navigateur
- Vérifier que l'API est accessible
- Tester la connexion réseau

### **Support**

- **Documentation** : Ce README
- **Issues** : GitHub Issues
- **Logs** : Console serveur et navigateur

## 🔄 **Mises à jour**

### **Dépendances**

```bash
# Mettre à jour les dépendances
npm update

# Vérifier les vulnérabilités
npm audit
```

### **Resend**

- Vérifier régulièrement les quotas
- Surveiller les taux de délivrabilité
- Mettre à jour la configuration si nécessaire

## 📝 **Changelog**

### **v1.0.0** - Système de contact fonctionnel

- ✅ Formulaire de contact avec validation
- ✅ Envoi d'emails via Resend
- ✅ Interface utilisateur moderne
- ✅ Validation côté client et serveur
- ✅ Gestion des erreurs et feedback

## 🤝 **Contribution**

1. Fork le projet
2. Créer une branche feature
3. Commiter les changements
4. Pousser vers la branche
5. Créer une Pull Request

## 📄 **Licence**

Ce projet est privé et propriétaire de MySimpleWebPro.

---

**Développé avec ❤️ par l'équipe MySimpleWebPro**
