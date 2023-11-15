import 'package:flutter/material.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({Key? key});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          title: const Text("My Profile"),
          centerTitle: true,
          elevation: 0,
        ),
        body: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: [
              // Profile container
              Container(
                margin: const EdgeInsets.all(16),
                padding: const EdgeInsets.all(20),
                width: double.infinity,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(15),
                  color: Colors.grey[100], // Set your desired background color
                ),
                child: const Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Circle name avatar - centered
                    Center(
                      child: Column(
                        children: [
                          CircleAvatar(
                            radius: 50,
                            // backgroundImage: AssetImage('assets/profile_image.jpg'),
                            child: Text(
                              "R",
                              style: TextStyle(fontSize: 40),
                            ),
                          ),

                          SizedBox(height: 10),

                          // Name - centered
                          Text(
                            'RIZWAN',
                            style: TextStyle(
                              fontSize: 20,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          SizedBox(height: 10),
                          Text(
                            '0768793923',
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 25),

              // Text buttons
              Column(
                children: [
                  // Help Center
                  Row(
                    children: [
                      Icon(Icons.help_outline, size: 30,), // Question mark icon
                      SizedBox(width: 10),
                      InkWell(
                        onTap: () {
                          // Handle Help Center click
                        },
                        child: const Text(
                          'Help Center',
                          style: TextStyle(
                            fontSize: 20,
                          ),
                        ),
                      ),
                    ],
                  ),

SizedBox(height: 5,),
                  // Divider line
                  Divider(),
SizedBox(height: 5,),
                  // Delete Account
                        Row(
                    children: [
                      Icon(Icons.vpn_key, size: 30,), // Question mark icon
                      SizedBox(width: 10),
                      InkWell(
                        onTap: () {
                          // Handle Help Center click
                        },
                        child: const Text(
                          'Change Password',
                          style: TextStyle(
                            fontSize: 20,
                          ),
                        ),
                      ),
                    ],
                  ),

SizedBox(height: 5,),

 Divider(),
 SizedBox(height: 5,),
                  // Logout
                  Row(
                    children: [
                      Icon(Icons.logout, size: 30,), // Question mark icon
                      SizedBox(width: 10),
                      InkWell(
                        onTap: () {
                          // Handle Help Center click
                        },
                        child: const Text(
                          'Logout',
                          style: TextStyle(
                            fontSize: 20,
                          ),
                        ),
                      ),
                    ],
                  ),
SizedBox(height: 5,),
 Divider(),
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
