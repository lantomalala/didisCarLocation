# 📱 Mobile App Setup Guide - Didis Car Location

Ce guide explique comment construire et déployer l'application iOS et Android pour Didis Car Location.

## ✅ Prérequis

### Pour iOS:
- **macOS** (obligatoire)
- **Xcode** 14+ 
- **CocoaPods** (`sudo gem install cocoapods`)
- **iOS Deployment Target**: 14.0+

### Pour Android:
- **Android Studio** 4.1+
- **Android SDK 30+**
- **JDK 11+**
- **ANDROID_HOME** configuré dans vos variables d'environnement

### Commandes communes (tous les OS):
- **Node.js** 18+
- **npm** 9+

---

## 🚀 Démarrage Rapide

### 1. Build et Sync Initial
```bash
npm run build:mobile
```

Cela va:
- Construire le site Next.js
- Synchroniser les fichiers avec Capacitor
- Préparer les projets natifs

### 2. Ouvrir iOS (sur macOS)
```bash
npm run ios
```

Cela va:
- Construire l'app
- Ouvrir Xcode automatiquement
- Vous pouvez ensuite run sur l'émulateur ou un appareil réel

### 3. Ouvrir Android
```bash
npm run android
```

Cela va:
- Construire l'app
- Ouvrir Android Studio automatiquement
- Vous pouvez ensuite run sur l'émulateur ou un appareil réel

---

## 📦 Structure du Projet

```
.
├── src/                    # Code source Next.js
├── out/                    # Build output (généré par `npm run build`)
├── ios/                    # Projet Xcode natif
├── android/                # Projet Android natif
├── capacitor.config.ts     # Configuration Capacitor
└── package.json            # Scripts npm
```

---

## 🔄 Workflow Typique

### Pendant le développement:

1. **Développer et tester sur le web:**
   ```bash
   npm run dev
   # Accédez à http://localhost:3000
   ```

2. **Tester les changements sur mobile:**
   ```bash
   npm run build:mobile
   npm run ios    # ou npm run android
   ```

3. **Sync seulement (après des changements web mineurs):**
   ```bash
   npm run sync:ios
   # ou
   npm run sync:android
   ```

---

## 📝 Scripts Disponibles

| Commande | Description |
|----------|-------------|
| `npm run build:mobile` | Build Next.js et sync avec Capacitor |
| `npm run ios` | Build et ouvre le projet iOS dans Xcode |
| `npm run android` | Build et ouvre le projet Android dans Android Studio |
| `npm run sync:ios` | Sync uniquement les fichiers iOS |
| `npm run sync:android` | Sync uniquement les fichiers Android |
| `npm run build` | Build Next.js uniquement |
| `npm run dev` | Lance le serveur de développement |

---

## ⚙️ Configuration

### Changer le Package ID ou le Nom de l'App:

Modifier `capacitor.config.ts`:
```typescript
const config: CapacitorConfig = {
  appId: 'com.monentreprise.monapp',  // Changer ici
  appName: 'Mon App',                  // Et ici
  webDir: 'out'
};
```

Puis run:
```bash
npm run build:mobile
```

---

## 🔐 Configuration iOS

### Build pour l'App Store:

1. Ouvrir Xcode:
   ```bash
   npm run ios
   ```

2. Dans Xcode:
   - Sélectionner le projet "Didis Car Location"
   - Aller dans "Signing & Capabilities"
   - Configurer votre Team ID
   - Changer la version dans "General"

3. Build pour production:
   ```
   Product → Build For → Running
   ```

---

## 🤖 Configuration Android

### Build APK pour distribution:

1. Ouvrir Android Studio:
   ```bash
   npm run android
   ```

2. Dans Android Studio:
   - Build → Generate Signed Bundle/APK
   - Créer ou sélectionner votre keystore
   - Sélectionner "APK"
   - Choisir "release"

3. Signer avec votre clé privée

---

## 🐛 Dépannage

### Problème: "capacitor.config.ts not found"
```bash
npm install @capacitor/cli @capacitor/core --save-dev
```

### Problème: Erreurs iOS
```bash
cd ios
pod install --repo-update
cd ..
npm run sync:ios
```

### Problème: Erreurs Android
```bash
cd android
./gradlew clean build
cd ..
npm run sync:android
```

### Problème: Port 3000 déjà utilisé
```bash
npm run dev -- -p 3001
```

---

## 📱 Tester sur Appareil Réel

### iPhone:
1. Connecter l'iPhone au Mac
2. Dans Xcode, sélectionner votre appareil
3. Cliquer "Run"

### Android:
1. Activer le "Developer Mode" sur l'appareil
2. Connecter via USB
3. Autoriser l'accès USB
4. Dans Android Studio, cliquer "Run"

---

## 📚 Ressources Supplémentaires

- [Documentation Capacitor](https://capacitorjs.com/docs)
- [Guide iOS](https://capacitorjs.com/docs/ios)
- [Guide Android](https://capacitorjs.com/docs/android)

---

## 🎯 Informations de l'App

- **App ID**: com.didiscar.location
- **App Name**: Didis Car Location
- **Framework**: Next.js + Capacitor
- **Platforms**: iOS 14+, Android 11+

---

**Questions?** Consultez la documentation Capacitor ou les logs de build pour plus de détails.
