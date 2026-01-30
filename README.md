# 🎧 Soundscape App

A customizable **Soundscape Generator** built with **React Native (Expo)**.  
This app allows users to mix and adjust nature sounds and ambient effects for relaxation, focus, or sleep.

---

## 🧠 Overview

The Soundscape App provides an immersive sound experience through interactive sliders and audio controls.  
Users can personalize their environment by adjusting preferences such as sound type, volume, and intensity — all in real-time.

### Features
- 🎵 Adjustable ambient sound sliders (rain, birds, ocean, etc.)
- ⚙️ Real-time sound mixing using Expo Audio APIs
- 📱 Clean UI built with React Native components
- 🌙 Works across iOS, Android, and Web
- 💾 Expo-managed build for easy deployment

---

## 📂 Project Structure

```
SoundscapeApp/
│
├── App.js                       # Entry point, navigation setup
├── package.json                 # Dependencies and scripts
│
├── components/
│   └── PreferenceSliders.js     # UI component for sliders
│
├── screens/
│   ├── HomeScreen.js            # App landing page
│   └── SoundscapeScreen.js      # Main sound mixing interface
│
└── assets/                      # App icons, splash, and sound files
```

---

## 🚀 Getting Started

### 1. Install Dependencies
Make sure you have [Node.js](https://nodejs.org/) and [Expo CLI](https://docs.expo.dev/) installed.

```bash
npm install
```

### 2. Run Locally

```bash
npx expo start
```

Then scan the QR code using the **Expo Go** app on your phone or run it in your web browser.

---

## 🛠️ Build for Production

### Build for Android
```bash
eas build -p android
```
- Produces an `.aab` (for Play Store) or `.apk` (for testing).  
- Requires a [Google Play Developer Account](https://play.google.com/console/) ($25 one-time).

### Build for iOS
```bash
eas build -p ios
```
- Produces an `.ipa` file.  
- Requires an [Apple Developer Account](https://developer.apple.com/programs/) ($99/year).

---

## 📦 Configuration (`app.json`)

Make sure your app has a proper configuration before publishing:

```json
{
  "expo": {
    "name": "Soundscape",
    "slug": "soundscape",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "bundleIdentifier": "com.yourname.soundscape"
    },
    "android": {
      "package": "com.yourname.soundscape",
      "versionCode": 1
    }
  }
}
```

---

## 📱 Publishing

### Google Play Store
1. Sign in to [Google Play Console](https://play.google.com/console/).  
2. Create a new app.  
3. Upload your `.aab` file.  
4. Add screenshots, descriptions, and policies.  
5. Submit for review.

### Apple App Store
1. Sign in to [App Store Connect](https://appstoreconnect.apple.com/).  
2. Create a new app record.  
3. Upload your `.ipa` file.  
4. Add app metadata and screenshots.  
5. Submit for review.

---

## 🔄 Updates (Optional)
Push updates instantly without a new build:
```bash
expo publish
```

---

## 🧑‍💻 Author
Khulile Nzimande
Built with ❤️ using [React Native](https://reactnative.dev/) and [Expo](https://expo.dev/).

---

## 🪪 License
This project is licensed under the **MIT License** – feel free to use and modify.
