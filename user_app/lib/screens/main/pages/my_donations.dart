import 'package:flutter/material.dart';
import 'package:user_app/screens/main/components/empy_data_screen.dart';

class MyDonations extends StatefulWidget {
  const MyDonations({super.key});

  @override
  State<MyDonations> createState() => _MyDonationsState();
}

class _MyDonationsState extends State<MyDonations> {
  @override
  Widget build(BuildContext context) {
   return  SafeArea(
     child: Scaffold(
         appBar: AppBar(
          title: const Text("My Contributions"),
          centerTitle: true,
          elevation: 0,
        ),
         body: const EmptyData(text: "Donations",)
      ),
   );
  }
}