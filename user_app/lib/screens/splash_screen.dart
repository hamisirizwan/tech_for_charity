import 'package:flutter/material.dart';
import 'package:user_app/constants/image_paths.dart';
import 'package:user_app/screens/onboarding_screen.dart';
 // Import the target screen

class SplashScreen extends StatefulWidget {
  const SplashScreen({Key? key}) : super(key: key);

  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();

    // Add a delay before navigating to the target screen
    Future.delayed(const Duration(seconds: 2), () {
      // Navigate to the target screen
      Navigator.of(context).pushReplacement(
        MaterialPageRoute(builder: (context) => const OnboardingScreen()),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        // backgroundColor: Colors.amber,
        body: Container(
          width: double.maxFinite,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Image(image: AssetImage(ImageConstants.logo)),
            ],
          ),
        ),
      ),
    );
  }
}
