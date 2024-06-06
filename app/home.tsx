import React from "react";
import { Image, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedInput } from "@/components/ThemedInput";
import { ThemedView } from "@/components/ThemedView";
import { ombdApiKey } from "@/ombdbApiKey";
import { MovieInfo } from "@/types";
import { ThemedBadge } from "@/components/ThemedBadge";
import storage from "@/utils/storage";

export default function HomeScreen() {
  const [search, setSearch] = React.useState("");
  const [rating, setRating] = React.useState("0");
  const [movieInfo, setMovieInfo] = React.useState<MovieInfo | null>(null);

  const fetchMovieData = async (movieName: string) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?t=${movieName}&apikey=${ombdApiKey}`
      );
      const json = await response.json();

      Image.getSize(json.Poster, (width, height) => {
        setMovieInfo({
          title: json.Title,
          year: json.Year,
          rated: json.Rated,
          poster: json.Poster,
          imageWidth: width,
          imageHeight: height,
          id: json.imdbID,
        });
      });

      getRating(json?.imdbID ?? "");
    } catch (error) {
      console.error(error);
    }
  };

  const storeRating = async () => {
    storage.save({
      key: movieInfo?.id ?? "",
      data: rating,
    });
  };

  const getRating = async (key: string) => {
    storage
      .load({
        key,
      })
      .then((value) => {
        setRating(value);
      })
      .catch((err) => {
        console.warn(err.message);
        switch (err.name) {
          case "NotFoundError":
            setRating("0");
            break;
        }
      });
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/film-reel-small.jpg")}
          style={styles.image}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">The Movie DB</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedInput
          onChangeText={setSearch}
          onBlur={() => fetchMovieData(search)}
          value={search}
          placeholder="Search Movie by Name"
          keyboardType="default"
        />
      </ThemedView>

      {movieInfo && (
        <>
          <ThemedView style={styles.movieTitle}>
            <ThemedText type="subtitle">
              {movieInfo?.title} ({movieInfo.year})
            </ThemedText>

            <ThemedBadge>{movieInfo.rated}</ThemedBadge>
          </ThemedView>
          <ThemedView>
            <Image
              style={styles.moviePoster}
              source={{ uri: movieInfo.poster }}
              height={movieInfo?.imageHeight}
              width={movieInfo?.imageWidth}
            />
          </ThemedView>

          <ThemedView>
            <ThemedInput
              onChangeText={setRating}
              onBlur={storeRating}
              value={rating}
              keyboardType="numeric"
              label="Rating (1-5)"
            />
          </ThemedView>
        </>
      )}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  image: {
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  movieTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 16,
  },
  moviePoster: {
    marginTop: 16,
    margin: "auto",
  },
});
