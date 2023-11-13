import 'package:flutter/material.dart';
import 'package:user_app/constants/image_paths.dart';
import 'package:user_app/routes/app_routes.dart';


class OnboardingScreen extends StatefulWidget {
  const OnboardingScreen({Key? key}) : super(key: key);

  @override
  _OnboardingScreenState createState() => _OnboardingScreenState();
}

class _OnboardingScreenState extends State<OnboardingScreen> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
          backgroundColor: Colors.grey[200],
          body: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 30.0, vertical: 15),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                //icon
                SizedBox(
                  height: MediaQuery.of(context).size.height * 0.4,
                  width: double.infinity,
                  child:  Image(
                    image: AssetImage(ImageConstants.logo),
                  ),
                ),
                Expanded(
                  child: Column(
                    children: [
                      //title
                      const SizedBox(
                        height: 20,
                      ),
                      const Text(
                        "One Smile Matters, Humanity Matters",
                        style: TextStyle(
                            fontSize: 24, fontWeight: FontWeight.w800),
                        textAlign: TextAlign.center,
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      const Text(
                        "Join our humble course to give a smile to the less priviladged in our society",
                        style: TextStyle(
                          fontSize: 21,
                        ),
                        textAlign: TextAlign.center,
                      ),
                      SizedBox(
                        height: MediaQuery.of(context).size.height * 0.1,
                      ),
                      Padding(
                        padding: const EdgeInsets.only(left: 30.0, right: 30.0),
                        child:     ClipRRect(
                    borderRadius: const BorderRadius.all(Radius.circular(10)),
                    child: SizedBox(
                      width: 329,
                      height: 56,
                      child: ElevatedButton(
                        onPressed: () {
                             Navigator.pushNamed(context, AppRoutes.loginScreen);
                        },
                        style: ElevatedButton.styleFrom(
                          backgroundColor: const Color(0xFF20417D),
                        ),
                        child: const Text(
                          'GET STARTED',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 15,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ),
                    ),
                  ),
                      )
                    ],
                  ),
                )

                //subtitle
                //button
              ],
            ),
          )),
    );
  }
}