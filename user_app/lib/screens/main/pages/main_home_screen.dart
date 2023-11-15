import 'package:flutter/material.dart';
import 'package:user_app/constants/image_paths.dart';
import 'package:user_app/routes/app_routes.dart';
import 'package:user_app/screens/main/components/campain_card.dart';
import 'package:user_app/utilities/color_from_hex.dart';

class MainHomeScreen extends StatefulWidget {
  const MainHomeScreen({super.key});

  @override
  State<MainHomeScreen> createState() => _MainHomeScreenState();
}

class _MainHomeScreenState extends State<MainHomeScreen> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        body: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            //name
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    "Hello Rizwan,",
                    style: TextStyle(
                      fontSize: 24.0,
                      color: fromHex("#20417d"),
                    ),
                  ),
                  GestureDetector(
                    onTap: (){
                      Navigator.pushNamed(context, AppRoutes.profileScreen);
                    },
                    child: Container(
                      width: 34.0,
                      height: 34.0,
                      decoration:  BoxDecoration(
                        shape: BoxShape.circle,
                        color: fromHex("#20417d"), // You can change the background color
                      ),
                      child: const Center(
                        child: Icon(
                          Icons.person,
                          size: 30.0, // You can adjust the icon size
                          color: Colors.white, // You can change the icon color
                        ),
                      ),
                    ),
                  )
                ],
              ),
            ),

            const SizedBox(
              height: 25,
            ),
            //balance card
            Container(
              height: 120,
              decoration: BoxDecoration(
                color: fromHex("#FFB6C1"),
                borderRadius: BorderRadius.circular(15),
              ),
              margin: const EdgeInsets.symmetric(horizontal: 20),
              padding: const EdgeInsets.all(20),
              child: Row(
                children: [
                  // Rounded container with a black wallet icon
                  Container(
                    width: 50,
                    height: 50,
                    decoration: const BoxDecoration(
                      color: Colors.black,
                      shape: BoxShape.circle,
                    ),
                    child: const Icon(
                      Icons.account_balance_wallet,
                      color: Colors.white,
                    ),
                  ),
                  const SizedBox(
                      width: 15), // Add some spacing between the icon and text

                  // Column with text - total donated and the amount
                  const Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        'Total Donated',
                        style: TextStyle(
                          fontSize: 16,
                          color: Colors.black,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      SizedBox(height: 5),
                      Text(
                        '\$500.00', // Replace with your actual amount
                        style: TextStyle(
                          fontSize: 18,
                          color: Colors.black,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                  const Spacer(), // Use Spacer to push the button to the right

                  // Donate button
                  ElevatedButton(
                    onPressed: () {
                      Navigator.pushNamed(context, AppRoutes.paymentScreen);
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.black,
                      padding: const EdgeInsets.symmetric(horizontal: 20),
                    ),
                    child: const Text(
                      'Donate',
                      style: TextStyle(
                        fontSize: 16,
                        color: Colors.white,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ],
              ),
            ),

            //featured challanges section
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Section text - Featured Campaigns
                const Padding(
                  padding: EdgeInsets.all(20.0),
                  child: Text(
                    'Featured Campaigns',
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                      color: Colors.black,
                    ),
                  ),
                ),

                // A section that displays campaign cards in a scrollable overscrolling row of cards
                SizedBox(
                  height: 300, // Adjust the height as needed
                  child: ListView(
                    scrollDirection: Axis.horizontal,
                    children: [
                      // Cards
                      FeaturedCampaignCard(
                        image: ImageConstants
                            .campaignImg1, // Replace with your image path
                        date: 'Dec 1, 2023',
                        title: 'Education for All',
                        description:
                            'Support education programs for underprivileged children.',
                        onPressed: () {
                          // Add your join campaign button logic here
                        },
                      ),
                      FeaturedCampaignCard(
                        image: ImageConstants
                            .campaignImg1, // Replace with your image path
                        date: 'Dec 1, 2023',
                        title: 'Education for All',
                        description:
                            'Support education programs for underprivileged children.',
                        onPressed: () {
                          // Add your join campaign button logic here
                        },
                      ),
                      FeaturedCampaignCard(
                        image: ImageConstants
                            .campaignImg1, // Replace with your image path
                        date: 'Dec 1, 2023',
                        title: 'Education for All',
                        description:
                            'Support education programs for underprivileged children.',
                        onPressed: () {
                          // Add your join campaign button logic here
                        },
                      ),
                      FeaturedCampaignCard(
                        image: ImageConstants
                            .campaignImg1, // Replace with your image path
                        date: 'Dec 1, 2023',
                        title: 'Education for All',
                        description:
                            'Support education programs for underprivileged children.',
                        onPressed: () {
                          // Add your join campaign button logic here
                        },
                      ),
                      FeaturedCampaignCard(
                        image: ImageConstants
                            .campaignImg1, // Replace with your image path
                        date: 'Dec 1, 2023',
                        title: 'Education for All',
                        description:
                            'Support education programs for underprivileged children.',
                        onPressed: () {
                          // Add your join campaign button logic here
                        },
                      ),
                      FeaturedCampaignCard(
                        image: ImageConstants
                            .campaignImg1, // Replace with your image path
                        date: 'Dec 1, 2023',
                        title: 'Education for All',
                        description:
                            'Support education programs for underprivileged children.',
                        onPressed: () {
                          // Add your join campaign button logic here
                        },
                      ),
                      FeaturedCampaignCard(
                        image: ImageConstants
                            .campaignImg1, // Replace with your image path
                        date: 'Dec 1, 2023',
                        title: 'Education for All',
                        description:
                            'Support education programs for underprivileged children.',
                        onPressed: () {
                          // Add your join campaign button logic here
                        },
                      ),
                      // Add more FeaturedCampaignCard widgets for additional campaigns
                    ],
                  ),
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}
