import 'package:flutter/material.dart';
import 'package:user_app/screens/main/components/empy_data_screen.dart';
import 'package:user_app/screens/main/components/event_card.dart';

class CampaignScreen extends StatefulWidget {
  const CampaignScreen({super.key});

  @override
  State<CampaignScreen> createState() => _CampaignScreenState();
}

class _CampaignScreenState extends State<CampaignScreen> {
  // Example list of events
  List<String> eventTitles = [
    'Event 1',
    'Event 2',
    'Event 3',
    // Add more events as needed
  ];

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          title: const Text("Campaigns"),
          centerTitle: true,
          elevation: 0,
        ),
        body: eventTitles.isEmpty
            ? const EmptyData(text: "Campaigns",) // Display this when there are no events
            : ListView.builder(
                itemCount: eventTitles.length,
                itemBuilder: (context, index) {
                  return const EventCard(
                    
                  );
                },
              ),
      ),
    );
  }
}
