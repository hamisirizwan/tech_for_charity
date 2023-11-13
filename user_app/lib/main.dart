import 'package:flutter/material.dart';
import 'package:flutter_native_splash/flutter_native_splash.dart';
import 'package:user_app/routes/app_routes.dart';


void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Humanity First Home',
      debugShowCheckedModeBanner:false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0x0ff60008)),
        useMaterial3: true,
        inputDecorationTheme: const InputDecorationTheme(
          // filled: true,
          // fillColor: Colors.grey,
          border: OutlineInputBorder(
            gapPadding: 10,
            borderRadius: BorderRadius.all(
              Radius.circular(30),
            ),
            borderSide: BorderSide(color: Colors.white, width: 2.0),
          ),
          floatingLabelBehavior: FloatingLabelBehavior.always,
        ),
      ),
      initialRoute: AppRoutes.splashScreen,
      routes: AppRoutes.routes,
    );
  }
}

