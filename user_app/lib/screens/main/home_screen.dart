import 'package:flutter/material.dart';
import 'package:user_app/constants/image_paths.dart';
import 'package:user_app/screens/main/components/campain_card.dart';
import 'package:user_app/utilities/color_from_hex.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
    int _selectedIndex = 0;
   
    void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
       bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        items: const <BottomNavigationBarItem>[
    BottomNavigationBarItem(
          icon: Icon(Icons.home),
          label: 'Home',
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.category),
          label: 'Campaigns',
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.payment),
          label: 'Donations',
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.notifications),
          label: 'Announcements',
        ),
        ],
        currentIndex: _selectedIndex,
        selectedItemColor: fromHex("#20417d"),
        onTap: _onItemTapped,
      ),
        appBar: AppBar(
          elevation: 0,
          title: const Text("Hello Good People"),
        ),
        body: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            //name
            Padding(
              padding: const EdgeInsets.all(20.0),
              child: Text(
                "Hello Rizwan,",
                style: TextStyle(
                  fontSize: 30.0,
                  color: fromHex("#20417d"),
                ),
              ),
            ),
            const SizedBox(
              height: 25,
            ),
            //balance card
            Container(
              height: 120,
              decoration: BoxDecoration(
                color:fromHex("#FFB6C1"),
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
                      // Add your donate button logic here
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
                Container(
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
