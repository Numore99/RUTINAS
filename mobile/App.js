import React, { useState } from "react";
import { ActivityIndicator, Image, Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

const APP_URL = "https://numore99.github.io/RUTINAS/";

function LoadingScreen() {
  return (
    <View style={styles.stateScreen}>
      <Image source={require("./assets/icon.png")} style={styles.logo} />
      <ActivityIndicator color="#d61f1f" size="large" />
      <Text style={styles.stateTitle}>RutFit</Text>
      <Text style={styles.stateText}>Cargando entrenamiento...</Text>
    </View>
  );
}

function OfflineScreen({ onRetry }) {
  return (
    <View style={styles.stateScreen}>
      <Image source={require("./assets/icon.png")} style={styles.logo} />
      <Text style={styles.stateTitle}>Sin conexión</Text>
      <Text style={styles.stateText}>Revisa internet y vuelve a intentarlo.</Text>
      <Pressable style={styles.retryButton} onPress={onRetry}>
        <Text style={styles.retryText}>Reintentar</Text>
      </Pressable>
    </View>
  );
}

export default function App() {
  const [offline, setOffline] = useState(false);
  const [webKey, setWebKey] = useState(0);

  function retry() {
    setOffline(false);
    setWebKey((current) => current + 1);
  }

  return (
    <View style={styles.shell}>
      <StatusBar hidden />
      {offline ? (
        <OfflineScreen onRetry={retry} />
      ) : (
        <WebView
          key={webKey}
          source={{ uri: APP_URL }}
          javaScriptEnabled
          domStorageEnabled
          sharedCookiesEnabled
          thirdPartyCookiesEnabled
          mixedContentMode="always"
          setSupportMultipleWindows={false}
          startInLoadingState
          renderLoading={LoadingScreen}
          onError={() => setOffline(true)}
          onHttpError={(event) => {
            if (event.nativeEvent.statusCode >= 400) {
              setOffline(true);
            }
          }}
          style={styles.webview}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    backgroundColor: "#090909"
  },
  webview: {
    flex: 1,
    backgroundColor: "#090909"
  },
  stateScreen: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    padding: 28,
    backgroundColor: "#090909"
  },
  logo: {
    width: 112,
    height: 112,
    marginBottom: 22,
    borderRadius: 28
  },
  stateTitle: {
    marginTop: 18,
    color: "#f5f5f5",
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: 0
  },
  stateText: {
    marginTop: 8,
    color: "#9a9a9a",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center"
  },
  retryButton: {
    marginTop: 24,
    minWidth: 180,
    alignItems: "center",
    borderRadius: 16,
    paddingVertical: 15,
    paddingHorizontal: 22,
    backgroundColor: "#d61f1f"
  },
  retryText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "900"
  }
});
