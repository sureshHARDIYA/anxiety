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
