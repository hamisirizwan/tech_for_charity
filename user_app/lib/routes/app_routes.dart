import 'package:flutter/material.dart';
import 'package:user_app/screens/joinUs_screen.dart';
import 'package:user_app/screens/login_screen.dart';
import 'package:user_app/screens/main/home_screen.dart';
import 'package:user_app/screens/main/pages/event_details_page.dart';
import 'package:user_app/screens/main/pages/payment_page.dart';
import 'package:user_app/screens/main/pages/profile_page.dart';
import 'package:user_app/screens/main/pages/single_campaign_screen.dart';
import 'package:user_app/screens/onboarding_screen.dart';
import 'package:user_app/screens/splash_screen.dart';

class AppRoutes {
static const String onboardingScreen = '/onboarding_screen';
static const String loginScreen = '/login_screen';
static const String splashScreen = '/splash_screen';
static const String joinUsScreen = '/joinUs_screen';
static const String homeScreen = '/home_screen';
static const String singleCampaignScreen = '/single_campaign_screen';
static const String paymentScreen = '/payment_screen';
static const String profileScreen = '/profile_screen';
static const String eventDetailsPage = '/event_details_screen';


static Map<String, WidgetBuilder> routes = {
    onboardingScreen: (context) => const OnboardingScreen(),
    loginScreen: (context) => const LoginScreen(),
    splashScreen: (context) => const SplashScreen(),
    joinUsScreen: (context) => const RegisterScreen(),
    homeScreen: (context) => const HomePage(),
    singleCampaignScreen: (context) => const SingleCampaignScreen(),
    paymentScreen: (context) => const PaymentScreen(),
    profileScreen: (context) => const ProfileScreen(),
    eventDetailsPage: (context) => const EventDetailScreen(),
  };
}