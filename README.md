# Overview

The Movie DB is a mobile application that lets you search for movies and rate them. Your ratings are stored locally, so you can revisit and update them anytime. Simply use the search bar to find a movie by its exact name, then scroll down to provide your rating.

## Features

- Search Movies: Quickly find any movie by its name.
- Rate Movies: Assign ratings to movies and have them saved for future reference.
- Update Ratings: Easily change your ratings whenever you want.

## Purpose

This app was developed as a learning project to deepen my understanding of app development with React Native. My goal was to create an application with rich user interactions, inspired by various web apps. Through this project, I aimed to:

- Gain hands-on experience in building mobile applications.
- Learn how to fetch data from the web.
- Understand how to store data locally on a device.

{Provide a link to your YouTube demonstration. It should be a 4-5 minute demo of the app running and a walkthrough of the code.}

[Software Demo Video](https://youtu.be/s-37yeBrNxk)

# Development Environment

This app is build with react native and expo. To start the app run `npx expo start --tunnel` at the root of the project. After that command is run expo will list out several options on where to open the app. More information on environment setup can be found on [React's website](https://reactnative.dev/docs/environment-setup).

This app requires an api key for [OMDb](https://www.omdbapi.com/apikey.aspx). The key should be stored in `ombdbApiKey.ts` at the root of the project. The `ombdbApiKey.ts` file should contain the following:

```ts
export const ombdApiKey = "yourKey";
```

## Libraries

- React
- React Native
- Expo
- React Native Storage

# Useful Websites

{Make a list of websites that you found helpful in this project}

- [React Native](https://reactnative.dev/)
- [Expo Go](https://docs.expo.dev/)
- [React Native Storage](https://github.com/sunnylqm/react-native-storage)

# Future Work

{Make a list of things that you need to fix, improve, and add in the future.}

- Add more data to from the search results (critic ratings, plot summary, etc)
- Make the inputs easier to see
- auto load the api key through the env
- Force the ratings input to only allows rating of 1-5
