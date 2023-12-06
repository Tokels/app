# Build

We're creating APKs for Android Emulators and devices to test our application in dev mode.

We're emulating the APK using Android Studio.

## dev

### Android

1. Creating an apk, for more info read [This documentation](https://docs.expo.dev/build-reference/apk/)

   - `npx eas login`
     - username: `zerodeleo`
   - `npx eas build:configure`
     - `android`
   - `npx eas build -p android --profile preview`
     - `Generate a new Android Keystore Y`

2. Emulate the apk, for more info read [This documentation](https://docs.expo.dev/workflow/android-studio-emulator/)

## prod

TODO:
