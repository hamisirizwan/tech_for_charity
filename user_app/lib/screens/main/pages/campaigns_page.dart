import 'package:flutter/material.dart';

import 'package:user_app/screens/main/pages/campaignTabs/donation_challanges.dart';
import 'package:user_app/screens/main/pages/campaignTabs/orphanage_visits.dart';
import 'package:user_app/screens/main/pages/campaignTabs/tree_planting_tab.dart';
import 'package:user_app/utilities/color_from_hex.dart';

class CampaignScreen extends StatefulWidget {
  const CampaignScreen({super.key});

  @override
  State<CampaignScreen> createState() => _CampaignScreenState();
}

class _CampaignScreenState extends State<CampaignScreen> {
  // Example list of events


  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: DefaultTabController(
        length: 3,
        child: Scaffold(
          appBar: AppBar(
            title: const Text("Campaigns"),
            centerTitle: true,
            elevation: 0,
          ),
          body:  Column(
            children: [
                   TabBar(
                    isScrollable: true,
                    tabs: [
                      Tab(
                        child: Text(
                          "Orphanage Visits",
                          style: TextStyle(color: fromHex("#20417d"), fontSize: 16),
                        ),
                      ),
                      Tab(
                        child: Text(
                          "Tree Planting",
                          style: TextStyle(color: fromHex("#20417d"), fontSize: 16),
                        ),
                      ),
                        Tab(
                        child: Text(
                          "Donation Challanges",
                          style: TextStyle(color: fromHex("#20417d"), fontSize: 16),
                        ),
                      )
                    ],
                  ),

                  const Expanded(child: TabBarView(children: 
                  [
                    OrphanageVisitTab(),
                    TreePlantingTab(),
                    DonationChallangesTab()
                  ]
                  ),)
            ],
          )
        ),
      ),
    );
  }
}
