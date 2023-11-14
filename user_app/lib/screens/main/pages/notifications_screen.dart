import 'package:flutter/material.dart';
// import 'package:user_app/utilities/color_from_hex.dart';

class NotificationScreen extends StatefulWidget {
  const NotificationScreen({super.key});

  @override
  State<NotificationScreen> createState() => _NotificationScreenState();
}

class _NotificationScreenState extends State<NotificationScreen> {
  @override
  Widget build(BuildContext context) {
    return   SafeArea(
      child: Scaffold(
           appBar: AppBar(
          title: const Text("Notifications"),
          centerTitle: true,
          elevation: 0,
          // backgroundColor: fromHex("#ed3103"),
        ),
        body: const Center(
          child: Text("Notifications PAGE"),
        ),
      ),
    );
  }
}