import 'package:flutter/material.dart';
import 'package:user_app/screens/main/components/empy_data_screen.dart';
import 'package:user_app/screens/main/components/event_card.dart';

class OrphanageVisitTab extends StatefulWidget {
  const OrphanageVisitTab({super.key});

  @override
  State<OrphanageVisitTab> createState() => _OrphanageVisitTabState();
}

class _OrphanageVisitTabState extends State<OrphanageVisitTab> {
  List<String> eventTitles = [
    'Event 1',
    'Event 2',
    'Event 3',
    // Add more events as needed
  ];

  @override
  Widget build(BuildContext context) {
    return eventTitles.isEmpty
        ? const EmptyData(
            text: "Campaigns",
          ) // Display this when there are no events
        : ListView.builder(
            itemCount: eventTitles.length,
            itemBuilder: (context, index) {
              return const EventCard();
            },
          );
  }
}
