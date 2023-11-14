import 'package:flutter/material.dart';
import 'package:user_app/screens/main/pages/campaigns_page.dart';
import 'package:user_app/screens/main/pages/main_home_screen.dart';
import 'package:user_app/screens/main/pages/my_donations.dart';
import 'package:user_app/screens/main/pages/notifications_screen.dart';
import 'package:user_app/utilities/color_from_hex.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int _selectedIndex = 0;

//

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
      body: IndexedStack(
          index: _selectedIndex,
          children: const <Widget>[
            MainHomeScreen(),
            CampaignScreen(),
            MyDonations(),
            NotificationScreen(),
          ],
        ),
      ),
    );
  }
}
