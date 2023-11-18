import 'package:flutter/material.dart';
import 'package:user_app/constants/image_paths.dart';
import 'package:user_app/utilities/color_from_hex.dart';

class EventDetailScreen extends StatefulWidget {
  const EventDetailScreen({super.key});

  @override
  State<EventDetailScreen> createState() => _EventDetailScreenState();
}

class _EventDetailScreenState extends State<EventDetailScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Event Details"),
        centerTitle: true,
        elevation: 0,
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              //card
              Container(
                width: double.infinity,
                height: 350,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(20),
                ),
                child: Column(
                  children: [
                    Expanded(
                      child: ClipRRect(
                        borderRadius: const BorderRadius.vertical(
                            top: Radius.circular(15)),
                        child: Image(
                          image: AssetImage(ImageConstants.campaignImg1),
                          width: double.infinity,
                          fit: BoxFit.cover,
                        ),
                      ),
                    ),
                    Container(
                      padding: const EdgeInsets.all(16),
                      decoration: BoxDecoration(
                        color: Colors.grey[200],
                      ),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                          Row(
                            children: [
                              Icon(
                                Icons.people,
                                color: Colors.blueGrey[700],
                              ),
                              const SizedBox(
                                width: 8,
                              ),
                              const Text("4 attendees")
                            ],
                          ),
                          GestureDetector(
                            onTap: () {
                              //share logic
                            },
                            child: Row(
                              children: [
                                Icon(
                                  Icons.share,
                                  color: Colors.blueGrey[700],
                                ),
                                const SizedBox(
                                  width: 8,
                                ),
                                const Text("Share")
                              ],
                            ),
                          ),
                        ],
                      ),
                    )
                  ],
                ),
              ),
              const SizedBox(
                height: 25,
              ),
              //title
              const Text(
                "Malindi Orphanage Visit",
                style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
              ),
              const SizedBox(
                height: 15,
              ),
              //venue title
              Text(
                "Venue & time",
                style: TextStyle(fontSize: 16, color: Colors.grey[700]),
              ),
              const SizedBox(
                height: 20,
              ),
              //venue
              Container(
                padding:
                    const EdgeInsets.symmetric(vertical: 12, horizontal: 20),
                decoration: BoxDecoration(
                    color: Colors.grey[300],
                    borderRadius: BorderRadius.circular(16)),
                child: const Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Text(
                      "Malindi,Kenya",
                      style: TextStyle(fontSize: 16),
                    ),
                    Icon(Icons.directions)
                  ],
                ),
              ),
              const SizedBox(
                height: 15,
              ),
              //date
              Container(
                padding:
                    const EdgeInsets.symmetric(vertical: 12, horizontal: 20),
                decoration: BoxDecoration(
                    color: Colors.grey[300],
                    borderRadius: BorderRadius.circular(16)),
                child: const Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Text(
                      "Saturday 30, Nov 22",
                      style: TextStyle(fontSize: 16),
                    ),
                    Icon(Icons.access_time)
                  ],
                ),
              ),
              const SizedBox(
                height: 25,
              ),
              //venue title
              Text(
                "More Details",
                style: TextStyle(fontSize: 16, color: Colors.grey[700]),
              ),
              const SizedBox(
                height: 20,
              ),
              Text(
                "Join us for a heartwarming day at the Malindi Orphanage Visit on November 30, 2023, in the vibrant town of Malindi.",
                style: TextStyle(fontSize: 16, color: Colors.grey[600]),
              ),
              const SizedBox(
                height: 10,
              ),
              Text(
                "This event promises to be a touching experience as we come together to make a positive impact on the lives of the children at the orphanage.",
                style: TextStyle(fontSize: 16, color: Colors.grey[600]),
              ),
              const SizedBox(
                height: 25,
              ),
              GestureDetector(
                onTap: () {},
                child: Container(
                  padding: const EdgeInsets.all(12),
                  width: double.infinity,
                  decoration: BoxDecoration(
                      color: fromHex("#20417d"),
                      borderRadius: BorderRadius.circular(16.0)),
                  child: const Text(
                    "Join Event",
                    textAlign: TextAlign.center,
                    style: TextStyle(fontSize: 14, color: Colors.white),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
