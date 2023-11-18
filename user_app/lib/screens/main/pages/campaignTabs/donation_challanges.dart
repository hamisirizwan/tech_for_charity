import 'package:flutter/material.dart';
import 'package:user_app/screens/main/components/empy_data_screen.dart';

class DonationChallangesTab extends StatefulWidget {
  const DonationChallangesTab({super.key});

  @override
  State<DonationChallangesTab> createState() => _DonationChallangesTabState();
}

class _DonationChallangesTabState extends State<DonationChallangesTab> {
  @override
  Widget build(BuildContext context) {
    return const EmptyData(text: "Donation Challanges");
  }
}