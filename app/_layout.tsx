import { useFrameworkReady } from '@/hooks/useFrameworkReady'@@ .. @@
 export default function RootLayout() {
   useFrameworkReady();
 
   const [fontsLoaded, fontError] = useFonts({
     'Inter-Regular': Inter_400Regular,
     'Inter-Medium': Inter_500Medium,
     'Inter-SemiBold': Inter_600SemiBold,
     'Inter-Bold': Inter_700Bold,
   });
 
   useEffect(() => {
     if (fontsLoaded || fontError) {
       SplashScreen.hideAsync();
     }
   }, [fontsLoaded, fontError]);
 
   if (!fontsLoaded && !fontError) {
     return null;
   }
 
   return (
     <>
       <Stack screenOptions={{ headerShown: false }}>
+        <Stack.Screen name="index" />
         <Stack.Screen name="auth" />
         <Stack.Screen name="onboarding" />
         <Stack.Screen name="(tabs)" />
         <Stack.Screen name="+not-found" />
       </Stack>
       <StatusBar style="auto" />
     </>
   );
 }