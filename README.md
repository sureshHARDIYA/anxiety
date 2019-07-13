README
Designs https://www.behance.net/gallery/50455397/MedicalHealthcare-Appointment-App-(iOSAndroid)

App https://www.behance.net/gallery/26699581/HealthcareMedical-Appointment-App

Similar https://www.mdcalc.com/phq-9-patient-health-questionnaire-9#next-steps

Color code 2b78d4, 333333, 2b78d4, 666666, 46b6a6, 4abfc6,

Fonts -Montserrat Regular -Montserrat Bold

## Get Started
- cd anxietyCBT
- react-native start
- react-native run-android (on another terminal)

For iOS
  - cd anxietyCBT
  - npm install
  - react-native link
  - Open anxietyCBT/ios/anxietyCBT.xcodeproj in xcode
  - Before building go to File->Project Settings and change Build System to Legacy Build System
  - Build

## Deployment(Fastlane + Fabric)
  - Install fastlane: `sudo gem install fastlane -NV`
  - Create `./fastlane/release-notes.beta.txt` and put your message to release
  - Run deploy ios beta version: `fastlane ios beta`


## Build Android version


```

keytool -genkey -v -keystore anxietyCBT.android.keystore -alias anxietyCBT-android -keyalg RSA -keysize 2048 -validity 10000

=> Move anxietyCBT.android.keystore to ./android/app

```


Then edit the file `~/.gradle/gradle.properties` and add the following (replace **** with the correct keystore password, alias and key password)


```
ANXIETY_RELEASE_STORE_FILE=./anxietyCBT.android.keystore
ANXIETY_RELEASE_KEY_ALIAS=manxietyCBT-android
ANXIETY_RELEASE_STORE_PASSWORD=****
ANXIETY_RELEASE_KEY_PASSWORD=****

```

```
cd android && ./gradlew assembleRelease
```
