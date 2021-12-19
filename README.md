# React Capacitor Starter

https://capacitorjs.com/docs/config
https://capacitorjs.com/docs/apis
https://capacitorjs.com/docs/cli
https://developer.android.com/studio/build/building-cmdline
https://github.com/ionic-team/native-run/wiki/Android-Errors
https://github.com/ionic-team/capacitor-assets

```sh
npm install @capacitor/cli
npm install @capacitor/core
npm install @capacitor/ios
npm install @capacitor/android

npx cap init react-capacitor-stater com.example.appname --web-dir=build

npx cap add android
npx cap add ios
```

build.gradle
```js

buildscript {
    repositories {
        maven { url 'https://maven.aliyun.com/repository/gradle-plugin' }
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'http://maven.aliyun.com/nexus/content/groups/public/' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        // google()
        // jcenter()
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:4.2.1'
        classpath 'com.google.gms:google-services:4.3.5'
    }
}

allprojects {
    repositories {
        maven { url 'https://maven.aliyun.com/repository/gradle-plugin' }
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'http://maven.aliyun.com/nexus/content/groups/public/' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        // google()
        // jcenter()
    }
}

```

app/build..gradle
```sh
android {
    splits {
        // Configures multiple APKs based on ABI.
        abi {
            // Enables building multiple APKs per ABI.
            enable true

            // By default all ABIs are included, so use reset() and include to specify that we only
            // want APKs for x86 and x86_64.

            // Resets the list of ABIs that Gradle should create APKs for to none.
            reset()

            // Specifies a list of ABIs that Gradle should create APKs for.
            include 'x86', 'x86_64', 'armeabi-v7a', 'arm64-v8a'

            // Specifies that we do not want to also generate a universal APK that includes all ABIs.
            universalApk false
        }
    }
}

```

## ENV
```sh
JAVA_HOME
java -version

gradlew

# Android Studio, on top right corner option select "SDK Manager".
# Support latest Android SDK 31
ANDROID_SDK_ROOT

# ANDROID_SDK_ROOT/emulator
emulator -list-avds
emulator -avd avd_name
```
