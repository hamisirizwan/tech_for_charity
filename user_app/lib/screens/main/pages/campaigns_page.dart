import 'package:flutter/material.dart';

class CampaignScreen extends StatefulWidget {
  const CampaignScreen({super.key});

  @override
  State<CampaignScreen> createState() => _CampaignScreenState();
}

class _CampaignScreenState extends State<CampaignScreen> {
  @override
  Widget build(BuildContext context) {
    return  SafeArea(
      child: Scaffold(
        appBar: AppBar(
          title: const Text("Campaigns"),
          centerTitle: true,
          elevation: 0,
    
        ),
        body: const Center(
          child: Text("CAMPAIGNS PAGE"),
        ),
      ),
    );
  }
}