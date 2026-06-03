# 🚀 Prochaines Étapes - Applications Mobiles iOS et Android

## ✅ Ce qui a été fait

Votre projet est maintenant configuré pour construire des applications iOS et Android avec **Capacitor**!

### ✓ Installation complétée:
- Capacitor CLI et Core installés
- Plateforme iOS créée (dossier `ios/`)
- Plateforme Android créée (dossier `android/`)
- Configuration Capacitor adaptée (`capacitor.config.ts`)
- Scripts npm ajoutés pour faciliter le workflow

---

## 📋 Checklist pour le Déploiement

### Avant de publier:

- [ ] **Vérifier l'identité de l'app**: Modifier `capacitor.config.ts` si nécessaire
- [ ] **Ajouter des icônes**: Placer les icônes dans `public/icons/`
- [ ] **Configurer les certificats iOS**: Pour l'App Store
- [ ] **Signer l'app Android**: Créer un keystore pour la distribution
- [ ] **Tester sur appareil réel**: iPhone et/ou téléphone Android
- [ ] **Optimiser les permissions**: Vérifier `ios/App/App/Info.plist` et `android/app/src/main/AndroidManifest.xml`

---

## 🎯 Commandes Rapides

### Développement:
```bash
npm run dev                # Développement web
npm run build:mobile       # Build + Sync mobile
```

### Déploiement iOS:
```bash
npm run ios               # Ouvrir Xcode
# Puis dans Xcode: Product → Build For → Running
```

### Déploiement Android:
```bash
npm run android           # Ouvrir Android Studio
# Puis: Build → Generate Signed Bundle/APK
```

---

## 🔧 Étapes Détaillées par Plateforme

### 1️⃣ **iOS (macOS uniquement)**

#### Installation des dépendances:
```bash
cd ios
pod install --repo-update
cd ..
```

#### Ouvrir Xcode:
```bash
npm run ios
```

#### Configuration pour App Store:
1. Dans Xcode, sélectionner le projet "Didis Car Location"
2. Aller à "Signing & Capabilities"
3. Configurer votre Apple Developer Team ID
4. Dans "General", mettre à jour la version (Bundle Version)

#### Build pour test:
1. Connecter un iPhone ou utiliser le simulateur
2. Cliquer "Run" ou Product → Run

#### Publication App Store:
1. Product → Build For → Archive
2. Organizer → Validate
3. Distribuer pour "App Store Connect"

---

### 2️⃣ **Android**

#### Installation d'Android Studio:
- Télécharger depuis [https://developer.android.com/studio](https://developer.android.com/studio)
- Installer l'Android SDK (API 30+)
- Configurer `ANDROID_HOME` en variables d'environnement

#### Ouvrir Android Studio:
```bash
npm run android
```

#### Configuration du fichier AndroidManifest.xml:
Le fichier se trouve à `android/app/src/main/AndroidManifest.xml`
- Vérifier les permissions nécessaires (localisation, téléphone, etc.)

#### Build pour test:
1. Build → Make Project
2. Run → Run 'app'
3. Sélectionner un émulateur ou un appareil connecté

#### Créer un keystore pour la publication:
```bash
keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-key-alias
```

#### Publication Google Play:
1. Build → Generate Signed Bundle/APK
2. Sélectionner "Bundle"
3. Charger sur Google Play Console

---

## 📂 Fichiers Importants

| Fichier | Description |
|---------|-------------|
| `capacitor.config.ts` | Configuration principale de Capacitor |
| `ios/App/App/Info.plist` | Configuration iOS (permissions, etc.) |
| `android/app/src/main/AndroidManifest.xml` | Configuration Android |
| `out/` | Build output (généré par `npm run build`) |

---

## 🔐 Sécurité et Variables d'Environnement

Si vous utilisez des clés API ou des configurations sensibles:

1. Créer un fichier `.env.local` à la racine:
```
API_URL=https://api.example.com
API_KEY=your-secret-key
```

2. Utiliser dans le code:
```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

> **Note**: Les variables avec le préfixe `NEXT_PUBLIC_` sont accessibles dans le navigateur.

---

## 📞 Support et Ressources

- **Documentation Capacitor**: https://capacitorjs.com/docs
- **Guide Capacitor iOS**: https://capacitorjs.com/docs/ios
- **Guide Capacitor Android**: https://capacitorjs.com/docs/android
- **Apple Developer**: https://developer.apple.com
- **Google Play Console**: https://play.google.com/console

---

## 🐛 Problèmes Courants

### iOS - "CocoaPods not found"
```bash
sudo gem install cocoapods
cd ios
pod install
cd ..
```

### Android - Build échoue
```bash
cd android
./gradlew clean build
cd ..
npm run sync:android
```

### Sync échoue
```bash
npm run build:mobile
```

---

## 🎉 Prêt?

Commencez par:
```bash
npm run build:mobile
npm run ios         # ou npm run android
```

Bonne chance! 🚀
